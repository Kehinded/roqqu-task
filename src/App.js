import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import FeePage from "./pages/FeePage";
import LearnPage from "./pages/LearnPage";
import BlogPage from "./pages/BlogPage";
import BusinessPage from "./pages/BusinessPage";

function App() {
  return (
    <>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/fee">
            <FeePage />
          </Route>
          <Route exact path="/blog">
            <BlogPage />
          </Route>
          <Route exact path="/business" >
            <BusinessPage />
          </Route>
          <Route exact path="/learn" >
            <LearnPage />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
