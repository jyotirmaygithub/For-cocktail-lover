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
      <div className=" universal alert-pop mt-20">{filter &&  <p className="bg-yellow-500"
      >{alert}</p>}</div>
      <div className="universal2 mt-5">
        <div className="form-box">
          <form ref={form} onSubmit={sendemail}>
            <label>Name</label>
            <input
            className="bg-transparent "
              onChange={(e) => setuser(e.target.value)}
              value={user}
              type="text"
              name="user_name"
            />
            <label>Email</label>
            <input
            className="bg-transparent "
              onChange={(e) => setuseremail(e.target.value)}
              value={useremail}
              type="email"
              name="user_email"
            />
            <label>Message</label>
            <textarea
            className="bg-transparent"
              onChange={(e) => setmessage(e.target.value)}
              value={message}
              name="message"
            />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
      <div className="fixed bottom-0">
        <Footer/>
      </div>
    </>
  );
}
