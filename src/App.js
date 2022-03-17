import React from "react";
import {Header} from "./Header/Header";
import {PillowBig} from "./PillowBig/PillowBig";
import {Represent} from "./Represent/Represent";
import {Navigation} from "./Navigation/Navigation";
import {Products} from "./Products/Products";
import {Pillow} from  "./Pillow/Pillow"
import {Footer} from "./Footer/Footer";
import {FooterNav} from "./FooterNav/FooterNav";

const App = () => {
  return (
    <div>
      <Header/>
      <PillowBig/>
      <Represent/>
      <Navigation/>
      <Products/>
      <Pillow/>
      <Footer/>
      <FooterNav/>
    </div>
  );
}

export default App;
