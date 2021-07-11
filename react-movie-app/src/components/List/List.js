import React from 'react';
import { List as ListAntd, Avatar, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Loading from '../Loading';


import './List.scss';

function List({ title, movies }) {

  if (movies.loading || !movies.result) {
    return <Loading/>
  }

  return (
    <ListAntd
      className='movie-list'
      size='default'
      header={ <h2>{ title }</h2> }
      bordered
      dataSource={ movies.result.results }
      renderItem={ movie => <Render movie={ movie }/> }/>
  );
}

function Render(props) {
  const { movie: { id, title, poster_path } } = props;
  const posterPath = `https://image.tmdb.org/t/p/original${ poster_path }`;

  return (
    <ListAntd.Item className='movie-list__movie'>
      <ListAntd.Item.Meta
        avatar={ <Avatar src={ posterPath }/> }
        title={ <Link to={ `/movie/${ id }` }>{ title }</Link> }
      />
      <Link to={ `/movie/${ id }` }>
        <Button type='primary' icon={ <RightOutlined/> }/>
      </Link>
    </ListAntd.Item>
  );
}

export default List;