import React from "react";
import { useParams } from "react-router-dom";

const Trailer = ({ moviesData }) => {
  const params = useParams();
  const trai = moviesData.find((el) => el.id === Number(params.id));
  console.log("test", trai);

  return (
    <div>
      <h2 style={{ color: "white" }}>Trailer</h2>
      <iframe
        height={500}
        width={700}
        src={trai.trailer}
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default Trailer;
