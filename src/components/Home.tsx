import React, { ReactElement, Fragment } from "react";
import { Container, Jumbotron } from "react-bootstrap";

import { log } from "../logger";

export default function Home(): ReactElement {
  log.debug("rendering home");

  return (
    <Fragment>
      <Jumbotron>Some Sample App</Jumbotron>
      <Container>Env: {process.env.NODE_ENV}</Container>
    </Fragment>
  );
}
