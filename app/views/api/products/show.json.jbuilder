json.extract!(@product, :id, :name, :price, :description, :amount, :color, :condition, :brand, :size, :updated_at)
json.images @product.images(@product.id) do |image|
    json.extract!(image, :id, :image_url)
end

# json.categories @product.categories(product.id)

json.categories @product.categories(@product.id) do |category|
    json.extract!(category, :category_ids)
end 

json.favorited do
  if current_user && current_user.favorited?(@product)
    json.favorited true
    json.favorite_id current_user.favorites.find_by(product_id: @product.id).id
  else
    json.favorited false
  end
end