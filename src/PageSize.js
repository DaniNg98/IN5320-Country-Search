import React from 'react';

function PageSize(props) {
  return (
    <div>
      <p>Results per page:</p>
      <select
        id='ResultsPerPage'
        value={props.pageSize}
        onChange={(event) => {
          props.setPageSize(Number(event.target.value));
        }}
      >
        {[10, 20, 30, 40, 50, 100].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PageSize;
