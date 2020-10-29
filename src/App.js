import React,{useEffect} from "react";
import { Route, Switch } from "react-router-dom";

import Main from "./components/main/main";
import Auth from "./components/auth/auth";
import Registration from "./components/registration/registration";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import RegistrationClient from "./components/registClient/registClient";
import RegistOrganization from "./components/registOrganization/regisrtOrganization";
import About from "./components/about/about";
import OrderResearch from './components/orderResearch/orderResearch';
import BePartner from './components/bePartner/bePartner';
import Analitic from "./components/analitic/analitic";
import AnaliticCard from "./components/analitic_Card/analiticCard";
import MarketResearch from "./components/marketResearch/marketResearch";
import News from "./components/news/news";
import QuestionPage from "./components/question/question";
import NewsCard from "./components/newsCard/newsCard";
import Basket from "./components/basket/basket";
import { useDispatch, useSelector } from "react-redux";
import { mainData } from "./redux/actions/main/getMain";

function App() {


  return (
    <div className="App">
      <Header />
      <div className="container_wrapper">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/auth" component={Auth} />
        <Route path="/registration" component={Registration} />
        <Route path="/registration-organization" component={RegistOrganization} />
        <Route path="/registration-client" component={RegistrationClient} />
        <Route path="/about-us" component={About} />
        <Route path="/analitic" component={Analitic} />
        <Route path="/analiticCard" component={AnaliticCard} />
        <Route path="/market-research/:category/:text" component={MarketResearch} />
        <Route path="/order-research" component={OrderResearch} />
        <Route path="/be-partner" component={BePartner} />
        <Route path="/news" component={News} />
        <Route path="/questions" component={QuestionPage} />
        <Route path="/newsCard" component={NewsCard} />
        <Route path="/basket" component={Basket} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}


export default App;
