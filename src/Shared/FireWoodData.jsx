import i18n from "../i18n";

// Function to get the translated firewood data
const getFirewoodData = () => {
  const translatedFirewood = i18n.getResource(i18n.language, "fireWood", "firewood", []);
  return Array.isArray(translatedFirewood) ? translatedFirewood : [];
};

// Get the firewood data once at runtime
const fireWood = getFirewoodData();
export default fireWood;
