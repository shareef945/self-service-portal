import React from "react";

export default function Card(props) {
  function redirect() {
    window.location.href = props.url;
  }
  return (
    <div className="card" onClick={redirect}>
      {props.text}
    </div>
  );
}
