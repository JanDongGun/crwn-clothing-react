import React from "react";
import SHOP_DATA from "../../data/shopData";
import ColectionsPreview from "../../components/preview-colections/preview-colections.component";
class Shop extends React.Component {
  constructor() {
    super();
    this.state = {
      shopData: SHOP_DATA,
    };
  }

  render() {
    const { shopData } = this.state;
    return (
      <div className="shop-page">
        {shopData.map(({ id, ...data }) => {
          return <ColectionsPreview key={id} {...data} />;
        })}
      </div>
    );
  }
}

export default Shop;
