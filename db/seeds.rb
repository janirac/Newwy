# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# db/seeds.rb
require "open-uri"
# require "aws-sdk-s3"

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Product.destroy_all
    ProductImage.destroy_all
    Category.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('products')
    ApplicationRecord.connection.reset_pk_sequence!('favorites')
    ApplicationRecord.connection.reset_pk_sequence!('categories')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      email: 'demo@user.io', 
      password: 'password'
    )
  
    # More users
    10.times do 
      User.create!({
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
    end

    users = User.all

    users.each do |user|
        Cart.create!(user_id: user.id)
    end 

    puts "Creating products..."

    Product.create!( #1
      name: "Vintage Black Corset Dress with Gold Detail",
      price: 100.00,
      description: "Beautiful corset vintage dress perfect for a wedding or event!
      The dress was designed in Paris and has a corseted body and adjustable straps (pictured)
      It`s a French 38. It`s fits me and I`m a Small/Medium.",
      amount: 1,
      color: "black",
      condition: "Like New",
      brand: "Other/Unknown",
      size: "S"
    )

    Product.create!( #2
      name: "Patchwork Halter Tank",
      price: 89.95,
      description: "Love The Label is known for its vintage-inspired silhouettes 
      and bohemian femininity—look for botanical-inspired prints, 
      ruffles and tiered edges all in blouses, skirts and maxi dresses. Garden party, anyone?
      19L Cotton Imported",
      amount: 4,
      color: "Multi",
      condition: "Used",
      brand: "Love The Label"
    )

    Product.create!( #3
      name: "Striped Sweater Vest",
      price: 75.00,
      description: "The thoughtfully designed pieces from Anthropologie surprise, delight and tell stories—of a 
      collaborative, inventive community of women savoring every adventure and seeking beauty wherever they go.
      18.25L
      Acrylic, nylon, wool, elastane
      Imported
      Chelsea is 5'10, wearing a size XS",
      amount: 4,
      color: "Purple",
      condition: "Used",
      brand: "Anthropologie",
      original_price: 98.00
    )

    Product.create!( #4
      name: "Suede Moto Jacket",
      price: 65.00,
      description: "Worn once or twice. Perfect condition. Silver details. Comes with belt. 
      Nice heavy suede. I accept reasonable offers :)",
      amount: 1,
      color: "Grey",
      condition: "Like New",
      brand: "Topshop",
      size: 8,
      original_price: 400.00
    )

    Product.create!( #5
      name: "Pinstriped Joe's Jeans Flares",
      price: 60.00,
      description: "Pinstriped/railroad striped Joe`s Jeans in like new condition. These are from my college days and I didn`t wear very often. 
      Bright light blue wash with flare leg. Long 32.5 inch inseam. Size 29 but run small for today. I wear between 28-29 in modern jeans and I 
      couldn`t quite button these. 15 inches lying flat across waist. 18 inches across hips (measured flat at bottom of zipper) Lower 8.5 inch rise. 
      Button fly and classic leather JJ logo on back pocket.",
      amount: 1,
      color: "Blue",
      condition: "Like New",
      brand: "Joe's Jeans",
      size: "29"
    )

    Product.create!( #6
      name: "Gia Denim Skirt",
      price: 99.95,
      description: "Based in downtown Los Angeles, premium denim label AGOLDE pulls inspiration from 
      decades of youth culture, transforming nostalgia into contemporary staples made from innovative 
      fabrics sourced from around the world.
      15 long
      Cotton
      Imported
      Imena is 5'11 and wearing a Size 27",
      amount: 4,
      color: "Grey",
      condition: "Used",
      brand: "AGOLDE",
      original_price: 128.00
    )

    Product.create!( #7
      name: "Levi's 505 Shorts",
      price: 55.00,
      description: "26” the perfect Levi’s staple piece to have in your closet! 
      Perfect condition",
      amount: 1,
      color: "Blue",
      condition: "Like New",
      brand: "Levi's",
      size: "26",
      original_price: 120.00
    )

    Product.create!( #8
      name: "Fast and Free High-Rise Tight",
      price: 70.00,
      description: "Black, pockets on side, zipper pocket No stains",
      amount: 1,
      color: "Black",
      condition: "Like New",
      brand: "Lululemon",
      size: "6"
    )

    Product.create!( #9
      name: "Vintage Guess High Waisted Cut Off Shorts",
      price: 60.00,
      description: "Tag marked size 30 100% cotton Soft and velvety ! Late 80s/early 90s era
      As with all vintage clothing, it is expected that each item may have a little bit and 
      even excessive amounts of wear. It all adds to the charm of the garment. 
      I inspect and account for all imperfections that I come across, but please do be aware 
      there may be some small details I miss.",
      amount: 1,
      color: "Purple",
      condition: "Used",
      brand: "Guess",
      size: "27"
    )

    Product.create!( #10
      name: "UO Danielle Patchwork Linen Coverall Jumpsuit",
      price: 99.00,
      description: "Perfectly pieced together coverall from UO. Long sleeve silhouette made 
      from a lightweight linen blend with a loose fit and zip-front closure. Finished with 
      workwear accents at the straight leg, a pointed collar and pockets at the chest.
      Content + Care
      55% Linen, 43% cotton, 2% spandex
      Dry clean
      Imported
      Size + Fit
      Item shown is size Small
      Measurements taken from size Medium",
      amount: 1,
      color: "Blue",
      condition: "New With Tags",
      brand: "Urban Outfitters",
      size: "XS",
      original_price: 149.00
    )




    Product.create!( #11
      name: "Vince Camuto Leather Shoulder Bag",
      price: 98.00,
      description: "New without tags. Zippers up side, immaculate condition.",
      amount: 1,
      color: "Brown",
      condition: "Like New",
      brand: "Vince Camuto",
      size: "One Size"

    )
    Product.create!( #12
      name: "Steve Madden Idina",
      price: 100.00,
      description: "Brand new. Size 8. Runs small. Green crocodile print. Synthetic material",
      amount: 1,
      color: "Green",
      condition: "New With Tags",
      brand: " Steve Madden",
      size: "8",
      original_price: 189.00
    )

    Product.create!( #13
      name: "Kentsa Suede Ankle Boot",
      price: 90.00,
      description: "A retro-inspired lift and sleek lines combine with flawless detail in the gorgeous Kentsa platform booties from Vince Camuto.
      3-1/3″ block heel; 1″ platform Round-toe platform dress booties with inner ankle zipper closure Overlay at vamp Suede uppers",
      amount: 1,
      color: "Red",
      condition: "Like New",
      brand: " Vince Camuto",
      size: "11",
      original_price: 180.00
    )

    Product.create!( #14
      name: "Gogo style black platform boots",
      price: 80.00,
      description: "Black Dolce Vita vero cuoio platform boots - gogo style - zippers on both sides of the calf for comfortable fit
      Amazing condition - minimal usage wear
      Women’s size 7 true to size
      Please read before purchasing: I do my best to scour each item before listing, and do not accept returns unless there is a tragic flaw not noted -or- pictured",
      amount: 1,
      color: "Black",
      condition: "Used",
      brand: " Dolce Vita",
      size: "7"
    )


    Product.create!( #15
      name: "Polo Navy Collared Shirt",
      price: 85.00,
      description: "Brand new, clean and in mint condition!!",
      amount: 1,
      color: "Blue",
      condition: "Like New",
      brand: "Polo Ralph Lauren",
      size: "M",
      original_price: 120.00
    )

    Product.create!( #16
      name: "True Religion Blue Joggers",
      price: 90.00,
      description: "True Religion Blue Joggers NWT Size S This Classic True Religion Jogger is perfect for non denim days. Designed from a comfy cotton blend, this men's jogger style sweatpant features an elasticized drawstring waistband, hip pockets, back pocket, and a tapered ankle. Elastic waistband Tapered Ankle Machine Wash 88% cotton, 12% polyester",
      amount: 1,
      color: "Blue",
      condition: "New With Tags",
      brand: "True Religion",
      size: "S",
      original_price: 100.00
    )


    Product.create!( #17
      name: "Pleasure graphic pants",
      price: 55.00,
      description: "Size 34, never worn from pleasures",
      amount: 1,
      color: "White",
      condition: "New With Tags",
      brand: "Other / Unknown",
      size: "34",
      original_price: 120.00
    )


    Product.create!( #18
      name: "Inis Crafts Wool Fisherman Sweaters",
      price: 69.00,
      description: "100%Wool cable knit turtleneck Great condition",
      amount: 1,
      color: "Beige",
      condition: "Like New",
      brand: "Other / Unknown",
      size: "XL",
      original_price: 300.00
    )


    Product.create!( #19
      name: "The North Face Men's 1/4-Zip Fleece Jacket",
      price: 70.00,
      description: "Size XL In great condition Red heather Stretch fleece with soft brushed back Reverse-coil zippered chest pocket",
      amount: 1,
      color: "Red",
      condition: "Like New",
      brand: "The North Face",
      size: "XL"
    )


    Product.create!( #20
      name: "Spyder MENS HAZE USA GLORY DOWN JACKET",
      price: 100.00,
      description: "Downproof Nylon Plain Weave with DWR Duck Down 600 Fill Reverse Coil center front zipper
      Show your U.S.A Pride year-round with the Eric Haze designed Glory Jacket. This 600 fill, responsibly sourced, duck down jacket is ideal for transitioning through the seasons or as an under layer on frigid days. A light durable water repellent exterior helps shed rain and the zippered hand pockets keep your items secure. From cheering on the best to looking your best, stay warm and in style with the Glory Jacket",
      amount: 1,
      color: "Blue",
      condition: "New With Tags",
      brand: "Spyder",
      size: "XL",
      original_price: 199.00
    )


    Product.create!( #21
      name: "Vintage Etienne Aigner Blue Plaid Dress Shirt. Men’s size M-L",
      price: 56.00,
      description: "Really nice light blue color. Subtle plaid. Logo on pocket. So many ways to wear and style.
      Best Fit: S-L Marked Size: 17 1/2 32/33 Color: Blue Material: 55% Cotton 45% Polyester Care: Machine Washable Condition: Good - minimal wear
      Measurements: Chest (measured pit to pit) - 26” Sleeve length (measured from underarm to sleeve hem) - 19” Length (measured from front shoulder to hem) - 29.5”
      Model is size 0-2, height 5’8.",
      amount: 1,
      color: "Blue",
      condition: "Used",
      brand: "Etienne Aigner",
      size: "M"
    )


    Product.create!( #22
      name: "Vintage Nike Burgundy Quarter Zip Windbreaker",
      price: 70.00,
      description: "True 90's vintage, deep maroon pull over style windbreaker jacket. Features large embroidered center check logo, a zipper kangaroo pocket, and small Nike Air logo on back.
      • Labeled a men’s large; fits super oversized and relaxed. Would work for up to an XXL • 100% nylon shell
      Excellent gently used condition with no notable flaws
      Measurements (taken flat): Pit to pit: 27” Length: 31”
      Shown on a size small, 5'11",
      amount: 1,
      color: "Red",
      condition: "Like New",
      brand: "Nike",
      size: "L T"
    )


    Product.create!( #23
      name: "Vintage trench / overcoat cargo pockets",
      price: 55.00,
      description: "Lightweight trench / overcoat with cargo pockets 
      I would wear this with vintage baggy denim and a crop top, a cute polo and trousers or chinos and a graphic tee",
      amount: 1,
      color: "Green",
      condition: "Used",
      brand: "Other / Unknown",
      size: "L",
      original_price: 55.00
    )


    Product.create!( #24
      name: "Classic Icon Sherpa Jacket",
      price: 109.95,
      description: "What began in 1990 as a small L.A.-based label making vintage-inspired denim, Lucky Brand is now known as the leading designer and manufacturer of premium denim. These are jeans made for the free thinkers, thrill seekers, go-getters and those who have their own look and make their own luck.
      Cotton, elastane, polyester
      Imported
      Jada is 5'8",
      amount: 1,
      color: "Black",
      condition: "Used",
      brand: " Lucky Brand",
      size: "XL",
      original_price: 149.00
    )


    Product.create!( #25
      name: "Floral Ruffle Mini Dress",
      price: 79.95,
      description: "California-cool for wherever you live and wherever you travel—that's RAHI. Pieces for a new generation of jetsetters who don't mind the confidence boost that comes with wearing beautifully designed but infinitely wearable clothing for every adventure.
      Viscose
      Imported
      Rocio is 5'10",
      amount: 1,
      color: "White",
      condition: "Used ",
      brand: "RAHI",
      size: "S",
      original_price: 107.00
    )
    
    puts "Creating Product Images"
   ProductImage.create!(
        product_id: 1,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/Vintage+Black+Corset+Dress+with+Gold+Detail.jpeg"
    )
   ProductImage.create!(
        product_id: 1,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/Vintage+Black+Corset+Dress+with+Gold+Detail2.jpeg" 
    )
   ProductImage.create!(
        product_id: 1,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/Vintage+Black+Corset+Dress+with+Gold+Detail3.jpeg"
    )

   ProductImage.create!(
        product_id: 1,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/Vintage+Black+Corset+Dress+with+Gold+Detail4.jpeg"
    )


   ProductImage.create!(
        product_id: 4,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/Suede+Moto+Jacket.jpeg"
    )
    
   ProductImage.create!(
        product_id: 4,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/Suede+Moto+Jacket2.jpeg"
    )
    
   ProductImage.create!(
        product_id: 4,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/Suede+Moto+Jacket3.jpeg"
    )

   ProductImage.create!(
        product_id: 4,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/Suede+Moto+Jacket4.jpeg"
    )


   ProductImage.create!(
        product_id: 2,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/Patchwork+Halter+Tank.jpeg"
    )
    
   ProductImage.create!(
        product_id: 2,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/Patchwork+Halter+Tank2.jpeg"
    )
    
   ProductImage.create!(
        product_id: 2,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/Patchwork+Halter+Tank3.jpeg"
    )


   ProductImage.create!(
        product_id: 3,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/Striped+Sweater+Vest.jpeg"
    )

   ProductImage.create!(
        product_id: 3,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/Striped+Sweater+Vest2.jpeg"
    )

   ProductImage.create!(
        product_id: 3,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/Striped+Sweater+Vest3.jpeg"
    )

   ProductImage.create!(
        product_id: 3,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/Striped+Sweater+Vest4.jpeg"
    )

   ProductImage.create!(
        product_id: 5,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/Pinstriped+Joe's+Jeans+Flares.jpeg"
    )
    
   ProductImage.create!(
        product_id: 5,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/Pinstriped+Joe's+Jeans+Flares2.jpeg"
    )
    
   ProductImage.create!(
        product_id: 5,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/Pinstriped+Joe's+Jeans+Flares3.jpeg"
    )
    
   ProductImage.create!(
        product_id: 5,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/Pinstriped+Joe's+Jeans+Flares4.jpeg"
    )


   ProductImage.create!(
        product_id: 6,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/GiaDenimSkirt.jpeg"
    )
    
   ProductImage.create!(
        product_id: 6,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/GiaDenimSkirt1.jpeg"
    )

   ProductImage.create!(
        product_id: 6,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/GiaDenimSkirt3.jpeg"
    )
    
   ProductImage.create!(
        product_id: 6,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/GiaDenimSkirt4.jpeg"
    )


    ProductImage.create!(
        product_id: 9,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/guess1.jpeg"
    )

   ProductImage.create!(
        product_id: 9,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/guess2.jpeg"
    )

   ProductImage.create!(
        product_id: 9,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/guess3.jpeg"
    )

   ProductImage.create!(
        product_id: 9,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/guess4.jpeg"
    )


   ProductImage.create!(
        product_id: 8,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/FastandFreeHighRiseTight.jpeg" 
    )

   ProductImage.create!(
        product_id: 8,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/FastandFreeHighRiseTight2.jpeg"
    )

   ProductImage.create!(
        product_id: 8,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/FastandFreeHighRiseTight3.jpeg"
    )

   ProductImage.create!(
        product_id: 8,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/FastandFreeHighRiseTight4.jpeg"
    )


   ProductImage.create!(
        product_id: 7,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/Levis505Shorts.jpeg" 
    )
    

   ProductImage.create!(
        product_id: 7,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/Levis505Shorts2.jpeg"
    )
    

   ProductImage.create!(
        product_id: 7,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/Levis505Shorts3.jpeg"
    )
    
   ProductImage.create!(
        product_id: 7,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/Levis505Shorts4.jpeg"
    )


   ProductImage.create!(
        product_id: 10,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/1danielle.jpeg" 
    )
    

   ProductImage.create!(
        product_id: 10,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/danielle2.jpeg"
    )
    

   ProductImage.create!(
        product_id: 10,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/danielle3.jpeg"
    )

   ProductImage.create!(
        product_id: 10,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/danielle4.jpeg"
    )
    
   
   ProductImage.create!(
        product_id: 11,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/1.jpeg"
    )
   ProductImage.create!(
        product_id: 11,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/2jpeg.jpeg"
    )


   ProductImage.create!(
        product_id: 12,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/3.jpeg"
    )
   ProductImage.create!(
        product_id: 12,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/6.jpeg"
    )
   ProductImage.create!(
        product_id: 12,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/5.jpeg"
    )
   ProductImage.create!(
        product_id: 12,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/4.jpeg"
    )



   ProductImage.create!(
        product_id: 13,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/10.jpeg"
    )
   ProductImage.create!(
        product_id: 13,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/9.jpeg"
    )
   ProductImage.create!(
        product_id: 13,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/8.jpeg"
    )
   ProductImage.create!(
        product_id: 13,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/7.jpeg"
    )



   ProductImage.create!(
        product_id: 14,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/13.jpeg"
    )
   ProductImage.create!(
        product_id: 14,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/14.jpeg"
    )
   ProductImage.create!(
        product_id: 14,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/15.jpeg"
    )



   ProductImage.create!(
        product_id: 15,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/20jpeg.jpeg"
    )
   ProductImage.create!(
        product_id: 15,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/19.jpeg"
    )
   ProductImage.create!(
        product_id: 15,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/18.jpeg"
    )
   ProductImage.create!(
        product_id: 15,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/17jpeg.jpeg"
    )


   ProductImage.create!(
        product_id: 16,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/21.jpeg"
    )
   ProductImage.create!(
        product_id: 16,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/22.jpeg"
    )
   ProductImage.create!(
        product_id: 16,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/23.jpeg"
    )




   ProductImage.create!(
        product_id: 17,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/29.jpeg"
    )
   ProductImage.create!(
        product_id: 17,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/28.jpeg"
    )
   ProductImage.create!(
        product_id: 17,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/27.jpeg"
    )
   ProductImage.create!(
        product_id: 17,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/26.jpeg"
    )


   ProductImage.create!(
        product_id: 18,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/30.jpeg"
    )
   ProductImage.create!(
        product_id: 18,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/31.jpeg"
    )
   ProductImage.create!(
        product_id: 18,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/32.jpeg"
    )



   ProductImage.create!(
        product_id: 19,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/34.jpeg"
    )
   ProductImage.create!(
        product_id: 19,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/35.jpeg"
    )
   ProductImage.create!(
        product_id: 19,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/36.jpeg"
    )



   ProductImage.create!(
        product_id: 20,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/38.jpeg"
    )
   ProductImage.create!(
        product_id: 20,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/37.jpeg"
    )



   ProductImage.create!(
        product_id: 21,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/40.jpeg"
    )
   ProductImage.create!(
        product_id: 21,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/41.jpeg"
    )
   ProductImage.create!(
        product_id: 21,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/42.jpeg"
    )


   ProductImage.create!(
        product_id: 22,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/44.jpeg"
    )
   ProductImage.create!(
        product_id: 22,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/45.jpeg"
    )
   ProductImage.create!(
        product_id: 22,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/46.jpeg"
    )
   ProductImage.create!(
        product_id: 22,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/47.jpeg"
    )



   ProductImage.create!(
        product_id: 23,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/49.jpeg"
    )
   ProductImage.create!(
        product_id: 23,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/50.jpeg"
    )


   ProductImage.create!(
        product_id: 24,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/49.jpeg"
    )
   ProductImage.create!(
        product_id: 24,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/50.jpeg"
    )
    
   ProductImage.create!(
        product_id: 25,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/49.jpeg"
    )
   ProductImage.create!(
        product_id: 25,
        image_url: "https://newwy-seeds.s3.us-east-2.amazonaws.com/50.jpeg"
    )


    puts "Creating Category"

    Category.create!(
        product_id: 10,
        category_ids: [2, 6, 21, 16]
    )
    Category.create!(
        product_id: 9,
        category_ids: [2, 8, 17, 6, 2, 13, 21]
    )

    Category.create!(
        product_id: 8,
        category_ids: [2, 6, 14, 18, 21]
    )

    Category.create!(
        product_id: 7,
        category_ids: [2, 17, 13, 2, 6, 21]
    )

    Category.create!(
        product_id: 6,
        category_ids: [2, 6, 15, 21]
    )

    Category.create!(
        product_id: 5,
        category_ids: [2, 13, 14, 2, 6, 21]
    )

    Category.create!(
        product_id: 4,
        category_ids: [2, 12, 6, 21]
    )

    Category.create!(
        product_id: 3,
        category_ids: [2, 10, 6, 11, 21]
    )

    Category.create!(
        product_id: 2,
        category_ids: [2, 10, 2, 21]
    )

    Category.create!(
        product_id: 1,
        category_ids: [2, 6, 9, 8, 2, 21]
    )
    Category.create!(
        product_id: 11,
        category_ids: [2, 21, 23, 24]
    )
    Category.create!(
        product_id: 12,
        category_ids: [2, 1, 8, 22]
    )
    Category.create!(
        product_id: 13,
        category_ids: [2, 1, 8, 22, 21]
    )
    Category.create!(
        product_id: 14,
        category_ids: [2, 1, 6, 23]
    )
    Category.create!(
        product_id: 15,
        category_ids: [2, 6, 10, 23]
    )
    Category.create!(
        product_id: 16,
        category_ids: [2, 14, 5, 10, 23, 21]
    )
    Category.create!(
        product_id: 17,
        category_ids: [2, 14, 22]
    )
    Category.create!(
        product_id: 18,
        category_ids: [6, 9, 8, 2, 22]
    )
    Category.create!(
        product_id: 19,
        category_ids: [6, 9, 8, 2, 22]
    )
    Category.create!(
        product_id: 20,
        category_ids: [6, 9, 8, 2, 23]
    )
    Category.create!(
        product_id: 21,
        category_ids: [6, 9, 8, 2, 23]
    )
    Category.create!(
        product_id: 22,
        category_ids: [6, 9, 8, 2, 23]
    )
    Category.create!(
        product_id: 23,
        category_ids: [6, 9, 8, 2, 22]
    )
    Category.create!(
        product_id: 24,
        category_ids: [6, 9, 8, 2, 22]
    )
    Category.create!(
        product_id: 25,
        category_ids: [6, 9, 8, 2, 22]
    )
   
    puts "Done!"
  end
 