import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import "./IdCard";
import IdCard from "./IdCard";
import Greetings from "./Greetings";
import Random from "./Random";
import BoxColor from "./BoxColor";
import CreditCard from "./CreditCard";
import Rating from "./Rating";

function App() {
  return (
    <div>
      <h1>IdCard</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth="1988-05-11"
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h1>Greetings</h1>
      <Greetings lang="de" name="Ludwig" />
      <Greetings lang="fr" name="François" />
      <h1>Random</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h1>BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h1>CreditCard</h1>
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
        image="./img/visa.png"
      />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
        image="./img/master-card.svg"
      />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
        image="./img/visa.png"
      />

      <h1>Rating</h1>
      <Rating num={0} />
      <Rating num={1.49} />
      <Rating num={1.5} />
      <Rating num={3} />
      <Rating num={4} />
      <Rating num={5} />
    </div>
  );
}

export default App;
