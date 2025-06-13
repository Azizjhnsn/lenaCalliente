import i18n from "../i18n";

// Function to get the translated wood boiler data
const getWoodBoilerData = () => {
  const translatedBoilers = i18n.getResource(i18n.language, "woodBoiler", "boilers", []);
  return Array.isArray(translatedBoilers) ? translatedBoilers : [];
};

// Get the wood boiler data once at runtime
const woodBoiler = getWoodBoilerData();
export default woodBoiler;
