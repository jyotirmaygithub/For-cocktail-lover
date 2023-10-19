import React, { useState } from "react";
import Footer from "../components/Footer"

export default function Feedback() {
  const [text, setText] = useState("");

  function writingText(e) {
    setText(e.target.value);
  }

  function submitForm(e) {
    e.preventDefault();
    setText("");
    console.log(text);
    // You can add code here to handle the form submission to your server or perform any other actions.
  }
  
  return (
    <>
      <div className="textarea-box">
        <label>Feedback Form</label>
        <form onSubmit={submitForm}>
          <textarea
            value={text}
            onChange={writingText}
            className="textarea-changes"
            placeholder="We need your valuable feedback"
            cols="60"
            rows="15"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="comment-box">
        <h2>Feedback</h2>
        <hr />
      </div>
      <Footer/>
    </>
  );
}
