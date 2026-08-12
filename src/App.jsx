import { useState } from "react";
import Header from "./component/Header";
import products from "./data/product";
import ProductCard from "./component/ProductCard";
import CategoryFilter from "./component/CategoryFilter";
import ProductDetails from "./component/ProductDetail";

function App() {
  // State to manage the selected category for filtering
  const [selectedCategory, setSelectedCategory] = useState("All");
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  }
  const filteredProducts = selectedCategory === 'All' ? 
  products : products.filter((product) => product.category === selectedCategory);

  // State to manage the selected product for viewing details
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const onViewDetails = (product) => {
    // Implement the logic to view product details here
    console.log("View details for:", product);
    setSelectedProduct(product);
  }

  // State to manage adding products to the cart
  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    console.log("Add to cart:", product);
    setCart((prevCart) => [...prevCart, product]);
  };
  console.log("Cart:", cart.length);
  return (
    <main className="min-h-screen bg-gray-100">
      <Header cartCount={cart.length} />

      <section id="products" className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Our Products
        </h2>

        <p className="mt-4 text-gray-600">
          Choose from our fresh products.
        </p>
        <CategoryFilter 
          categories={["All", "Fruit", "Vegetables", "Bakery"]} selectedCategory={selectedCategory} onSelectCategory={handleSelectCategory}
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onViewDetails={onViewDetails} 
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* Add the ProductDetails component here if you want to show product details in a modal */}
        {selectedProduct && (
          <ProductDetails product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </section>
    </main>
  );
}


export default App
