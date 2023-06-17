import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { Spinner } from "react-bootstrap";

export default function CategoryPage() {
  const { categoryName } = useParams();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dummyjson.com/products/category/${categoryName}`)
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
          setError("Error fetching product data. Please try again later.");
        setLoading(false);
      });
  }, [categoryName]);

  return (
    <>
      <div className="container">
        <div className="text-center">
          <h1 className="mt-5">{categoryName.toUpperCase()}</h1>
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
            {products.map((val, key) => (
              <ProductCard key={key} product={val} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
