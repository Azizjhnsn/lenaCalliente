import { createContext, useContext, useState } from "react";
import fireWood from "../Shared/FireWoodData";
import pallets from "../Shared/PelletsData";
import woodBoiler from "../Shared/WoodBoilerData";
import woodCook from "../Shared/WoodCookData";
import woodStove from "../Shared/WoodStoveData";

// Combine all product arrays into one
const allProducts = [...fireWood, ...pallets, ...woodBoiler, ...woodCook, ...woodStove];
console.log("All products loaded in context:", allProducts); // Log all products

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState(allProducts);

  // Function to filter products based on user input
  const searchProducts = (query) => {
    if (!query.trim()) {
      setSearchResults(allProducts); // Reset if input is empty
      return;
    }
    
    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filtered.length ? filtered : null); // Set null if no match
  };

  return (
    <ProductContext.Provider value={{ allProducts, searchResults, searchProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
