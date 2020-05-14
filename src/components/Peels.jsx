import React, { Component } from "react";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

import "./Peels.css";

class Peels extends Component {
  render() {
    return (
      <div>
        <Container>
          <hr className="hr-style" />
          <h2>Chemical Peels</h2>
          <hr className="hr2" />
          <CardDeck>
            <Card>
              <Card.Img variant="top" src="assets/img/sensi-peel.png" />
              <Card.Body>
                <Card.Title>PCA Sensi Peel</Card.Title>
                <Card.Text>
                  <p>
                    This gentle peel will improve surface texture &amp; brighten
                    the skin. Includes take home after peel care serum.
                  </p>
                  <p>$85</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">??</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="assets/img/lactic-acid-peel.png" />
              <Card.Body>
                <Card.Title>20% Lactic Peel</Card.Title>
                <Card.Text>
                  <p>For extreme lightening due to sundamaged skin</p>
                  <p>$85</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">??</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="assets/img/rezenerate.png" />
              <Card.Body>
                <Card.Title>Rezenerate Nanofacial</Card.Title>
                <Card.Text>
                  <p>??</p>
                  <p>$??</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">??</small>
              </Card.Footer>
            </Card>
          </CardDeck>
        </Container>
      </div>
    );
  }
}

export default Peels;
