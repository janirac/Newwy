json.array! @products do |product|
    json.extract! product, :id, :name, :price, :description, :amount, :category, :color, :condition, :brand, :size
    json.images product.images(product.id) do |image|
        json.extract!(image, :id, :image_url)
    end
    json.categories product.categories(product.id) do |category|
        json.extract!(category, :id, :category)
    end 
end