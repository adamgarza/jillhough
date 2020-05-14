import React, { Component } from "react";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

import "./Facials.css";

class Facials extends Component {
  render() {
    return (
      <div>
        <Container>
          <h2>Facials</h2>
          <p>
            <hr className="hr2" />
          </p>
          <hr className="hr2" />
          <p className="head-p">
            Facials include cleanse skin consultation, exfoliation and
            extractions as needed corrective mask with plenty of relaxing
            massage.
          </p>
          <CardDeck>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Jill's Signature Collagen Facial</Card.Title>
                <Card.Text>
                  <p>
                    This stimulating treatment will rescue skin with high doses
                    of collagen, mango &amp; caffeine. This facial includes lip
                    &amp; eye treatment.
                  </p>

                  <p>$95</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Allow 1 hour &amp; 30 minutes
                </small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="assets/img/express-facial.png" />
              <Card.Body>
                <Card.Title>Express Facial</Card.Title>
                <Card.Text>
                  <p>
                    This highly personalized treatment will cleanse, exfoliate
                    &amp; revitalize your skin in just 30 minutes.
                  </p>
                  <p>$45</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Allow 30 minutes</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="assets/img/acne.png" />
              <Card.Body>
                <Card.Title>Clear Future Acne Facial</Card.Title>
                <Card.Text>
                  <p>
                    This facial is formulated to naturally clarify skin &amp;
                    shrink enlarged pores while maintaining balance and comfort
                    with probiotics.
                  </p>
                  <p>$75</p>
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
              <Card.Img variant="top" src="assets/img/radiance.png" />
              <Card.Body>
                <Card.Title>Radiance Rehab Facial</Card.Title>
                <Card.Text>
                  <p>
                    This facial increases radiance and elasticity reduces
                    wrinkles, redness ans inflammation. Featuring vitamins A
                    &amp; C.
                  </p>
                  <p>$75</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">??</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Bee Dazzle Facial</Card.Title>
                <Card.Text>
                  <p>
                    This facial delivers quality rejuvenation without fuss or
                    downtime. Alpha hydroxy acid recondition skin texture &amp;
                    complexion. Finished with a Manuka honey mask.
                  </p>
                  <p>$75</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">??</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Hydrodermabrasion Facial</Card.Title>
                <Card.Text>
                  <p>
                    The latest &amp; greatest way to remove dead skin cells from
                    the skin. This facial uses water &amp; oxygen to
                    effortlessly exfoliate dead skin, while adding hydration.
                  </p>
                  <p>$85</p>
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
              <Card.Img variant="top" src="assets/img/teen-facial.png" />
              <Card.Body>
                <Card.Title>Teen Facial</Card.Title>
                <Card.Text>
                  <p>
                    Includes a deep cleanse, extractions, acne enzyme mask and
                    blue light therapy. Skin care lesson included.
                  </p>
                  <p>$45</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">??</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="assets/img/gentlemans-facial.png" />
              <Card.Body>
                <Card.Title>Gentleman's Facial</Card.Title>
                <Card.Text>
                  <p>
                    A customized treatment includes deep pore cleansing, hot
                    towels, exfoliation &amp; a Smoked Bourbon Mask.
                  </p>
                  <p>$55</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">??</small>
              </Card.Footer>
            </Card>
            <Card className="invisible">
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Gentleman's Facial</Card.Title>
                <Card.Text>
                  <p>
                    A customized treatment includes deep pore cleansing, hot
                    towels, exfoliation &amp; a Smoked Bourbon Mask.
                  </p>
                  <p>$55</p>
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

export default Facials;
