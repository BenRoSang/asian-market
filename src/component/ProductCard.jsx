function ProductCard({ product, onViewDetails, onAddToCart }) {
    return (
      <article className="overflow-hidden rounded-xl bg-white shadow-sm">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover"
        />
  
        <div className="p-5">
          <p className="text-sm font-medium text-blue-600">
            {product.category}
          </p>
  
          <h3 className="mt-2 text-xl font-semibold text-gray-900">
            {product.name}
          </h3>
  
          <p className="mt-2 text-sm text-gray-600">
            {product.description}
          </p>
  
          <div className="mt-5 flex items-center justify-between">
            <p className="font-bold text-gray-900">
              €{product.price.toFixed(2)}
              <span className="ml-1 text-sm font-normal text-gray-500">
                / {product.unit}
              </span>
            </p>
  
            <div>
              <button 
                onClick={() => onAddToCart(product)}
                className="rounded-lg bg-blue-600 mx-1 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">
                Add
              </button>
              <button
              onClick={() => onViewDetails(product)}
              className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">
              Details
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  }
  
  export default ProductCard;