import React from 'react';
import { Pagination } from 'react-bootstrap';

function JobPagination({ page, setPage }) {
  return (
    <Pagination>
      <Pagination.Prev />
    </Pagination>
  );
}

export default JobPagination;
