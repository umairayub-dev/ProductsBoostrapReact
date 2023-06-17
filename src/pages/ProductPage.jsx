import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { Spinner } from "react-bootstrap";

export default function ProductPage() {
  const [count, setCount] = useState(0);
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        if (error.response && error.response.status === 404) {
          setError("Product not found.");
        } else {
          setError("Error fetching product data. Please try again later.");
        }
        setLoading(false);
      });
  }, [productId]);

  const addToCart = () => {
    const item = { ...product, count };
    console.log(item);
    Swal.fire({
      title: "Success!",
      text: "Added to Cart Successfully",
      icon: "success",
      confirmButtonText: "Close",
    });
  };

  return (
    <>
      <div className="container">
        <div className="text-center">
          <h1 className="mt-5">{product.title}</h1>
        </div>

        {loading ? (
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : error ? (
          <div className="text-center">
            <p>{error}</p>
            <button className="btn btn-primary" onClick={() => navigate(-1)}>Go Back</button>
          </div>
        ) : (
          <div className="row">
            <div className="col-md-6">
              <div>
                <Carousel>
                  {product?.images?.map((val, key) => (
                    <Carousel.Item key={key}>
                      <img
                        className="d-block w-100"
                        src={val}
                        alt="First slide"
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
            <div className="col-md-6 p-4">
              <div>
                <h3 className="color-secondary">{product.description}</h3>
                <p>
                  <del>{product.price}</del> -{" "}
                  <ins>{product.discountPercentage}</ins>
                </p>
                <p>Rating: {product.rating}</p>
                <p>Stock Left: {product.stock}</p>
                <div>
                  <button
                    className="btn btn-danger me-2"
                    onClick={() => setCount(count - 1)}
                  >
                    -
                  </button>
                  {count}
                  <button
                    className="btn btn-primary ms-2"
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="btn btn-primary mt-5"
                  onClick={addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
