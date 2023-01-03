import React from "react";
import { Container, Header, Caption } from "./style";
import { Link } from "react-router-dom";

const Home = (): JSX.Element => {
  return (
    <Container>
      <Header>Look Into An Experience</Header>
      <Caption>
        Stream the newest blockbuster hits, classic favorites, and exclusive original content all in
        one place. Our intuitive interface and vast selection make it easy to find your next movie
        marathon. So why wait? Start watching now and join the millions of satisfied subscribers
        already enjoying the best movies and TV shows.
      </Caption>
      <Link to="/results">Enter</Link>
    </Container>
  );
};

export default Home;
