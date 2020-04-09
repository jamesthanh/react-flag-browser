import React from "react";

const Card = ({ name, email, img }) => {
  return (
    <div className="tc bg-white dib br3 pa3 ma3 grow bw2 shaddow-5">
      <img src={img} height="200" width="200" alt="meme1"></img>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
