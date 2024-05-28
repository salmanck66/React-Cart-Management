import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = ({ id, title, price, rating, image, addToCart }) => {
  return (
    <Card className="shadow-2xl grid overflow-hidden" style={{ width: "18rem" }}>
      <Card.Img className="min-h-[100px] object-cover text-center" variant="top" src={image} />
      <Card.Body className="col-span-9 min-h-[100px]">
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
        {rating && (
          <Card.Text className='mb-5'>
            Rating: {rating.rate} ({rating.count} reviews)
          </Card.Text>
        )}
        <button onClick={() => addToCart(id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to cart
        </button>
      </Card.Body>
    </Card>
  );
};

export default Product;
