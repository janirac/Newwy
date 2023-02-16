# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# db/seeds.rb

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
    
    puts "Creating Product Images"
   ProductImage.create!(
        product_id: 1,
        image_url: "https://i.ibb.co/ZSQ0478/Vintage-Black-Corset-Dress-with-Gold-Detail.jpg"
    )
   ProductImage.create!(
        product_id: 1,
        image_url: "https://i.ibb.co/WNCjB8X/Vintage-Black-Corset-Dress-with-Gold-Detail2.jpg" 
    )
   ProductImage.create!(
        product_id: 1,
        image_url: "https://i.ibb.co/Sv3tvLc/Vintage-Black-Corset-Dress-with-Gold-Detail3.jpg"
    )

   ProductImage.create!(
        product_id: 1,
        image_url: "https://i.ibb.co/dt2Fpym/Vintage-Black-Corset-Dress-with-Gold-Detail4.jpg"
    )


   ProductImage.create!(
        product_id: 4,
        image_url: "https://i.ibb.co/k4zxXc9/Suede-Moto-Jacket.jpg"
    )
    
   ProductImage.create!(
        product_id: 4,
        image_url: "https://i.ibb.co/ThfVZYb/Suede-Moto-Jacket2.jpg"
    )
    
   ProductImage.create!(
        product_id: 4,
        image_url: "https://i.ibb.co/LNXkgDV/Suede-Moto-Jacket3.jpg"
    )

   ProductImage.create!(
        product_id: 4,
        image_url: "https://i.ibb.co/ydk26Qs/Suede-Moto-Jacket4.jpg"
    )


   ProductImage.create!(
        product_id: 2,
        image_url: "https://i.ibb.co/98MV64s/Patchwork-Halter-Tank.jpg"
    )
    
   ProductImage.create!(
        product_id: 2,
        image_url: "https://i.ibb.co/rwzR4L1/Patchwork-Halter-Tank2.jpg"
    )
    
   ProductImage.create!(
        product_id: 2,
        image_url: "https://i.ibb.co/S757nLT/Patchwork-Halter-Tank3.jpg"
    )


   ProductImage.create!(
        product_id: 3,
        image_url: "https://i.ibb.co/3s6fHHb/Striped-Sweater-Vest2.jpg"
    )

   ProductImage.create!(
        product_id: 3,
        image_url: "https://i.ibb.co/BKmvFW8/Striped-Sweater-Vest.jpg"
    )

   ProductImage.create!(
        product_id: 3,
        image_url: "https://i.ibb.co/p0gvj8G/Striped-Sweater-Vest4.jpg"
    )

   ProductImage.create!(
        product_id: 3,
        image_url: "https://i.ibb.co/3v5gx8K/Striped-Sweater-Vest3.jpg"
    )

   ProductImage.create!(
        product_id: 5,
        image_url: "https://i.ibb.co/jR48Qqc/Pinstriped-Joe-s-Jeans-Flares.jpg"
    )
    
   ProductImage.create!(
        product_id: 5,
        image_url: "https://i.ibb.co/SrFX8rD/Pinstriped-Joe-s-Jeans-Flares2.jpg"
    )
    
   ProductImage.create!(
        product_id: 5,
        image_url: "https://i.ibb.co/6smchYm/Pinstriped-Joe-s-Jeans-Flares3.jpg"
    )
    
   ProductImage.create!(
        product_id: 5,
        image_url: "https://i.ibb.co/VBdffZK/Pinstriped-Joe-s-Jeans-Flares4.jpg"
    )


   ProductImage.create!(
        product_id: 6,
        image_url: "https://i.ibb.co/KbR7bDR/Gia-Denim-Skirt.jpg"
    )
    
   ProductImage.create!(
        product_id: 6,
        image_url: "https://i.ibb.co/1LgKTW9/Gia-Denim-Skirt1.jpg"
    )

   ProductImage.create!(
        product_id: 6,
        image_url: "https://i.ibb.co/ZXkKBYJ/Gia-Denim-Skirt4.jpg"
    )
    
   ProductImage.create!(
        product_id: 6,
        image_url: "https://i.ibb.co/Zgcv2Jk/Gia-Denim-Skirt3.jpg"
    )


   ProductImage.create!(
        product_id: 9,
        image_url: "https://i.ibb.co/f4ZFrJw/guess2.jpg"
    )

   ProductImage.create!(
        product_id: 9,
        image_url: "https://i.ibb.co/3FKXx41/guess1.jpg"
    )

   ProductImage.create!(
        product_id: 9,
        image_url: "https://i.ibb.co/SrpJ7Df/guess3.jpg"
    )

   ProductImage.create!(
        product_id: 9,
        image_url: "https://i.ibb.co/GxrnVtB/guess4.jpg"
    )


   ProductImage.create!(
        product_id: 8,
        image_url: "https://i.ibb.co/Gp0RLFd/1.jpg" 
    )

   ProductImage.create!(
        product_id: 8,
        image_url: "https://i.ibb.co/51Yy8yW/2.jpg"
    )

   ProductImage.create!(
        product_id: 8,
        image_url: "https://i.ibb.co/kq36wQt/3.jpg"
    )

   ProductImage.create!(
        product_id: 8,
        image_url: "https://i.ibb.co/sWQ1cLp/4.jpg"
    )


   ProductImage.create!(
        product_id: 7,
        image_url: "https://i.ibb.co/QHnW6jk/Levis505-Shorts2.jpg" 
    )
    

   ProductImage.create!(
        product_id: 7,
        image_url: "https://i.ibb.co/jWF4Xwm/Levis505-Shorts.jpg"
    )
    

   ProductImage.create!(
        product_id: 7,
        image_url: "https://i.ibb.co/kxdqCC6/Levis505-Shorts3.jpg"
    )
    
   ProductImage.create!(
        product_id: 7,
        image_url: "https://i.ibb.co/mbzhf0R/Levis505-Shorts4.jpg"
    )


   ProductImage.create!(
        product_id: 10,
        image_url: "https://i.ibb.co/ctV9Jj0/1danielle.jpg" 
    )
    

   ProductImage.create!(
        product_id: 10,
        image_url: "https://i.ibb.co/QcJwhGh/danielle2.jpg"
    )
    

   ProductImage.create!(
        product_id: 10,
        image_url: "https://i.ibb.co/VvSqWFt/danielle3.jpg"
    )
    
    
   ProductImage.create!(
        product_id: 10,
        image_url: "https://i.ibb.co/rbgNJXJ/danielle4.jpg"
    )

    puts "Creating Category"

    Category.create!(
        product_id: 10,
        category_ids: [6, 21, 16]
    )
    Category.create!(
        product_id: 9,
        category_ids: [8, 17, 6, 2, 13, 21]
    )

    Category.create!(
        product_id: 8,
        category_ids: [6, 14, 18, 21]
    )

    Category.create!(
        product_id: 7,
        category_ids: [17, 13, 2, 6, 21]
    )

    Category.create!(
        product_id: 6,
        category_ids: [2, 6, 15, 21]
    )

    Category.create!(
        product_id: 5,
        category_ids: [13, 14, 2, 6, 21]
    )

    Category.create!(
        product_id: 4,
        category_ids: [12, 6, 21]
    )

    Category.create!(
        product_id: 3,
        category_ids: [10, 6, 11, 21]
    )

    Category.create!(
        product_id: 2,
        category_ids: [10, 2, 21]
    )

    Category.create!(
        product_id: 1,
        category_ids: [6, 9, 8, 2, 21]
    )
   
    puts "Done!"
  end
 