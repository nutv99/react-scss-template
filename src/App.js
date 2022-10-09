import React from 'react';
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';
import { BoxStandard } from './BoxStandard';

/*
Standard Box Data Structure
BoxStandard : {
  boxid : string,
  topcaption:[string],
  subject: string ,
  img : string ,
  desc : string 
  Link : [string],
  btnFunction : [string]
}

BoxStandardExtend : {
  boxid : string,
  subject: string ,
  img : string ,
  subimg :[string],
  desc : string ,
  subdesc:[string],
  Link : [string],
  btnFunction : [string]
}


*/


function BoxStandard(BoxData) {
  return (
    <div className="boxContainer styleBoxNormal">
      <div className="subject">{BoxData.subject}</div>
      {/* <div className="Subsubject">{BoxData.subsubject}</div> */}
      {BoxData.subsubject ? (
        <div className="Subsubject">{BoxData.subsubject}</div>
      ) : (
        ''
      )}
      <div className="boxImg">
        <img src={BoxData.img} alt={BoxData.subject} />
      </div>
      <div className="boxDesc">{BoxData.desc}</div>
    </div>
  );
}


export default function App() {
  const BoxData = {
    boxid: 'a111',
    topcaption: '',
    subject: 'Flower Ceramic Pots',
    subsubject: 'Best Seller Of Week',

    img: 'https://lovetoshopmall.com/workshop/suha/img/product/3.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eum? Id, culpa? At officia quisquam laudantium nisi mollitia nesciunt, qui porro asperiores cum voluptates placeat similique recusandae in facere quos vitae? 100% Good Reviews',
    subDesc : '฿4,350|฿3,350|ราคาพิเศษ',
    aLink: '',

    btnFunction: 'AddOrder',
  };
  return (
    <div>
      {BoxStandard(BoxData)}

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
