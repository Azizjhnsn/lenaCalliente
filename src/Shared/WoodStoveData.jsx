import i18n from "../i18n";

// Function to get the translated wood stove data
const getWoodStoveData = () => {
  // Fetch translated data correctly
  const translatedStoves = i18n.getResource(i18n.language, "woodStove", "stoves", []);

  return Array.isArray(translatedStoves) ? translatedStoves : [];
};

// Get the wood stove data once at runtime
const woodStove = getWoodStoveData();
export default woodStove;
