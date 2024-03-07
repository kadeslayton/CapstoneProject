import React, { useState } from "react";
import ProductPreview from "./ProductPreview";

export default function Search({ productList }) {
  const [resultArray, setResultArray] = useState([]);

  function handleSearch(e) {
    let searchResults = productList.filter((product) =>
      product.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    searchResults.length > 0
      ? setResultArray(searchResults)
      : setResultArray(["No Results"]);
  }

  return (
    <div id="search-results">
      <div className="search-bar">
        <h3>Search Our Store For Any Product You've ever Wanted!</h3>
        <label>
          Product Name
          <input type="text" placeholder="Search" onChange={handleSearch} />
        </label>
      </div>
      {resultArray != 0 && (
        <>
          <h2>Search Results</h2>
          <div>
            {resultArray[0] === "No Results" ? (
              <p>No Results</p>
            ) : (
              <ul>
                {resultArray.map((product, index) => {
                  return <ProductPreview key={index} product={product} />;
                })}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
}