import React from "react";
import { useGlobalContext } from "../context";

const PageControl = () => {
  const { page, setPage } = useGlobalContext();

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(1);
    }
  };
  const nextPage = () => setPage(page + 1);

  return (
    <section className="page-control">
      <input
        type="button"
        value="< Prev Page"
        onClick={prevPage}
        className="btn"
      />
      <input
        type="button"
        value="Next Page >"
        onClick={nextPage}
        className="btn"
      />
    </section>
  );
};

export default PageControl;
