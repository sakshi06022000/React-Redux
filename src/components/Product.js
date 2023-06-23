import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
export const Product = () => {
  const { data: products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  // const [products, getProducts] = useState([]);
  useEffect(() => {
    //API
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => dispatch(getProducts(result)));
    // //DISPATCH ACTION
    dispatch(getProducts());
  }, []);

  const addToCart = (product) => {
    //DISPATCH AN ADD ACTION
    dispatch(add(product));

    // console.log("data", data);
  };

  const cards = products.length ? (
    products?.map((product) => (
      <div className="col-md-3" style={{ marginBottom: "10px" }}>
        <Card key={product.id} className="h-100">
          <div className="text-centre">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "130px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>INR.{product.price}</Card.Text>
          </Card.Body>

          <Card.Footer style={{ background: "white" }}>
            <Button variant="primary" onClick={() => addToCart(product)}>
              Add To Cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    ))
  ) : (
    <></>
  );
  return (
    <>
      <h1>Product DashBoard</h1>
      <div className="row">{cards}</div>
      {/* {JSON.stringify(products)} */}
    </>
  );
};
