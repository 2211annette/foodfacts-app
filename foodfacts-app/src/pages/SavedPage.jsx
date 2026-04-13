import { useNavigate } from 'react-router-dom'

function SavedPage({ saved, dispatch }) {
  const navigate = useNavigate()

  if (saved.length === 0) {
    return (
      <div className="page">
        <h2>Saved Items</h2>
        <p>
          You haven't saved anything yet. Search for a food and save it from the detail page.
        </p>
      </div>
    )
  }

  return (
    <div className="page">
      <h2>Saved Items ({saved.length})</h2>

      <div className="food-list">
        {saved.map((product) => (
          <div key={product.code} className="saved-item">

            {/* Product Info */}
            <h3>{product.product_name || "Unknown Product"}</h3>
            <p>{product.brands || "Unknown Brand"}</p>

            {/* Buttons */}
            <div style={{ marginTop: '10px' }}>
              <button onClick={() => navigate(`/product/${product.code}`)}>
                View Details
              </button>

              <button
                onClick={() =>
                  dispatch({ type: 'REMOVE', code: product.code })
                }
                style={{ marginLeft: '10px' }}
              >
                Remove
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default SavedPage