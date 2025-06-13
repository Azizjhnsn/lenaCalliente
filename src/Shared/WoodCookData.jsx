import i18n from "../i18n";

// Function to get the translated wood cook data
const getWoodCookData = () => {
  const translatedBoilers = i18n.getResource(i18n.language, "woodCook", "cook", []);
  return Array.isArray(translatedBoilers) ? translatedBoilers : [];
};

// Get the wood cook data once at runtime
const woodCook = getWoodCookData();
export default woodCook;
