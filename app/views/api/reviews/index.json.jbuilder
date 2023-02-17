json.array!(@reviews) do |review|
    json.id review.id
    json.review
    json.rating review.rating
    json.created_at review.created_at
    json.updated_at review.updated_at
    json.product do
      json.id review.product.id
      json.name review.product.name
    end
    json.user do
      json.id review.user.id
      json.email review.user.email
    end
end