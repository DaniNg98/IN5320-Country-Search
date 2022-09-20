import React, { useState } from 'react';

function Pagination(props) {
  const [nextPage, setNextPage] = useState(props.pageNumber);

  const clickNextPage = () => {
    props.setPageNumber(nextPage + 1);
    setNextPage(props.pageNumber + 1);
  };

  const clickPreviousPage = () => {
    props.setPageNumber(nextPage - 1);
    setNextPage(props.pageNumber - 1);
  };

  return (
    <div>
      <button onClick={clickPreviousPage} disabled={props.disablePrev}>
        Previous
      </button>{' '}
      <button onClick={clickNextPage} disabled={props.disableNext}>
        Next
      </button>
      <p>
        Page: {props.pageNumber} of {props.lastPage}
      </p>{' '}
      <br />
    </div>
  );
}

export default Pagination;
