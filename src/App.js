import { Route, Switch } from "react-router-dom";
import "./App.css";
import ExchangeSection from "./sections/ExchangeSection";
import FooterSection from "./sections/FooterSection";
import HeaderSection from "./sections/HeaderSection";
import StartSection from "./sections/StartSection";
import TypeSection from "./sections/TypeSection";

function App() {
  return (
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
  );
}

export default App;
