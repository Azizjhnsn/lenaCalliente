import React from "react";
import { Link } from "react-router-dom";
import { CBreadcrumb, CBreadcrumbItem, CContainer } from "@coreui/react";

const LocationBar = ({ currentPage }) => {
  return (
    <div className="bg-light py-3 mb-3 border-bottom shadow-sm">
      <CContainer>
        <CBreadcrumb className="m-0">
          <CBreadcrumbItem>
            <Link to="/" className="text-decoration-none text-primary">
              Home
            </Link>
          </CBreadcrumbItem>
          <CBreadcrumbItem active>{currentPage}</CBreadcrumbItem>
        </CBreadcrumb>
      </CContainer>
    </div>
  );
};

export default LocationBar;
