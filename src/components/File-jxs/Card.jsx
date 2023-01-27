import React from "react";

export default function Card(prop) {
  return (
    <div className={prop.Card}>
      <a className={prop.span}>
        <i className={prop.classIcon}></i>
      </a>

      <h3 className={prop.classH3}>{prop.h3Content}</h3>
      <p className={`${prop.description} `}>{prop.Pcontent}</p>
    </div>
  );
}
