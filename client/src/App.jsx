import { Navbar, Footer, Welcome, Item, Products,ProductDetails } from "./components";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export const AddMoreComp =()=>{
  return (
    <>
    <Welcome />
    <Products />
    </>
  )
}

const App = () => {
  return (
    <div className="bg">
      <Navbar />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<AddMoreComp />}
          />
          <Route
            path="/:id"
            element={<ProductDetails />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
