import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

const Feedback = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (nextValue) => {
    setRating(nextValue);
  };
  return (
    <>
        <div className="shadow-lg d-flex flex-column justify-content-center m-5" style={{height:"55vh"}}>
          <h2 className="mb-4 text-center">Rate Us</h2>
          <div className="d-flex justify-content-center">
            <ReactStars
              count={5}
              onChange={handleStarClick}
              size={24}
              activeColor="#ffd700"
            />
          </div>
          <div className="text-center mt-3">
            {rating ? (
              <h4>
                You rated: {rating} star{rating > 1 ? "s" : ""}
              </h4>
            ) : (
              <h4>No rating given yet</h4>
            )}
          </div>
        </div>
    </>
  );
};

export default Feedback;
