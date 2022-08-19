import React from "react";

function SkillsItem({ img, title }) {
  return (
    <div className="item">
      <img src={img} alt={title} width="100%" />
      <h5>{title}</h5>
    </div>
  );
}

export default SkillsItem;
