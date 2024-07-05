import Image from "next/image";
import React from "react";

export default function Card({ iconSrc, title, description, customClassName }) {
  return (
    <div className="card bg-transparent text-white border-0">
      <Image src={iconSrc} alt="logo" width={357} />
      <div className={`card-body ${customClassName}`}>
        <h4 className="card-title mb-3">{title}</h4>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}
