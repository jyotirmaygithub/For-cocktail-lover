import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";

export default function Contact() {
  const form = useRef();
  const [user, setuser] = useState("");
  const [useremail, setuseremail] = useState("");
  const [message, setmessage] = useState("");
  const [alert, setAlert] = useState("Success : your message sent");
  const [filter, setfilter] = useState(false);
  const [color, setcolor] = useState('')


  function sendemail(e) {
      e.preventDefault();

    if(user !== "" && useremail !== "" && message !== ""){
        setfilter(true);
        timer()
        setcolor('#F1C40F')
        emailjs
          .sendForm(
            "service_mordrww",
            "template_fszeoqh",
            form.current,
            "ww4cWkcf4gfXnGXat"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
          setmessage("");
          setuser("");
          setuseremail("");
    }
    else{
        setAlert("unsuccess : Input fields are empty")
        setfilter(true)
        timer()

    }
  }
function timer(){
    setTimeout(() => {
      setfilter(false)
      setcolor('')
    },1500);
}
  return (
    <>
      <div className=" universal alert-pop">{filter && <p style={{backgroundColor:`${color}`}}
      >{alert}</p>}</div>
      <div className="universal2">
        <div className="form-box">
          <form ref={form} onSubmit={sendemail}>
            <label>Name</label>
            <input
              onChange={(e) => setuser(e.target.value)}
              value={user}
              type="text"
              name="user_name"
            />
            <label>Email</label>
            <input
              onChange={(e) => setuseremail(e.target.value)}
              value={useremail}
              type="email"
              name="user_email"
            />
            <label>Message</label>
            <textarea
              onChange={(e) => setmessage(e.target.value)}
              value={message}
              name="message"
            />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
