import React, { Component } from "react";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

import "./Treatments.css";

class Treatments extends Component {
  render() {
    return (
      <div>
        <Container>
          <hr className="hr-style" />
          <h2>Treatments</h2>
          <CardDeck>
            <Card>
              <Card.Img variant="top" src="assets/img/celluma-light.png" />
              <Card.Body>
                <Card.Title>Celluma Light Therapy</Card.Title>
                <Card.Text>
                  <p>
                    Phototherapy can increase circulation, accelerate tissue
                    repair, increase collagen production, kill acne bacteria,
                    decrease inflammation &amp; improve texture &amp; skin
                    clarity. * Series of 10 treatments recommended
                  </p>
                  <p>$55</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">??</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="assets/img/microcurrent.png" />
              <Card.Body>
                <Card.Title>Microcurrent</Card.Title>
                <Card.Text>
                  <p>
                    Often referred to as a natural face lift. This safe &amp;
                    painless facial lifrts &amp; firms to help erase fine lines
                    and wrinkles while increasing cellular activity.
                  </p>
                  <p>$75</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">??</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="assets/img/microdermabrasion.png" />
              <Card.Body>
                <Card.Title>Microdermabrasion</Card.Title>
                <Card.Text>
                  <p>
                    A minimal invasive prodcedure used to renew overall skin
                    tone &amp; texture. It can improve the appearance of sun
                    damage, fine lines and wrinkles.
                  </p>
                  <p>$65</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">??</small>
              </Card.Footer>
            </Card>
          </CardDeck>
        </Container>

        <Container>
          <CardDeck>
            <Card>
              <Card.Img variant="top" src="assets/img/dermaplaning.png" />
              <Card.Body>
                <Card.Title>Dermaplaning</Card.Title>
                <Card.Text>
                  <p>
                    The removal of vellus hair and exfoliation of the skin.
                    Hydrating mask included.
                  </p>
                  <p>$65</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">??</small>
              </Card.Footer>
            </Card>
            <Card className="invisible">
              <Card.Img variant="top" src="assets/img/dermaplaning.png" />
              <Card.Body>
                <Card.Title>Dermaplaning</Card.Title>
                <Card.Text>
                  <p>
                    The removal of vellus hair and exfoliation of the skin.
                    Hydrating mask included.
                  </p>
                  <p>$65</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">??</small>
              </Card.Footer>
            </Card>
            <Card className="invisible">
              <Card.Img variant="top" src="assets/img/dermaplaning.png" />
              <Card.Body>
                <Card.Title>Dermaplaning</Card.Title>
                <Card.Text>
                  <p>
                    The removal of vellus hair and exfoliation of the skin.
                    Hydrating mask included.
                  </p>
                  <p>$65</p>
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

export default Treatments;
