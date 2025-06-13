import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import Navigationbar from "../Components/Navbar";
import LocationBar from "../Components/LocationBar";
import FeaturesSection from "../Components/FeatureSection";
import Footer from "../Components/Footer";

function About() {
  const { t } = useTranslation("others");

  return (
    <>
      <Navigationbar />
      <LocationBar currentPage={t("about.title")} />
      <Container className="py-5">
        <Row className="mb-4 text-center">
          <Col>
            <h1>{t("about.title")}</h1>
            <p className="lead">{t("about.intro")}</p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={12}>
            <Card className="shadow-sm border-0">
              <Card.Body>
                <h3>{t("about.storyTitle")}</h3>
                <p>{t("about.storyText")}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={12}>
            <Card className="shadow-sm border-0">
              <Card.Body>
                <h3>{t("about.productsTitle")}</h3>
                <p>{t("about.productsText")}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={12}>
            <Card className="shadow-sm border-0">
              <Card.Body>
                <h3>{t("about.commitmentTitle")}</h3>
                <p>{t("about.commitmentText")}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={12}>
            <h3>{t("about.whyTitle")}</h3>
            <ListGroup variant="flush">
              {Object.keys(t("about.whyList", { returnObjects: true })).map((key, index) => (
                <ListGroup.Item key={index}>{t(`about.whyList.${key}`)}</ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <p>{t("about.thanks")}</p>
          </Col>
        </Row>
      </Container>
      <FeaturesSection />
      <Footer />
    </>
  );
}

export default About;
