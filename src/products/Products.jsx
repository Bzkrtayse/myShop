import Product from "./Product";
import productList from "./productList";
function Products() {
  return (
    <div className="flex flex-col mt-20 ">
      {productList.map((product, productId) => (
        <Product
          key={productId}
          img={product.productImg}
          name={product.productName}
          price={product.productPrice}
        />
      ))}
    </div>
  );
}

export default Products;
