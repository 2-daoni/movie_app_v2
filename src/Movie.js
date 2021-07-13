import React from "react";
import PropTypes from "prop-types";

//state필요 없기때문에 class component가 될 필요 없음 따라서 function component사용

function Movie({ id, year, genres, title, summary, poster }) {
    return <h4>{title}</h4>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;