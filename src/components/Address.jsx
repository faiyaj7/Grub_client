// src/components/Address.js
import React, { useState } from "react";
import CartMenu from "./CartMenu";
import { FaPlus } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { addAddress } from "../store/cartSlice";
const Address = ({ cart }) => {
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.cartSlice.addresses);
  const [addAddressForm, setAddAddressForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const [activeIndex, setActiveIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAddress(newAddress));
    setNewAddress({ name: "", address: "", phone: "" });
    setAddAddressForm(false);
  };

  const handleAddressClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-between gap-2">
        {/* Display Addresses */}
        {addresses.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {addresses.map((address, index) => (
              <div
                key={index}
                className={`relative bg-slate-400/45 px-5 py-2 rounded-lg h-20 flex items-center justify-center shadow-lg mb-4 cursor-pointer ${
                  activeIndex === index ? "border-2 border-blue-600" : ""
                }`}
                onClick={() => handleAddressClick(index)}
              >
                <div>
                  <h1 className="font-merriweatherSans text-xs">
                    {address.name}
                  </h1>
                  <h1 className="font-merriweatherSans text-xs">
                    {address.address}
                  </h1>
                  <h1 className="font-merriweatherSans text-xs">
                    {address.phone}
                  </h1>
                </div>
                {activeIndex === index && (
                  <TiTick
                    className="absolute -top-2 -right-2 text-white bg-blue-600 rounded-full"
                    size={24}
                  />
                )}
              </div>
            ))}
          </div>
        ) : (
          <h1 className="font-merriweatherSans">No Address Added</h1>
        )}

        {/* Add Address Button */}
        <div
          className="bg-blue-600 rounded-lg w-20 h-20 flex items-center justify-center flex-col gap-2 cursor-pointer hover:bg-blue-800 transition-all duration-300"
          onClick={() => setAddAddressForm(true)}
        >
          <FaPlus className="text-blue-600 rounded-full bg-white" size={20} />
          <h1 className="font-merriweatherSans text-white text-xs">
            Add Address
          </h1>
        </div>
      </div>
      {/* Address Form */}
      {addAddressForm && (
        <div className="max-w-md mx-auto p-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={newAddress.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={newAddress.address}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={newAddress.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
      {/* Table */}
      <CartMenu cart={cart} />
    </div>
  );
};

export default Address;
