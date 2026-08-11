import { useState } from "react";
import Header from "./component/Header";
import products from "./data/product";
import ProductCard from "./component/ProductCard";
import CategoryFilter from "./component/CategoryFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  }
  const filteredProducts = selectedCategory === 'All' ? products : products.filter((product) => product.category === selectedCategory);
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />

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
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}


export default App
