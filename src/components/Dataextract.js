import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";


export default function Dataextract(props) {
  let { data,setprogressbar } = props;
  const [dataarray, setdataarray] = useState([]);
  const [loading, setloading] = useState(false);
  

  useEffect(() => {
    tofetchdata();
    async function tofetchdata() {
      try {
        setprogressbar(20)
        setloading(true);
        setprogressbar(40)
        let fetchingdata = await fetch(data);
        setprogressbar(60)
        let datafetched = await fetchingdata.json();
        setprogressbar(80)
        setloading(false);
        setdataarray(datafetched.drinks);
        setprogressbar(100)
      } catch (error) {
        console.log("unable to fetch data");
        setloading(true);
        setprogressbar(60)
      }
    }
  }, [data]);

  return (
    <>
      {loading && <Spinner />}
      <div className="universal container">
        {dataarray === null ? (
          <p className="no-cocktails">
            No cocktails : Matched your searched criteria
          </p>
        ) : (
          dataarray.map((element, index) => {
            let { idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb } =
              element;

            return (
              <Link className="link" key={index} to={`/drinks/${idDrink}`}>
                <div key={index} className="single-box">
                  <div className="image-box">
                    <img className="image-setting" src={strDrinkThumb} alt="" />
                  </div>
                  <p className="drink-name">{strDrink}</p>
                  <p className="drink-ctg">{strAlcoholic}</p>
                  <p className="glass-name">{strGlass}</p>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </>
  );
}
