import { useState } from "react";

function AddToCart() {
  const [show, setShow] = useState(false); //show + count - buttons
  const [count, setCount] = useState(1);
  function toggle() {
    setShow((show) => !show);
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
            onClick={count > 1 ? () => setCount((count) => count - 1) : toggle}
          >
            -
          </button>
          <span className="flex w-8 h-8 m-2 px-2 justify-center items-center bg-white rounded-md text-xl font-bold text-gray-800">
            {count}
          </span>
          <button
            className="w-8 h-8 m-2 px-2 bg-white rounded-md text-2xl font-bold text-gray-800"
            onClick={() => setCount((count) => count + 1)}
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
