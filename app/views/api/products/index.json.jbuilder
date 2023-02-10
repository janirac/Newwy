json.array! @products do |product|
    json.extract! product, :id, :name, :price, :description, :amount, :category, :color, :condition, :brand, :size
end