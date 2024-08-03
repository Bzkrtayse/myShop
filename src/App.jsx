import { useSelector } from "react-redux";
import Header from "./components/Header";
import Products from "./products/Products";

function App() {
  const cartCount = useSelector((state) => state.cart.cartCount);
  return (
    <div className="w-full h-fit bg-gray-100">
      <div className="bg-red-200 w-60">{cartCount}</div>
      <Header />
      <Products />
    </div>
  );
}

export default App;
