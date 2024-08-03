import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "./cartSlice";
import Product from "../products/Product";

function AddToCart() {
  const [show, setShow] = useState(false); //show + count - buttons
  const [count, setCount] = useState(0); // i will replace this with quantity

  const dispatch = useDispatch();
  function toggle() {
    setShow((show) => !show);
    const newItem = {
      name: "p1",
      quantity: 1,
      unitPrice: 50,
      totalPrice: 100,
    };
    dispatch(addItem(newItem));
    setCount((count) => count + 1);
    increaseItemQuantity(Product);
  }
  function handleDeleteFromCart() {
    count > 1 ? () => setCount((count) => count - 1) : toggle;
    decreaseItemQuantity();
  }
  function handleAddToCart() {
    const newItem = {
      name: "p1",
      quantity: 1,
      unitPrice: 50,
      totalPrice: 100,
    };
    dispatch(addItem(newItem));
    setCount((count) => count + 1);
  }

  return (
    <div>
      {!show && (
        <div className="shadow-md m-2 flex bg-white rounded-md w-40 items-center justify-center  h-12 p-2 text-xl text-gray-800 font-bold ">
          <button onClick={toggle}>Add to cart</button>
        </div>
      )}
      {show && (
        <div className="shadow-md m-2 flex bg-white rounded-md w-40 items-center justify-center">
          <button
            className="w-8 h-8 m-2 px-2 bg-white rounded-md text-2xl font-bold text-gray-800"
            onClick={handleDeleteFromCart}
          >
            -
          </button>
          <span className="flex w-8 h-8 m-2 px-2 justify-center items-center bg-white rounded-md text-xl font-bold text-gray-800">
            {count}
          </span>
          <button
            className="w-8 h-8 m-2 px-2 bg-white rounded-md text-2xl font-bold text-gray-800"
            onClick={handleAddToCart}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}
export function Cart() {
  return <div></div>;
}

export default AddToCart;
