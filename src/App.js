import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const TOTAL_PAGE = 53;
  const SHOW_PER_PAGE = 5;

  const showTotalPage = Math.ceil(TOTAL_PAGE / SHOW_PER_PAGE);

  return (
    <div className="App">
      Pagination
      <div>
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
