# frozen_string_literal: true

namespace :dataload do
  desc 'load naics'
  task load_naics: :environment do
    json_path = Rails.root.join('lib/tasks/json_data/naics.json')

    NAICS_DATA = JSON.parse(File.read(json_path)).freeze

    ActiveRecord::Base.transaction do
      NAICS_DATA.each do |data|
        Naic.create!(data.transform_keys(&:downcase))
      end
      puts 'Naics loaded!'
    end
  end

  desc 'load companies'
  task load_companies: :environment do
    json_path = Rails.root.join('lib/tasks/json_data/companies.json')

    COMPANIES_DATA = JSON.parse(File.read(json_path)).freeze

    ActiveRecord::Base.transaction do
      COMPANIES_DATA.each do |data|
        addresses = data.delete('addresses')
        company = Company.create!(data.transform_keys(&:downcase))

        addresses.each do |address|
          company.addresses.create!(address.transform_keys(&:downcase))
        end
      end
      puts 'Companies loaded!'
    end
  end
end
