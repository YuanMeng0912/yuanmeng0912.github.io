require "active_support/all"
require 'nokogiri'
require 'open-uri'

module Helpers
  extend ActiveSupport::NumberHelper
end

module Jekyll
  class GoogleScholarCitationsTag < Liquid::Tag
    Citations = { }
    LoadedProfiles = { }

    def initialize(tag_name, params, tokens)
      super
      splitted = params.split(" ").map(&:strip)
      @scholar_id = splitted[0]
      @article_id = splitted[1]

      if @scholar_id.nil? || @scholar_id.empty?
        puts "Invalid scholar_id provided"
      end

      if @article_id.nil? || @article_id.empty?
        puts "Invalid article_id provided"
      end
    end

    def render(context)
      article_id = context[@article_id.strip]
      scholar_id = context[@scholar_id.strip]
      cache_key = "#{scholar_id}:#{article_id}"
      fallback_count = context.registers[:site].data.dig("scholar_citations", "citations", article_id)

      return format_count(fallback_count) unless fallback_count.nil?

      begin
        fetch_profile(scholar_id) unless GoogleScholarCitationsTag::LoadedProfiles[scholar_id]
        citation_count = GoogleScholarCitationsTag::Citations.fetch(cache_key) do
          fallback_count.nil? ? "N/A" : format_count(fallback_count)
        end
      rescue StandardError => e
        citation_count = fallback_count.nil? ? "N/A" : format_count(fallback_count)
        GoogleScholarCitationsTag::LoadedProfiles[scholar_id] = true
        puts "Error fetching Google Scholar profile #{scholar_id}: #{e.class} - #{e.message}"
      end

      return "#{citation_count}"
    end

    private

    def fetch_profile(scholar_id)
      profile_url = ENV.fetch(
        "SCHOLAR_PROFILE_URL",
        "https://scholar.google.com/citations?hl=en&user=#{scholar_id}&pagesize=100&sortby=pubdate",
      )
      doc = Nokogiri::HTML(
        URI.open(
          profile_url,
          "User-Agent" => "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/126 Safari/537.36",
          "Accept-Language" => "en-US,en;q=0.9",
          open_timeout: 10,
          read_timeout: 30,
        )
      )

      rows = doc.css("tr.gsc_a_tr")
      raise "Google Scholar returned no publication records" if rows.empty?

      rows.each do |row|
        href = row.at_css("a.gsc_a_at")&.[]("href")
        article_id = href&.match(/citation_for_view=#{Regexp.escape(scholar_id)}:([^&]+)/)&.captures&.first
        next if article_id.nil?

        citation_text = row.at_css(".gsc_a_ac")&.text.to_s.delete(",").strip
        citation_count = citation_text.empty? ? 0 : citation_text.to_i
        GoogleScholarCitationsTag::Citations["#{scholar_id}:#{article_id}"] = format_count(citation_count)
      end

      GoogleScholarCitationsTag::LoadedProfiles[scholar_id] = true
      puts "Loaded #{rows.length} publications from Google Scholar profile #{scholar_id}"
    end

    def format_count(citation_count)
      return citation_count.to_s if citation_count.to_i < 1000

      Helpers.number_to_human(
        citation_count,
        format: "%n%u",
        precision: 2,
        units: { thousand: "K", million: "M", billion: "B" },
      )
    end
  end
end

Liquid::Template.register_tag('google_scholar_citations', Jekyll::GoogleScholarCitationsTag)
