import React from "react";
import Product from "./Product";

import "./Home.css";

function Home() {
  //const { basket } = useContext(Context);

  //  const display = basket.map((item) => (
  // <Product
  //   //     key={item.id}
  //   //     item={item}
  //   id={item.id}
  //   title={item.title}
  //   price={item.price}
  //   rating={item.rating}
  //   image={item.image}
  // />;
  //  ));
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220-.jpg"
        alt=""
        className="home__image"
      />
      <div className="home__row">
        <Product
          id="12321341"
          title="The lean Startup: How Constant Innovation creates Radically Successful Business Paperback"
          price={11.96}
          rating={6}
          image={require("./image/dan.jpg")}
        />

        <Product
          id="123243412"
          title="This car is arguably the fastest car on the planet with Innovation creates Radically Paperback"
          price={20.96}
          rating={5}
          image={require("./image/eric.jpg")}
        />
      </div>
      <div className="home__row">
        <Product
          id="12321343"
          title="The lean Startup: How Constant Innovation creates Radically Successful Business Paperback"
          price={43.22}
          rating={4}
          image={require("./image/rahul.jpg")}
        />
        <Product
          id="12321344"
          title="The lean Startup: How Constant Innovation creates Radically Successful Business Paperback"
          price={11.96}
          rating={3}
          image={require("./image/tatiana.jpg")}
        />
        <Product
          id="12321345"
          title="The lean Startup: How Constant Innovation creates Radically Successful Business Paperback"
          price={6.96}
          rating={5}
          image={require("./image/whatsup.jpg")}
        />
      </div>
      <div className="home__row">
        <Product
          id="12321346"
          title="How Constant Innovation creates Radically Successful Paperback"
          price={10.96}
          rating={5}
          image={require("./image/caroline.jpg")}
        />
      </div>
    </div>
  );
}

export default Home;

//"http://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE_XSite_1500x600_PV_en-GB._CB428684220_.jpg"
//http://mages-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg
