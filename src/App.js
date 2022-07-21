import MainApp from "./MainApp";
import Header from "./components/layout/Header";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import About from "./components/layout/About";
import Contact from "./components/layout/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route
          path="/about"
          excat
          element={
            <Fragment>
              <Header isImge={false} />
              <About />
            </Fragment>
          }
        />
        <Route
          path="/contact"
          excat
          element={
            <Fragment>
              <Header isImge={false} />
              <Contact />
            </Fragment>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
