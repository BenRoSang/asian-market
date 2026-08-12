function ProductDetails({ product, onClose }) {
    return (
      <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50 p-4">
        <div className="max-w-lg overflow-hidden rounded-xl bg-white shadow-xl">
          <img
            src={product.image}
            alt={product.name}
            className="h-64 w-full object-cover"
          />
  
          <div className="p-6">
            <p className="text-sm font-medium text-blue-600">
              {product.category}
            </p>
  
            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              {product.name}
            </h2>
  
            <p className="mt-4 text-gray-600">
              {product.description}
            </p>
  
            <p className="mt-4 text-xl font-bold text-gray-900">
              €{product.price.toFixed(2)} / {product.unit}
            </p>
  
            <button
              onClick={onClose}
              className="mt-6 rounded-lg bg-gray-900 px-4 py-2 font-medium text-white hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProductDetails;