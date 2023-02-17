@cart_items.each do |cart_item|
    
    json.set! cart_item.id do
        json.extract! cart_item, :id, :product_id, :cart_id
    end
end

# json.cart_item_Ids @cart_items.pluck(:id)