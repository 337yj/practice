import React from "react";
import Avatar from "./Avatar";

export default function Profile({ image, name, title, isNew }) {
  return (
    <div className="profile">
      <Avatar image={image} isNew={isNew} />
      <h1>{name}</h1>
      <p>{title}</p>
      <span>...가 되고픈 코린이 🌱</span>
    </div>
  );
}
