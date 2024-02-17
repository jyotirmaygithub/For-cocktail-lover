import React, { useEffect, useState } from "react";
import Dataextracted from "./Dataextract";
import LoadingBar from "react-top-loading-bar";

export default function Url() {
  const [url, seturl] = useState(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`
  );
  const [search, setsearch] = useState(" ");
  const [progressbar, setProgressbar] = useState(0);

  function textwriting(e) {
    setsearch(e.target.value);
  }

  useEffect(() => {
    seturl(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
    );
  }, [search]);
  return (
    <>
      <LoadingBar
        color="#F1C40F"
        height={3}
        progress={progressbar}
        onLoaderFinished={() => setProgressbar(0)}
      />
      <div className="mt-72">
        <div className="universal search-contain">
          <input
            onChange={textwriting}
            type="text"
            placeholder="Cheers to the moments that take our breath away."
            className="input-change"
          />
        </div>
        <article>
          <Dataextracted data={url} setprogressbar={setProgressbar} />
        </article>
      </div>
    </>
  );
}
