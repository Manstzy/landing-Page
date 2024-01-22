import React from "react";
import Main from "../Components/Main";
import Row from "../Components/Row";
import requests from "../request";


const Home = () => {
  return (
    <>
      <Main />
      <Row rowID="1" title={"Upcoming"} fetchUrl={requests.requestUpcoming} />
      <Row rowID="2" title={"Popular"} fetchUrl={requests.requestPopular} />
      <Row rowID="3" title={"TopRated"} fetchUrl={requests.requestTopRated} />
      <Row rowID="4" title={"Trending"} fetchUrl={requests.requestTrending} />
      <Row rowID="5" title={"Horror"} fetchUrl={requests.requestHorror} />
    </>
  );
};

export default Home;
