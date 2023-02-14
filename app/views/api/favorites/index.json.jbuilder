# @favorites.each do |favorite|
#     json.set! favorite.id do 
#         json.extract! favorite, :user_id, :product_id
#     end 
# end 


# json.array! @favorites do |favorite|
    json.extract! favorite, :id, :user_id, :product_id
    # json.id favorite.id
    # json.user_id favorite.user_id
    # json.product_id favorite.product_id
# end
