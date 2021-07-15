import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

//state필요 없기때문에 class component가 될 필요 없음 따라서 function component사용

function Movie({ id, year, genres, title, summary, poster }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre,index) => <li key={index} className="genres__genre">{genre}</li>)}
                </ul> 
                <p className="movie__summary">{summary.slice(0,140)}...</p>
            </div>
    </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;