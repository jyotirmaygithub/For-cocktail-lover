import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function Singlepage() {
  const { idDrink } = useParams();
  const [newurl, setnewurl] = useState("");
  const [data, setdata] = useState("");
  const [progressbar, setProgressbar] = useState(0);

  useEffect(() => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
    console.log(url);
    setnewurl(url);

    fetchingdata();

    async function fetchingdata() {
      try {
        setProgressbar(20)
        const data = await fetch(url);
        setProgressbar(40)
        const fetcheddata = await data.json();
        setProgressbar(70)
        setdata(fetcheddata.drinks[0]);
        setProgressbar(100)
      } catch (error) {
        console.error("Error fetching data:", error);
        setProgressbar(60)
      }
    }
  }, [idDrink]);

  let {
    strDrink,
    strAlcoholic,
    strGlass,
    strInstructions,
    strDrinkThumb,
    //these below one are for ingredients which are necessary to make
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    //next ones are for measurement of the things
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
  } = data;

  return (
    <>
      <LoadingBar
        color="#F1C40F"
        height={3}
        progress={progressbar}
        onLoaderFinished={() => setProgressbar(0)}
      />
    <div className="universal2">
      <div className="heading-pad">
        <p className="press-box-drink-name drink-name">{strDrink}</p>
      </div>
      <div className="universal inner-box-des">
        <div className="image-box2">
          <img className="image-setting" src={strDrinkThumb} alt="" />
        </div>
        <div className="universal2 press-box">
          <h1>
            <span className="naming-size">Name :</span> {strDrink}
          </h1>
          <h3>
            <span className="naming-size">Category :</span> {strAlcoholic}
          </h3>
          <h4>
            <span className="naming-size">Glass Type :</span> {strGlass}
          </h4>
          <p>
            <span className="naming-size">Instructions :</span>
            <span>{strInstructions}</span>
          </p>
          {/* instructions from below  */}
          <p>
            <span className="naming-size">Required Ingredients :</span>
            <span>{strIngredient1}</span>
            <span>{strIngredient2}</span>
            <span>{strIngredient3}</span>
            <span>{strIngredient4}</span>
            <span>{strIngredient5}</span>
          </p>
          {/* measuring volumes  */}
          <p>
            <span className="naming-size">Measurment : </span>
            <span>{strMeasure1}</span>
            <span>{strMeasure2}</span>
            <span>{strMeasure3}</span>
            <span>{strMeasure4}</span>
            <span>{strMeasure5}</span>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
