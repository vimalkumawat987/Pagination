import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectPage, setSelectPage] = useState(5);
  const TOTAL_PAGE = 53;
  const SHOW_PER_PAGE = selectPage;

  const showTotalPage = Math.ceil(TOTAL_PAGE / SHOW_PER_PAGE);

  return (
    <div className="App">
      Pagination
      <div>
        <div>
          <labal>Select Page</labal>
          <select onChange={(e) => setSelectPage(e.target.value)}>
            <option>5</option>
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
        </div>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((pre) => pre - 1)}
        >
          ◀️
        </button>
        {Array.from({ length: showTotalPage }, (_, i) => (
          <button
            className={`${currentPage === i + 1 && "activeClass"}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          disabled={currentPage === Math.max(showTotalPage)}
          onClick={() => setCurrentPage((pre) => pre + 1)}
        >
          ▶️
        </button>
      </div>
    </div>
  );
}
