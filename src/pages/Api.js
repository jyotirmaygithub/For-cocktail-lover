import React, { useState } from "react";

export default function Api() {
  let searchname = "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
  let searchglass =
    "www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass";
  let searchimage = "www.thecocktaildb.com/images/ingredients/gin.png";
  let searchingre = "www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin";

  const [copy, setcopy] = useState("Copy");
  const [visible, setvisible] = useState(false);

  function copylink(linkuse) {
    navigator.clipboard.writeText(linkuse);
    setvisible(true);
    setcopy("!Copied");
    timer();
  }
  function timer() {
    setTimeout(() => {
      setcopy("Copy");
      setvisible(false);
    }, 1000);
  }
  return (
    <>
      <div className=" universal alert-pop mt-20">{visible &&  <p className="bg-yellow-500"
      >{copy}</p>}</div>
      <div className="flex flex-wrap mt-5 justify-center  ">
        <div className="link-box space-y-2  px-4 py-5 m-3">
          <div className="universal universal-just">
            <h3>Search cocktail by name</h3>
            <button onClick={() => copylink(searchname)}>Copy</button>
          </div>
          <p>{searchname}</p>
        </div>
        <div className="link-box space-y-2  px-4 py-5 m-3">
          <div className="universal universal-just">
            <h3>Images</h3>
            <button onClick={() => copylink(searchimage)}>Copy</button>
          </div>
          <p>{searchimage}</p>
        </div>
        <div className="link-box space-y-2  px-4 py-5 m-3">
          <div className="universal universal-just">
            <h3>Filter by Glass</h3>
            <button onClick={() => copylink(searchglass)}>Copy</button>
          </div>
          <p>{searchglass}</p>
        </div>
        <div className="link-box space-y-2  px-4 py-5 m-3">
          <div className="universal universal-just">
            <h3>Search by Ingredient</h3>
            <button onClick={() => copylink(searchingre)}>Copy</button>
          </div>
          <p>{searchingre}</p>
        </div>
      </div>
    </>
  );
}
