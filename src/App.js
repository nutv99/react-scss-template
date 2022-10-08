import React from 'react';
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';

export default function App() {
  return (
    <div>
      <h1>ssss</h1>
      <div className="box">5555</div>
      <div className="box">66665555</div>
      <div className="flexRow">
        <div className="card boxShadow">Card1</div>
        <div className="card boxShadow">Card2</div>
        <div className="cardImage boxShadow">
          <img
            src="https://image.shutterstock.com/image-vector/powerful-sunscreen-product-banner-water-260nw-1502049644.jpg"
            alt=""
          />
          <div>
            <h2 className="headcaption" style={{ margin: 0 }}>
              Product{' '}
            </h2>
            <h4 className="subcaption" style={{ margin: 0 }}>
              Product{' '}
            </h4>
            <div className="descBox">
              <LoremIpsum p={2} />
            </div>
          </div>
        </div>
      </div>

      <ul className="color-list">
        <li className="tile tile--tint"></li>
        <li className="tile tile--tint"></li>
        <li className="tile tile--tint"></li>
        <li className="tile tile--tint"></li>
        <li className="tile tile--tint"></li>
        <li className="tile tile--tint"></li>
        <li className="tile tile--tint"></li>
        <li className="tile tile--tint"></li>
        <li className="tile tile--tint"></li>
        <li className="tile tile--tint"></li>
      </ul>

      <h2 className="title">Lighten</h2>
      <ul className="color-list">
        <li className="tile tile--lighten"></li>
        <li className="tile tile--lighten"></li>
        <li className="tile tile--lighten"></li>
        <li className="tile tile--lighten"></li>
        <li className="tile tile--lighten"></li>
        <li className="tile tile--lighten"></li>
        <li className="tile tile--lighten"></li>
        <li className="tile tile--lighten"></li>
        <li className="tile tile--lighten"></li>
        <li className="tile tile--lighten"></li>
      </ul>

      <h2 className="title">Shade</h2>
      <ul className="color-list">
        <li className="tile tile--shade"></li>
        <li className="tile tile--shade"></li>
        <li className="tile tile--shade"></li>
        <li className="tile tile--shade"></li>
        <li className="tile tile--shade"></li>
        <li className="tile tile--shade"></li>
        <li className="tile tile--shade"></li>
        <li className="tile tile--shade"></li>
        <li className="tile tile--shade"></li>
        <li className="tile tile--shade"></li>
      </ul>

      <h2 className="title">Darken</h2>
      <ul className="color-list">
        <li className="tile tile--darken"></li>
        <li className="tile tile--darken"></li>
        <li className="tile tile--darken"></li>
        <li className="tile tile--darken"></li>
        <li className="tile tile--darken"></li>
        <li className="tile tile--darken"></li>
        <li className="tile tile--darken"></li>
        <li className="tile tile--darken"></li>
        <li className="tile tile--darken"></li>
        <li className="tile tile--darken"></li>
      </ul>
    </div>
  );
}
