import React, { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { Spinner } from "react-bootstrap";

export default function Products() {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => {
        setCategory(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
          setError("Error fetching product data. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <div className="text-center my-5">
        <h1 className="mt-4">Products</h1>
        <p className="text-secondary">
          All Products are Distributed into our Special Designed Categories
        </p>
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
          {category.map((val, key) => (
            <CategoryCard key={key} category={val} />
          ))}
        </div>
      )}
    </div>
  );
}
