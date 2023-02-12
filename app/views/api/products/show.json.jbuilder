    # json.extract! @product, :id, :name, :price, :description, :amount, :category, :color, :condition, :brand, :size, :updated_at

    # json.set! @product.id do
        json.extract!(@product, :id, :name, :price, :description, :amount, :category, :color, :condition, :brand, :size, :updated_at)
        json.images @product.images(@product.id) do |image|
            json.extract!(image, :id, :image_url)
        end
    # end