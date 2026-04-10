function FoodCard({ product }) {
  const { product_name, brands, nutriments, image_small_url } = product

  return (
    <div className="food-card">
      {/* Image with fallback */}
      <img
        src={image_small_url || "https://via.placeholder.com/150"}
        alt={product_name || "Food item"}
      />

      {/* Product Name */}
      <h2>{product_name || "Unknown Product"}</h2>

      {/* Brand */}
      <p>{brands ? `Brand: ${brands}` : "Brand not available"}</p>

      {/* Nutriments (at least 3) */}
      <p>
        Calories:{" "}
        {nutriments?.["energy-kcal_100g"] ?? "N/A"} kcal
      </p>

      <p>
        Protein:{" "}
        {nutriments?.proteins_100g ?? "N/A"} g
      </p>

      <p>
        Carbs:{" "}
        {nutriments?.carbohydrates_100g ?? "N/A"} g
      </p>

      <p>
        Fat:{" "}
        {nutriments?.fat_100g ?? "N/A"} g
      </p>
    </div>
  )
}

export default FoodCard