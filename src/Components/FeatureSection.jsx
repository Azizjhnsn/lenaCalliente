import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTruck, FaDollarSign, FaHeadset, FaCreditCard } from 'react-icons/fa';
import { CCard, CCardBody, CCardTitle, CCardText } from '@coreui/react';
import { useTranslation } from 'react-i18next';

const FeaturesSection = () => {
  const { t } = useTranslation();

  return (
    <Container fluid className="bg-light py-5">
      <Row className="justify-content-center text-center">
        <Col xs={12} sm={6} md={3} className="mb-4">
          <CCard className="border-0 shadow-sm">
            <CCardBody>
              <FaTruck size={40} className="text-primary mb-3" />
              <CCardTitle className="fw-bold">{t('features.freeDelivery')}</CCardTitle>
              <CCardText className="text-muted">{t('features.freeDeliveryDescription')}</CCardText>
            </CCardBody>
          </CCard>
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-4">
          <CCard className="border-0 shadow-sm">
            <CCardBody>
              <FaDollarSign size={40} className="text-primary mb-3" />
              <CCardTitle className="fw-bold">{t('features.returns')}</CCardTitle>
              <CCardText className="text-muted">{t('features.returnsDescription')}</CCardText>
            </CCardBody>
          </CCard>
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-4">
          <CCard className="border-0 shadow-sm">
            <CCardBody>
              <FaHeadset size={40} className="text-primary mb-3" />
              <CCardTitle className="fw-bold">{t('features.support')}</CCardTitle>
              <CCardText className="text-muted">{t('features.supportDescription')}</CCardText>
            </CCardBody>
          </CCard>
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-4">
          <CCard className="border-0 shadow-sm">
            <CCardBody>
              <FaCreditCard size={40} className="text-primary mb-3" />
              <CCardTitle className="fw-bold">{t('features.payments')}</CCardTitle>
              <CCardText className="text-muted">{t('features.paymentsDescription')}</CCardText>
            </CCardBody>
          </CCard>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturesSection;
