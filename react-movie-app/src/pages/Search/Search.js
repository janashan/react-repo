import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Input, Row } from 'antd';
import queryString from 'query-string';
import { MovieCatalog } from '../../components';
import { API_KEY, API_URL } from '../../config/env';

import './Search.scss';

function Search(props) {
  const { location, history } = props;
  const [movieList, setMovieList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    (async () => {
      const search = queryString.parseUrl(location.search);
      const { s } = search.query;

      if (!s) return;

      const response = await fetch(`${ API_URL }/search/movie?api_key=${ API_KEY }&language=es-ES&query=${ s }&page=1`);
      const movies = await response.json();
      setSearchValue(s);
      setMovieList(movies);
    })();
  }, [searchValue]);

  const onChangeSearch = e => {
    const urlParams = queryString.parse(location.search);
    urlParams.s = e.target.value;
    history.push(`?${queryString.stringify(urlParams)}`);
    setSearchValue(e.target.value);
  };


  return (
    <Row>
      <Col span={ 24 } className="search">
        <h1>Search Movie</h1>
        <Input value={ searchValue } onChange={ onChangeSearch }/>
      </Col>
      <Col span={ 24 }>
        {
          movieList.results && (
            <Row>
              <MovieCatalog movies={ movieList }/>
            </Row>
          )
        }
      </Col>
    </Row>

  );
}

export default withRouter(Search);