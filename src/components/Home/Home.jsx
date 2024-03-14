import React from "react";
import setTitle from "../../helpers/SetTitle";

// Components
import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";
import AfterNav from "./AfterNav";

const Home = () => {
  const pageTitle = "Home";
  React.useEffect(() => {
    setTitle(pageTitle);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <AfterNav />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
