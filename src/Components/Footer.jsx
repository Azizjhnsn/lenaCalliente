import React from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { CCard, CCardBody, CCardTitle, CCardText } from '@coreui/react';
import { useTranslation } from 'react-i18next';
import payment from "../assets/payment-1.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-light py-5 mt-5 border-top">
      <Container>
        <Row className="text-dark">
          <Col md={3}>
            <CCard className="border-0">
              <CCardBody>
                <CCardTitle className="fw-bold text-primary">{t('footer.address')}</CCardTitle>
                <CCardText>
                  {t('footer.needHelp')}
                  <p className="fw-bold fs-5">{t('footer.phoneNumber')}</p>
                  <span dangerouslySetInnerHTML={{ __html: t('footer.addressDetails') }} />
                  <p>{t('footer.email')}</p>
                </CCardText>
              </CCardBody>
            </CCard>
          </Col>
          <Col md={3}>
            <CCard className="border-0">
              <CCardBody>
                <CCardTitle className="fw-bold text-primary">{t('footer.termsAndConditions')}</CCardTitle>
                <ul className="list-unstyled">
                  <li>{t('footer.legalNotices')}</li>
                  <li>{t('footer.privacyPolicy')}</li>
                  <li>{t('footer.deliveryPolicy')}</li>
                  <li>{t('footer.refundPolicy')}</li>
                  <li>{t('footer.orderMonitoring')}</li>
                </ul>
              </CCardBody>
            </CCard>
          </Col>
          <Col md={3}>
            <CCard className="border-0">
              <CCardBody>
                <CCardTitle className="fw-bold text-primary">{t('footer.menu')}</CCardTitle>
                <ul className="list-unstyled">
                  <li><a href="/home" className="text-black">{t('welcome')}</a></li>
                  <li><a href="/about" className="text-black">{t('about')}</a></li>
                  <li><a href="/trade" className="text-black">{t('trade')}</a></li>
                  <li><a href="/verify" className="text-black">{t('verify')}</a></li>
                  <li><a href="/contact" className="text-black">{t('contact')}</a></li>
                </ul>
              </CCardBody>
            </CCard>
          </Col>
          <Col md={3}>
            <CCard className="border-0">
              <CCardBody>
                <CCardTitle className="fw-bold text-primary">{t('footer.subscribe')}</CCardTitle>
                <InputGroup className="mb-3">
                  <Form.Control type="email" placeholder={t('footer.subscribePlaceholder')} />
                  <Button variant="primary">{t('footer.subscribeButton')}</Button>
                </InputGroup>
              </CCardBody>
            </CCard>
          </Col>
        </Row>
        <Row className="mt-4 text-center">
          <Col>
            <img src={payment} alt="Payment Methods" className="img-fluid" />
          </Col>
        </Row>
        <Row className="mt-3 text-center">
          <Col>
            <p className="text-muted">{t('footer.copyright')}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
