import React from 'react';
import Pagination from 'rc-pagination';

import './Pagination.scss';

function PaginationMovie({ currentPage, totalItems, onChangePage }) {
  return (
    <Pagination
      className="pagination"
      current={ currentPage }
      total={ totalItems }
      pageSize={ 10 }
      onChange={ onChangePage }
    />
  );
}

export default PaginationMovie;