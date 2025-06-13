import React from "react";

import HeroSection from "./HeroSection";
import peletsImg from "../assets/pellets.jpg";
import PromotionBanner from "../Components/PromoBanner";
import ImageBoxes from "./DualImageBoxes";

import NewArrivalsSection from "./Home/NewArrival";
import DailyOffersSection from "./Home/DailyOffers";
import DealOfDaySection from "./Home/DealOday";
import NewProductsSection from "./Home/NewProducts";
import BestSellersSection from "./Home/BestSellers";
import OurStovesSection from "./Home/OurStove";

import fireWood from "../Shared/FireWoodData";
import pallets from "../Shared/PelletsData";
import woodBoiler from "../Shared/WoodBoilerData";
import woodCook from "../Shared/WoodCookData";
import wooodStove from "../Shared/WoodStoveData";
import woodStove from "../Shared/WoodStoveData";

function HomeSections() {
  return (
    <div>
      {/* New arrivals */}
      <NewArrivalsSection newArrivalsLists={[ fireWood ]} displayCount={12}/>

      {/* Daily offers */}
      <DailyOffersSection dailyDealsLists={[pallets,fireWood,woodStove]} displayCount={4} />

      {/* Deal of the day pellets */}
      <DealOfDaySection dealOfDayLists={[fireWood, pallets, woodStove]} displayCount={4} />

      {/* Hero */}
      <HeroSection bgImg={peletsImg} />

      {/* Nouveaux prods */}
      <NewProductsSection newArrivalsLists={[ woodCook, woodBoiler, woodCook ]} displayCount={3} />

      {/* Promo banner */}
      <div className="mt-4 mb-4">
        <PromotionBanner />
      </div>

      {/* Best sellers */}
      <BestSellersSection bestSellersLists={[woodStove, fireWood]} displayCount={5} />

      {/* Image boxes */}
      <ImageBoxes />

      {/* Our wood pellets */}
      <OurStovesSection stovesLists={[woodStove]} displayCount={12} />

    </div>
  );
}

export default HomeSections;
