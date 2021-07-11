import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col } from "antd";
import { EyeFilled } from '@ant-design/icons';

import './MovieCatalog.scss';


function MovieCatalog(props) {
  const { movies: { results } } = props;
  return results.map(movie => (
      <Col key={ movie.id } xs={ 4 } className="movie-catalog">
        <MovieCard movie={ movie }/>
      </Col>
    )
  );
}

function MovieCard({ movie: { id, title, poster_path } }) {
  const { Meta } = Card;
  const posterPath = `https://image.tmdb.org/t/p/original/${ poster_path }`;

  return (
    <Link to={ `/movie/${ id }` }>
      <Card
        hoverable
        style={ { width: 240 } }
        cover={ <img alt={ title } src={ posterPath }/> }
        actions={ [<EyeFilled/>] }
      >
        <Meta title={ title }/>
      </Card>
    </Link>
  );
}

export default MovieCatalog;