# == Schema Information
#
# Table name: categories
#
#  id           :bigint           not null, primary key
#  product_id   :bigint           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  category_ids :integer          default([]), is an Array
#
class Category < ApplicationRecord
    SHOES = 'Shoes'
    CLOTHING = 'Clothing'
    ACCESSORIES = 'Accessories'
    KIDS_BABY = 'Kids + Baby'
    ALL_GENDERS = 'All Genders'
    WOMEN = 'Women'
    MEN = 'Men'
    VINTAGE = 'Vintage'
    DRESSES = 'Dresses'
    TOPS = 'Tops'
    SWEATERS_SWEATSHIRTS = 'Sweaters + Sweatshirts'
    OUTERWEAR ='Outerwear'
    JEANS = 'Jeans'
    PANTS = 'Pants'
    SKIRTS = 'Skirts'
    JUMPSUITS_ROMPERS = 'Jumpsuits + Rompers'
    SHORTS = 'Shorts'
    ACTIVEWEAR = 'Activewear'
    SWIMWEAR = 'Swimwear'
    COSTUMES = 'Costumes'
    HOT_STUFF = 'Hot Stuff'


    category_map = {
        1 => SHOES,
        2 => CLOTHING,
        3 => ACCESSORIES,
        4 => KIDS_BABY,
        5 => ALL_GENDERS,
        6 => WOMEN,
        7 => MEN,
        8 => VINTAGE,
        9 => DRESSES,
        10 => TOPS,
        11 => SWEATERS_SWEATSHIRTS,
        12 => OUTERWEAR,
        13 => JEANS,
        14 => PANTS,
        15 => SKIRTS,
        16 => JUMPSUITS_ROMPERS,
        17 => SHORTS,
        18 => ACTIVEWEAR,
        19 => SWIMWEAR,
        20 => COSTUMES,
        21 => HOT_STUFF
    }

    def get_all_catogories 
        category_map
    end 

    belongs_to :product
end
