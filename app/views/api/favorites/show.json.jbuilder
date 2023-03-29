# return a favorite
json.extract! @favorite, :id, :user_id, :product_id

# json.id @favorite.id
# json.user_id @favorite.user_id
# json.product_id @favorite.product_id