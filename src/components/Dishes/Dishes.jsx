import React from "react";
import DishCard from "./DishCard";
import { DISHES } from "../../constants";

const DishesComponents = () => {
  return (
    <section className="container mx-auto py-16" id="dishes">
      <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
        Our Dishes
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5 ">
      {/*Map */}
      {DISHES.map((project, index) => (
        <DishCard key={index} project={project} className="mb-8" />
      ))}
      </div>
    </section>
  );
};

export default DishesComponents;
