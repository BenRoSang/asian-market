
function Header({ cartCount }) {
  return (
    <header className="bg-white shadow-sm">
        <div className="mx-auto flex flex-col  max-w-7xl items-center gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        {/* <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"> */}
          <h1 className="text-2xl font-bold text-gray-900">
            My Small Shop
          </h1>

          <p className="mt-1 hidden sm:block text-gray-600">
            Fresh products delivered to your door
          </p>

          <a href="#cart" className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
          Cart ({cartCount})
        </a>

        {/* <nav className="mt-5 flex gap-6 border-t border-gray-200 pt-4"> */}
        <nav className="flex flex-wrap gap-4 border-t border-gray-200 pt-4 sm:gap-6">
          <a href="#" className="font-medium text-blue-600">
            Home
          </a>

          <a href="#products" className="text-gray-600 hover:text-blue-600">
            Products
          </a>

          <a href="#about" className="text-gray-600 hover:text-blue-600">
            About Us
          </a>

          <a href="#contact" className="text-gray-600 hover:text-blue-600">
            Contact
          </a>
        </nav>
        </div>
    </header>
  )
}

export default Header