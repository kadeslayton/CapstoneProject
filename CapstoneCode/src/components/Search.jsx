import React, { useEffect, useState } from "react";
import ProductPreview from "./ProductPreview";

export default function Search({ productList }) {
  const [resultArray, setResultArray] = useState([]);
  const [dropResult, setDropResult] = useState([]);
  console.log("product list: ",productList)
console.log("results product list: ",resultArray)
console.log("dropdown results: ", dropResult)

  function handleSearch(e) {
    if(dropResult.length === 0){
      let searchResults = productList.filter((product) =>
      product.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    searchResults.length > 0
      ? setResultArray(searchResults)
      : setResultArray(["No Results"]);
    }
    else{
      let searchResults = dropResult.filter((product) =>
      product.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    searchResults.length > 0
      ? setResultArray(searchResults)
      : setResultArray(["No Results"]);
    }
    
  }

  function priceLTH (){
    if(resultArray.length === 0){
      const lthData = [...productList].sort((a,b) => {
        return a.price > b.price ? 1: -1
      })
      setDropResult(lthData)
    }
    else{
      const lthData = [...resultArray].sort((a,b) => {
        return a.price > b.price ? 1: -1
      })
      setDropResult(lthData)
    }
  }
  function priceHTL (){
    if(resultArray.length === 0){
      const lthData = [...productList].sort((a,b) => {
        return a.price < b.price ? 1: -1
      })
      setDropResult(lthData)
    }
    else{
      const lthData = [...resultArray].sort((a,b) => {
        return a.price < b.price ? 1: -1
      })
      setDropResult(lthData)
    }
  }
  function alphaATZ (){
    if(resultArray.length === 0){
      const lthData = [...productList].sort((a,b) => {
        return a.title > b.title ? 1: -1
      })
      setDropResult(lthData)
    }
    else{
      const lthData = [...resultArray].sort((a,b) => {
        return a.title > b.title ? 1: -1
      })
      setDropResult(lthData)
    }
  }
  function alphaZTA (){
    if(resultArray.length === 0){
      const lthData = [...productList].sort((a,b) => {
        return a.title < b.title ? 1: -1
      })
      setDropResult(lthData)
    }
    else{
      const lthData = [...resultArray].sort((a,b) => {
        return a.title < b.title ? 1: -1
      })
      setDropResult(lthData)
    }
  }
  function clearFilters(){
    setDropResult([]);
    setResultArray([]);
  }
console.log("product list: ",productList)
console.log("results product list: ",resultArray)
console.log("dropdown results: ", dropResult)
  return (
    <div id="search-results">
      <div className="search-bar">
        <h3>Search Our Store For Any Product You've ever Wanted!</h3>
        <label>
          Product Name
          <input type="text" placeholder="Search" onChange={handleSearch} />
        </label>
      </div>
          <div id="myDropdown" className="dropdown-content">
            <button onClick={priceLTH}>Price: Lowest to Highest</button>
            <button onClick={priceHTL}>Price: Highest to Lowest</button>
            <button onClick={alphaATZ}>Alphabetical Order (A-Z)</button>
            <button onClick={alphaZTA}>Alphabetical Order (Z-A)</button>
            <button onClick={clearFilters}>Clear Filters</button>
          </div>
      <div>
          <h2>Products</h2>
          <div>
            {resultArray.length === 0 && dropResult.length===0 ? (
              <div>
                <ul className="initialArrayProds">
                  {productList.map((product, index) => {
                    return <ProductPreview key={index} product={product} />;
                  })}
                </ul>
              </div>
            ):(    
              <div>
                {resultArray.length === 0 && dropResult.length!==0 ? (
                <div>
                  <ul>
                  {dropResult.map((product, index) => {
                    return <ProductPreview key={index} product={product} />;
                  })}
                </ul>
                </div>
                ) : (
                  <div>
                    {resultArray[0] === `No Results`?
                    (
                      <p>No Matching Results</p>
                    ):(
                      <div>
                          <ul>
                        {resultArray.map((product, index) => {
                          return <ProductPreview key={index} product={product} />;
                        })}
                        </ul>
                      </div> 
                    )}
                  </div>            
                )}
              </div>
            )}
          </div>  
      </div>
    </div>
  );
}