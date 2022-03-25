import { Route, Switch } from "react-router-dom";
import "./App.css";
import ExchangeSection from "./sections/ExchangeSection";
import FooterSection from "./sections/FooterSection";
import HeaderSection from "./sections/HeaderSection";
import StartSection from "./sections/StartSection";
import TypeSection from "./sections/TypeSection";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <>
      <Helmet>
        <title>Roqqu Exchange</title>
        <meta
          name="description"
          content="roqqu exchange site, crypto roqqu site, exchange site, get crypto, All things Crypto, Blockchain, NFTs and Metaverse."
        />
         <meta
          name="keywords"
          content="roqqu exchange site, crypto roqqu site, exchange site, get crypto"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HeaderSection />
            <ExchangeSection />
            <TypeSection />
            <StartSection />
            <FooterSection />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
