function Cart({ cart, onRemoveFromCart, onIncrease, onDecrease }) {
    if (cart.length === 0) {
      return (
        <section className="mx-auto max-w-7xl px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900">Your Cart</h2>
          <p className="mt-3 text-gray-600">Your cart is empty.</p>
        </section>
      );
    }
  
    const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
  
    return (
      <section className="mx-auto max-w-7xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900">Your Cart</h2>
  
        <div className="mt-5 space-y-3">
          {cart.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm"
            >
              <div>
                <h3 className="font-semibold text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-600">
                  €{product.price.toFixed(2)} / {product.unit}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                    onClick={() => onDecrease(product.id)}
                    className="rounded bg-gray-200 px-3 py-1"
                >
                    -
                </button>

                <span className="font-medium">{product.quantity}</span>

                <button
                    onClick={() => onIncrease(product.id)}
                    className="rounded bg-gray-200 px-3 py-1"
                >
                +
                </button>

                <button
                onClick={() => onRemoveFromCart(index)}
                className="text-sm font-medium text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
            </div>
          ))}
        </div>
  
        <p className="mt-5 text-xl font-bold text-gray-900">
          Total: €{total.toFixed(2)}
        </p>

        
      </section>
    );
  }
  
  export default Cart;