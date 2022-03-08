import prop from "../../images/prop.png";
import family2 from "../../images/family2.jpeg";
import family3 from "../../images/family3.jpeg";
import "./home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="row_">
        <div className="banner">
          <img src={prop} className="card__fimage" alt="" />
          <p className="change">Change starts here</p>
          <p className="secondTier">
            Let's find a <span className="prop">property</span>that's perfect
            for you
          </p>
          <p className="thirdTier">
            At FindProp, Finding you a property is our priority{" "}
          </p>
          <Link to="/properties">
            <p className="buttonTier">Get Started Now</p>
          </Link>
        </div>
      </div>

      <div className="text-div">
        <text className="text">
          Whether you're buying, selling or renting, we can help you move
          forward
        </text>
      </div>

      <div style={{ paddingTop: "40px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingBottom: "1rem",
          }}
        >
          <div className="card_D">
            <div className="card__body">
              <h3 className="card__title">Sell</h3>
              <p className="card__description">
                At FindProp, we don't only help you to sell your property. We
                also help you get a good contract agreement, drawn up by our
                professional realtors.
              </p>
            </div>
          </div>
          <div className="card_D">
            <div className="card__body">
              <h3 className="card__title">Buy</h3>
              <p className="card__description">
                {" "}
                We do not only make findings about peoperties before they are
                uploaded. We go in depth to get clearance from the Department of
                Housings and Estates, before we list a property.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "1rem",
          }}
        >
          <div className="card_D">
            <div className="card__body">
              <h3 className="card__title">Rent</h3>
              <p className="card__description">
                Find a place with an immersive photo experience and a budget you
                can afford, including things you wont find anywhere else.
              </p>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div className="card">
            <div className="card__body">
              <h3 className="card__title">Find Agent</h3>
              <p className="card__description">
                With the aid of FinProp database of professional house agents,
                You will find a well tailored property agent that lives and
                works within your desired city.
              </p>
            </div>
          </div>

          <div className="card_D">
            <div className="card__body">
              <h3 className="card__title">Get House Loans</h3>
              <p className="card__description">
                At FindProp, we have different categories of house loans to help
                you get your dream property. Get a house loan now, with as
                little as 10% annual interest.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper" style={{ paddingTop: "40px" }}>
        <div className="card">
          <div className="card__body">
            <img className="card__image" alt="example" src={family2} />
            <h3 className="card__title">Buy a Property</h3>
            <p className="card__description">
              Find your place with an immersive photo experience and the most
              listings, including things you wont find anywhere else.
            </p>
          </div>
          <button className="card__btn">Search Properties</button>
        </div>

        <div className="card">
          <div className="card__body">
            <img className="card__image" alt="example" src={family3} />
            <h3 className="card__title">Sell a Property</h3>
            <p className="card__description">
              No matter what path you take to sell your home, we can help you to
              navigate a successful sale
            </p>
          </div>
          <button className="card__btn">See your options</button>
        </div>

        <div className="card">
          <div className="card__body">
            <img className="card__image" alt="example" src={family2} />
            <h3 className="card__title">Rent a Property</h3>
            <p className="card__description">
              We're creating a seamless online experience - from shopping on the
              largest rental network, to applying, to paying rent
            </p>
          </div>
          <button className="card__btn">Find Rentals</button>
        </div>
      </div>
      <br />
    </>
  );
};

export default Home;
