import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./preview-colections.style.scss";

const ColectionsPreview = ({ title, items }) => {
  return (
    <div className="preview-colections">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default ColectionsPreview;
