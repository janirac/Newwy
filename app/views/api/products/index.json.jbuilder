# json.array! @products do |product|
#     json.extract! product, :id, :name, :price, :description, :amount, :color, :condition, :brand, :size
#     json.images product.images(product.id) do |image|
#         json.extract!(image, :id, :image_url)
#     end
#     json.categories product.categories(product.id)

#     # json.extract!(category, :category_ids)
# end

@products.each do |product| 
    json.set! product.id do 
        json.extract! product, :id, :name, :price, :description, :amount, :color, :condition, :brand, :size
        json.images product.images(product.id) do |image|
            json.extract!(image, :id, :image_url)
        end
        json.categories product.categories(product.id)
    end 
end 