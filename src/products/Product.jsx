import AddToCart from "../Cart/AddToCart";

// eslint-disable-next-line react/prop-types
function Product({ img, name, price }) {
  return (
    <div className=" shadow-md md:ml-44 flex justify-between items-center  bg-white border-gray-800 m-6 p-4 h-60 max-w-[1500px]">
      {" "}
      <img src={img} alt={name} className="ml-10 m-4 rounded-md" />
      <div className="flex flex-col justify-between">
        <span className="text-2xl mt-8 font-bold text-gray-800">{name}</span>
        <span className="text-2xl mb-10 font-bold text-gray-800">{price}$</span>
      </div>
      <div className="mr-10">
        <AddToCart />
      </div>
    </div>
  );
}

export default Product;
