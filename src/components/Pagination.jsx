import React from "react";

function Pagination({ currentPage, onPageChange }) {
  return (
    <div className="flex justify-between items-center px-1 bg-neutral-400 py-2">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className=" bg-neutral-300 px-2 py-1 rounded-sm hover:bg-slate-400 cursor-pointer"
      >
        Prev
      </button>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className=" bg-neutral-300 px-2 py-1 rounded-sm hover:bg-slate-400 cursor-pointer"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
