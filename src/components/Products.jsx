import Product from "../products/Product";
import productList from "../productList";
function Products() {
  return (
    <div className="flex flex-col mt-20 ">
      {productList.map((product, id) => (
        <Product
          key={id}
          img={product.img}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default Products;
