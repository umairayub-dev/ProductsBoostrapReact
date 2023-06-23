import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
export default function Home() {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1 className="text-center">Welcome to Our Online Store!</h1>
          <p className="lead text-center">Discover the Best Deals on Phones, Laptops, Groceries, and More</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" alt="Phone" />
            <Card.Body>
              <Card.Title>Phones</Card.Title>
              <Card.Text>
                Explore our wide range of smartphones from top brands and find the perfect device for your needs.
              </Card.Text>
              <Link to={"/products/category/smartphones"}><Button variant="primary" block>Shop Now</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://i.dummyjson.com/data/products/8/thumbnail.jpg" alt="Laptop" />
            <Card.Body>
              <Card.Title>Laptops</Card.Title>
              <Card.Text>
                Discover high-performance laptops designed to meet your professional and personal computing needs.
              </Card.Text>
              <Link to={"/products/category/laptops"}><Button variant="primary" block>Shop Now</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://chatelaine.com/wp-content/uploads/2021/12/grocery-prices-canada-2021-2022.jpg" alt="Groceries" />
            <Card.Body>
              <Card.Title>Groceries</Card.Title>
              <Card.Text>
                Shop for fresh produce, pantry essentials, and more to stock up your kitchen with quality groceries.
              </Card.Text>
              <Link to={"/products/category/groceries"}><Button variant="primary" block>Shop Now</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2 className="text-center">Why Choose Us?</h2>
          <Row className="mt-3">
            <Col md={4}>
              <div className="text-center">
                <i className="fas fa-shipping-fast fa-4x"></i>
                <h4>Fast Shipping</h4>
                <p>Enjoy speedy delivery of your orders right to your doorstep.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center">
                <i className="fas fa-tags fa-4x"></i>
                <h4>Competitive Prices</h4>
                <p>Discover great deals and competitive prices on a wide range of products.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center">
                <i className="fas fa-user-cog fa-4x"></i>
                <h4>Exceptional Service</h4>
                <p>Our dedicated support team is here to assist you with any questions or concerns.</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

