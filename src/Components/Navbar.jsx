import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CButton,
  CFormInput,
  CFormSelect,
  CNavbarToggler,
  CCollapse,
  CNavItem,
  CNavLink,
  CNavbarNav,
} from "@coreui/react";
import { FaShoppingCart, FaHeadset, FaSearch } from "react-icons/fa";
import { useCart } from "../Context/CartContext";
import { clearCart } from "../utils";
import FlagSelector from "./LanButton";
import { useProducts } from "../Context/ProductProvider";
import logo from "../assets/Red-Brown-Playfull-Campfire-Logo-e1734311402385.png";

const Navigationbar = () => {
  const navigate = useNavigate();
  const { totalPrice } = useCart();
  const { t } = useTranslation();
  const { searchProducts, searchResults } = useProducts();
  const [query, setQuery] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = () => {
    searchProducts(query);
    setNoResults(searchResults === null);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-dark text-light py-2 text-center d-flex justify-content-between px-4">
        <span>{t("promotion")}</span>
        <div>
          <CNavLink href="#" className="text-light me-3">
            {t("orderTracking")}
          </CNavLink>
          <CNavLink href="#" className="text-light">
            {t("contact")}
          </CNavLink>
        </div>
      </div>

      {/* Main Navbar */}
      <CNavbar expand="lg" className="bg-white shadow-sm sticky-top py-3">
        <CContainer>
          <CNavbarBrand href="/">
            <img src={logo} alt="Logo" height="50" />
          </CNavbarBrand>
          <CNavbarToggler onClick={() => setIsOpen(!isOpen)} />
          <CCollapse className="navbar-collapse" visible={isOpen}>
            <CNavbarNav className="mx-auto d-flex align-items-center">
              <div className="d-flex align-items-center bg-light rounded px-2">
                <CFormSelect
                  onChange={(e) => navigate(e.target.value)}
                  className="me-2 border-0 bg-light"
                  style={{ width: "180px" }} // Ensures dropdown remains inside the navbar
                >
                  <option value="/">{t("categories")}</option>
                  <option value="/fire-wood">{t("firewood")}</option>
                  <option value="/pallets">{t("pallets")}</option>
                  <option value="/wood-boiler">{t("woodBoiler")}</option>
                  <option value="/wood-cook">{t("woodCook")}</option>
                  <option value="/wood-stove">{t("woodStove")}</option>
                </CFormSelect>
                <CFormInput
                  type="search"
                  placeholder={t("productSearch")}
                  className="border-0 bg-light"
                  onChange={(e) => setQuery(e.target.value)}
                />
                <CButton
                  color="primary"
                  className="ms-2"
                  onClick={handleSearch}
                >
                  <FaSearch />
                </CButton>
              </div>
              {noResults && <p className="text-danger mt-2">No items found</p>}
            </CNavbarNav>

            <CNavbarNav className="d-flex align-items-center">
              <CNavItem className="me-4">
                <FaShoppingCart size={20} />
                <span className="ms-1">{t("myCart")}</span>
                <div className="fw-bold">{totalPrice.toFixed(2)} €</div>
              </CNavItem>
              <CNavItem>
                <FaHeadset size={20} />
                <div className="small">{t("callUs")}</div>
                <a href="tel:+33605540869" className="fw-bold text-primary">
                  +33 6 05 54 08 69
                </a>
              </CNavItem>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>

      {/* Secondary Menu */}
      <CContainer className="py-2 d-flex flex-row align-items-center">
        <CNavbarNav className="d-flex align-items-center flex-row w-100">
          {/* Category Dropdown */}
          <div className="me-3">
            <CFormSelect
              onChange={(e) => navigate(e.target.value)}
              className="bg-primary text-white border-0"
              style={{ width: "180px" }} // Ensures consistent width
            >
              <option value="/">{t("categories")}</option>
              <option value="/fire-wood">{t("firewood")}</option>
              <option value="/pallets">{t("pallets")}</option>
              <option value="/wood-boiler">{t("woodBoiler")}</option>
              <option value="/wood-cook">{t("woodCook")}</option>
              <option value="/wood-stove">{t("woodStove")}</option>
            </CFormSelect>
          </div>

          {/* Navigation Links */}
          <CNavbarNav className="d-flex align-items-center gap-3 flex-row">
            <CNavItem>
              <CNavLink href="/" className="fw-bold text-primary">
                {t("welcome")}
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/about" className="fw-bold text-primary">
                {t("about")}
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/trade" className="fw-bold text-primary">
                {t("trade")}
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/verify" className="fw-bold text-primary">
                {t("verify")}
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/contact" className="fw-bold text-primary">
                {t("contact")}
              </CNavLink>
            </CNavItem>

            {/* Clear Cart Button */}
            <CButton color="danger" className="fw-bold" onClick={clearCart}>
              {t("clearCart")}
            </CButton>

            {/* Language Selector */}
            <div className="ms-3">
              <FlagSelector />
            </div>
          </CNavbarNav>
        </CNavbarNav>
      </CContainer>
    </>
  );
};

export default Navigationbar;
