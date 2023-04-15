import React from "react";
import Banner from "./Components/Banner";
import Services from "./Components/Services";
import useClient from "../../Services/Hooks/useClient";

const Home = () => {
  const client = useClient();
  return (
    <div>
      <Banner />
      <Services />
    </div>
  );
};

export default Home;
