import React from "react";
import "./Card.css";
import PublicReview from "./CustomerReview";

const Card = () => {
  let CustomerReviews = PublicReview();

  return (
    <div className="card-slider">
      {CustomerReviews.map((ele) => {
        return (
          <div
            key={ele.id}
            class="max-w-sm rounded overflow-hidden"
            style={{
              backgroundColor: "#FFFFFF2A",
              flex: "250px",
              width: "260px",
              height: "230px",
              borderRadius: "15px",
              border: "1px solid black",
              padding: "15px",
              marginTop: "40px",
              marginBottom: "40px",
            }}
            className="card"
          >
            <div className="inner-slider ">
              <img
                src={ele.image}
                alt="Card-image"
                style={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "100%",
                  marginBottom: "10px",
                }}
              />

              <div
                style={{
                  fontWeight: "200",
                  fontSize: "14px",
                  textAlign: "center",
                  color: "white",
                  marginBottom: "8px",
                }}
              >
                {ele.name}
              </div>
              <div>
                <p
                  style={{
                    fontWeight: "200",
                    fontSize: "14px",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  {ele.review}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
