import React, { useState } from "react";
import ShoppingListOverlay from "@/components/ShoppingListOverlay";
import MealPlanCard from "@/components/MealPlanCard";
import { useNavigate } from "react-router-dom";

const MealPlansPage = () => {
  const navigate = useNavigate();

  const [isRecipeOverlayOpen, setRecipeOverlayOpen] = useState(false);
  const [isShoppingListOverlayOpen, setShoppingListOverlayOpen] =
    useState(false);
  const [currentMealPlan, setCurrentMealPlan] = useState(null);

  const mealplans = [
    {
      name: "Meal Plan 1",
      recipes: ["Spaghetti", "Pizza"],
      shoppingList: ["cheese", "sauce", "pasta", "dough"],
    },
    {
      name: "Meal Plan 2",
      recipes: ["Fries", "Ramen"],
      shoppingList: ["potatoes", "noodles", "broth"],
    },
    {
      name: "Meal Plan 3",
      recipes: ["Fried Rice", "Poutine"],
      shoppingList: ["rice", "potatoes", "gravy", "cheese"],
    },
  ];

  const handleRecipesClick = (mealplan) => {
    setCurrentMealPlan(mealplan);
    // navigate to a new page with the recipes and url mealplans/{mealplan.name}
    navigate(`/mealplans/${mealplan.name.replace(/\s+/g, "_")}`);
  };

  const handleShoppingListClick = (mealplan) => {
    setCurrentMealPlan(mealplan);
    setShoppingListOverlayOpen(true);
  };

  return (
    <div className="flex flex-col items-center overflow-auto mt-24">
      <h1 className="text-lg font-bold">Meal Plans Page</h1>
      <div className="w-full">
        {mealplans.map((mealplan, index) => (
          <MealPlanCard
            key={index}
            mealplan={mealplan}
            onRecipesClick={() => handleRecipesClick(mealplan)}
            onShoppingListClick={() => handleShoppingListClick(mealplan)}
          />
        ))}
        <ShoppingListOverlay
          isOpen={isShoppingListOverlayOpen}
          onClose={() => setShoppingListOverlayOpen(false)}
          shoppingList={currentMealPlan?.shoppingList}
        />
      </div>
    </div>
  );
};

export default MealPlansPage;