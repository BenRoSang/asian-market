
function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => onSelectCategory(category)}
        className={`rounded-full px-4 py-2 text-sm font-medium ${
          selectedCategory === category
            ? "bg-blue-600 text-white"
            : "bg-white text-gray-700 hover:bg-blue-50"
        }`}
      >
        {category}
      </button>
    ))}
  </div>
  )
}

export default CategoryFilter