import { useState } from "react";

function CheckoutForm({ cart }) {

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    postalCode: "",
    city: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setCustomer((currentCustomer) => ({
      ...currentCustomer,
      [name]: value,
    }));
  }
  

  console.log("Customer information:", customer);

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Customer information:", customer);
    console.log("Ordered products:", cart);

    //alert("Thank you! Your order has been received.");
    setOrderPlaced(true);
  }

  if (orderPlaced) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-12">
        <div className="rounded-xl bg-green-50 p-6 text-center">
          <h2 className="text-2xl font-bold text-green-800">
            Order received!
          </h2>
  
          <p className="mt-3 text-green-700">
            Thank you, {customer.name}. Please prepare cash when your package
            arrives.
          </p>
  
          <p className="mt-2 text-sm text-green-700">
            Payment method: Cash on delivery
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-2xl px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900">
        Delivery Information
      </h2>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          name="name"
          value={customer.name}
          onChange={handleChange}
          placeholder="Full name"
          required
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3"
        />

        <input
          name="phone"
          value={customer.phone}
          onChange={handleChange}
          placeholder="Phone number"
          required
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3"
        />

        <input
          name="address"
          value={customer.address}
          onChange={handleChange}
          placeholder="Street address"
          required
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3"
        />

        <input
          name="city"
          value={customer.city}
          onChange={handleChange}
          placeholder="City"
          required
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3"
        />
        <input
            name="postalCode"
            value={customer.postalCode}
            onChange={handleChange}
            placeholder="Postal code"
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3"
        />

        <p className="text-sm text-gray-500">
        Delivery is available within 50 km of our shop.
        </p>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
            <h3 className="font-semibold text-gray-900">Payment method</h3>

            <label className="mt-3 flex items-center gap-3">
                <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={customer.paymentMethod === "cash"}
                onChange={handleChange}
                />

                <span className="text-gray-700">
                Cash on delivery
                </span>
            </label>

            <p className="mt-2 text-sm text-gray-500">
                Pay in cash when your package arrives.
            </p>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700"
        >
          Place Cash-on-Delivery Order
        </button>
      </form>
    </section>
  );
}

export default CheckoutForm;