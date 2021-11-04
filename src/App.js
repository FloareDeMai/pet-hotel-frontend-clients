import { Switch, Route } from "react-router-dom";
import Hotels from "./components/Hotels";
import Layout from "./components/Layout";
import MainPage from "./components/MainPage";
import HotelDetails from "./components/HotelDetails"
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/hotels" exact component={Hotels} />
        <Route path="/hotel/:hotelName" exact component={HotelDetails} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact>
        <Register></Register>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
