import React from "react";
import PropTypes from "prop-types";

const oniLike = [
  {
    id: 1,
    name: "gosomi",
    rating: 3
  },
  {
    id: 2,
    name: "ddangkong",
    rating: 5
  },
  {
    id: 3,
    name: "BR",
    rating: 4.9
  },
  {
    id: 4,
    name: "hs",
    rating: 5
  }
]

function Oni({ name, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
    </div>
  );
}

Oni.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {oniLike.map(fav => (
        <Oni key={fav.id} name={fav.name} rating={fav.rating} />
      ))}
    </div>
  );
}

export default App;
