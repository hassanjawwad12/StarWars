import React from "react";

const ShowP = ({ people }) => {
  return (
    <div className="card">

      <h3>{people.name}</h3>
      <p>Gender - {people.gender}</p>
      <p>Birth year - {people.birth_year}</p>
      
    </div>
  );
};

export default ShowP;
