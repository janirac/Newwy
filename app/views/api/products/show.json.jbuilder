
json.extract!(@product, :id, :name, :price, :description, :amount, :color, :condition, :brand, :size, :updated_at)
json.images @product.images(@product.id) do |image|
    json.extract!(image, :id, :image_url)
end

# json.categories @product.categories(product.id)

json.categories @product.categories(@product.id) do |category|
    json.extract!(category, :category_ids)
end 