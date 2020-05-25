import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { HashLink as Link } from "react-router-hash-link";
import Carousel from "react-bootstrap/Carousel";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

// import { Link, animateScroll as scroll } from "react-scroll";

import "./Main.css";
// import "./Carousel.css";
// import "./Facials.css";
// import "./Treatments.css";
// import "./Peels.css";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="jumbotron-img"></Jumbotron>

        <a className="anchor" id="facials" />
        <Container className="facials">
          <hr className="hr-style" />
          <h2>Facials</h2>
          <hr className="hr2" />
          <p className="head-p">
            Facials include cleanse skin consultation, exfoliation and
            extractions
            <br /> as needed corrective mask with plenty of relaxing massage.
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
                  Online booking coming soon.
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
                <small className="text-muted">
                  Online booking coming soon.
                </small>
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
                <small className="text-muted">
                  Online booking coming soon.
                </small>
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
                <small className="text-muted">
                  Online booking coming soon.
                </small>
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
                <small className="text-muted">
                  Online booking coming soon.
                </small>
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
                <small className="text-muted">
                  Online booking coming soon.
                </small>
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
                <small className="text-muted">
                  Online booking coming soon.
                </small>
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
                <small className="text-muted">
                  Online booking coming soon.
                </small>
              </Card.Footer>
            </Card>

            <Card className="invisible">
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <Card.Footer></Card.Footer>
            </Card>
          </CardDeck>
        </Container>

        <a className="anchor" id="treatments" />
        <Container className="treatments">
          <hr className="hr-style" />
          <h2>Treatments</h2>
          <hr className="hr2" />

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
                <small className="text-muted">
                  Online booking coming soon.
                </small>
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
                <small className="text-muted">
                  Online booking coming soon.
                </small>
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
                <small className="text-muted">
                  Online booking coming soon.
                </small>
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
                <small className="text-muted">
                  Online booking coming soon.
                </small>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Img variant="top" src="assets/img/red-leds.png" />
              <Card.Body>
                <Card.Title>Lightwave LED Topical Light Infusion</Card.Title>
                <Card.Text>
                  <p>
                    Topical treatment is optimized to Target a unique skin
                    concern. This non invasive treatment can improve the
                    appearance of wrinkles, sun damage , burns , acne scars ,
                    oily skin and loose in elastic skin.
                  </p>
                  <p>$125</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Online booking coming soon.
                </small>
              </Card.Footer>
            </Card>

            <Card className="invisible">
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <Card.Footer></Card.Footer>
            </Card>
          </CardDeck>
        </Container>

        <a className="anchor" id="peels" />
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
                <small className="text-muted">
                  Online booking coming soon.
                </small>
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
                <small className="text-muted">
                  Online booking coming soon.
                </small>
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
                <small className="text-muted">
                  Online booking coming soon.
                </small>
              </Card.Footer>
            </Card>
          </CardDeck>
          <br />
          <br />

          <Card>
            <Card.Footer>
              <p className="head-p">
                <br />
                Promotional Offer: Chemical Peel series of 3 for $190
              </p>
            </Card.Footer>
          </Card>
        </Container>
      </div>
    );
  }
}