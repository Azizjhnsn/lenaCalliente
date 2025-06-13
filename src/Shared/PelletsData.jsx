import i18n from "../i18n";

// Function to get the translated pellet data
const getPelletData = () => {
  const translatedPallets = i18n.getResource(i18n.language, "pellets", "pallets", []);
  return Array.isArray(translatedPallets) ? translatedPallets : [];
};

// Get the pellet data once at runtime
const pallets = getPelletData();
export default pallets;
