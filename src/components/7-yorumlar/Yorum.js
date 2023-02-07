import React from "react";
import { Card } from "react-bootstrap";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Yorum = ({ name, point, message }) => {
  let arr = [];
  if (!point) {
    for (let i = 1; i <= 10; i++) {
      arr.push(<BsStar />);
    }
  } else {
    for (let i = 1; i <= 10; i++) {
      if (i <= point) {
        arr.push(<BsStarFill />);
      }
    }
    if (point % 1 !== 0) {
      arr.push(<BsStarHalf />);
    }
    for (let i = arr.length; i <= 9; i++) {
      arr.push(<BsStar />);
    }
  }

  return (
    <>
      <Card className="h-100">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>
            {arr.map((item, i) => (
              <span
                style={{ fontSize: "70%", color: "rgb(240, 236, 18)" }}
                key={i}
              >
                {item}
              </span>
            ))}
          </Card.Title>
          <Card.Text>{message}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Yorum;
