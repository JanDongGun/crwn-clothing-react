import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./preview-colections.style.scss";

const ColectionsPreview = ({ title, items }) => {
  return (
    <div className="preview-colections">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items
          .filter((item) => item.id <= 4)
          .map(({ id, ...otherItemProps }) => {
            return <CollectionItem key={id} {...otherItemProps} />;
          })}
      </div>
    </div>
  );
};

export default ColectionsPreview;
