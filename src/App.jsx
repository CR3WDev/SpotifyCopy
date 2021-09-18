import "./App.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/Footer/Footer";
import FAQ from "./pages/FAQ/FAQ";
import Home from "./pages/Home/Home";
import Premium from "./pages/Premium/Premium";
import Download from "./pages/Download/Download";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/Download" component={Download} />
        <Route path="/Premium" component={Premium} />
        <Route path="/FAQ" component={FAQ} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
