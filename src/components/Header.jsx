import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../Cart/cartSlice";

export default function Header() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  return (
    <div className="flex top-0 sticky justify-between place-content-baseline bg-white shadow-md">
      <h1 className="m-4 p-4 text-4xl">My Shop</h1>{" "}
      <span
        className="flex  w-40 bg-white
      shadow-md items-center justify-center rounded-md font-bold m-4 p-4 text-gray-800 text-2xl"
      >
        Cart({totalCartQuantity})
      </span>
    </div>
  );
}
