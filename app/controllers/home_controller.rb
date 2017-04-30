require 'i18n'

class HomeController < ApplicationController
  def index
    countries = CapitalCountry.all.pluck(:name).shuffle[0..10]
    stripped_countries = []
    countries.each do |country|
      I18n.transliterate(country)
      stripped_countries << country.gsub(/[aeiou\s+\-\.]/, '').downcase
    end
    @country_pairs = countries.zip(stripped_countries)
    render component: 'Game', props: { country_pairs: @country_pairs}
  end
end
