import React from "react";

const ColectionsPreview = ({ title, items }) => {
  return (
    <div className="preview-colections">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items
          .filter((item) => item.id <= 4)
          .map((item) => {
            return (
              <div className="" key={item.id}>
                {item.name}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ColectionsPreview;
