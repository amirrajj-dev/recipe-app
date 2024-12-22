import React, { useState } from "react";
import { FaRegHeart, FaUtensils, FaConciergeBell } from "react-icons/fa";
import { Link } from "react-router-dom";

const RecipeCard = ({ item, handleAddRecipeToFavourites }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(true);
  };

  return (
    <div className="w-full max-w-xs mx-auto rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl relative rtl bg-base-100 dark:bg-base-800">
      {isLoading ? (
        <div className="relative h-48 skeleton bg-black/50"></div>
      ) : (
        <div className="relative group h-48">
          <img
            onLoad={handleLoad}
            onError={handleError}
            className="w-full h-full object-cover transition duration-500 transform group-hover:scale-110 rounded-t-3xl"
            src={item.img}
            alt={item.foodName}
          />
          <button
            onClick={() => handleAddRecipeToFavourites(item)}
            className="absolute top-2 left-2 bg-base-200 dark:bg-base-900 text-red-500 p-3 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition duration-300 transform group-hover:rotate-45"
          >
            <FaRegHeart className=" transition duration-300" />
          </button>
        </div>
      )}
      <Link
        to={item.link}
        className="flex flex-col justify-between p-6 bg-base-200 dark:bg-base-900 bg-opacity-90 backdrop-blur-lg rounded-b-3xl h-48"
      >
        <div>
          <h3 className="text-xl font-semibold text-base-content dark:text-base-content flex items-center mb-3">
            <FaUtensils className="ml-2 text-yellow-500 animate-bounce" />{" "}
            {item.foodName}
          </h3>
          <p className="text-sm text-base-content dark:text-base-content flex items-center mb-2">
            <FaConciergeBell className="ml-2 text-blue-500 animate-pulse" />{" "}
            آشپزخانه: {item.kitchenName}
          </p>
          <p className="text-sm text-base-content dark:text-base-content flex items-center mb-2">
            <FaUtensils className="ml-2 text-green-500 animate-spin" /> تعداد
            پرس: {item.servings}
          </p>
        </div>
        <div className="mt-4">
          <h4 className="font-bold text-base-content dark:text-base-content mb-2">مزایا:</h4>
          <ul className="list-disc list-inside text-sm text-base-content dark:text-base-content space-y-1">
            {item.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;