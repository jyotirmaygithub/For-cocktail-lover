import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";

export default function Feedback() {
  const [text, setText] = useState("");
  const [localstoredata, setlocalstoredata] = useState([]);
  const [popup, setpop] = useState("");
  const [removal, setremoval] = useState(false);

  function writingText(e) {
    setText(e.target.value);
  }

  function submitForm(e) {
    e.preventDefault();
    setremoval(true);
    if (text.length === 0) {
      setpop("Comment is empty");
    } else if (text.split(/\s+/).filter((e) => e !== "").length >= 150) {
      setpop("You exceeded the limit");
    } else {
      storedata(text);
      setText("");
      setpop("Your comment submitted");
    }
    timer();
    // You can add code here to handle the form submission to your server or perform any other actions.
  }
  function timer() {
    setTimeout(() => {
      setremoval(false);
    }, 1500);
  }
  function avaliabledata() {
    let dataarray;
    if (localStorage.getItem("comment") === null) {
      dataarray = [];
    } else {
      dataarray = JSON.parse(localStorage.getItem("comment"));
    }
    return dataarray;
  }
  function storedata(text) {
    let newdata = avaliabledata();
    newdata.push(text);

    localStorage.setItem("comment", JSON.stringify(newdata));
  }
  useEffect(() => {
    let wholedata = avaliabledata();
    setlocalstoredata(wholedata);
  }, [text]);

  function deletecomment(num) {
    let inlocalstorage = avaliabledata();
    inlocalstorage = inlocalstorage.filter((e, index) => index !== num);
    setlocalstoredata(inlocalstorage);
    localStorage.setItem("comment", JSON.stringify(inlocalstorage));
  }

  return (
    <>
      <div className="popup-box">
        {removal && <p className="dynamic-box">{popup}</p>}
      </div>
      <div className="textarea-box">
        <form onSubmit={submitForm}>
          <textarea
            value={text}
            onChange={writingText}
            className="textarea-changes"
            placeholder="Write your comments (Maximum words 150)"
            cols="60"
            rows="15"
          ></textarea>
          <button type="submit">Submit</button>
          <p>
            Number of words :{" "}
            {text.split(/\s/).filter((word) => word !== "").length}
          </p>
        </form>
      </div>
      <div className="comment-box">
        <h2>Comments</h2>
        <hr />
        {localstoredata.map((e, index) => {
          return (
            <div className="review-box" key={index}>
              <p> {e}</p>
              <button onClick={() => deletecomment(index)}>Delete</button>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
