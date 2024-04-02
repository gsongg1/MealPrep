import { Link } from "react-router-dom";
import React, { useState } from "react";

import { ChevronDownIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

export function ButtonWithIcon({ onClick, buttonText }) {
  return (
    <Button onClick={onClick} variant="ghost" className="text-2xl font-normal">
      {buttonText}
      <ChevronDownIcon className="ml-1 h-4 w-4" />
    </Button>
  );
}

const NavBar = () => {
  const [selectedUser, setSelectedUser] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setIsDropdownVisible(false);
  };

  return (
    <nav className="flex items-center justify-evenly w-full text-2xl p-4 top-0 fixed bg-gray-300">
      <Link to="/">Home</Link>
      <Link to="/recipes">Recipes</Link>
      <Link to="/mealplans">Meal Plans</Link>
      <div className="relative">
        <ButtonWithIcon
          onClick={toggleDropdown}
          buttonText={selectedUser || "Choose User"}
        />
        {isDropdownVisible && (
          <div className="absolute z-10 mt-2 rounded-lg bg-gray-300 w-full text-right pr-2 text-lg">
            <div>
              <a href="#" onClick={() => handleSelectUser("User 1")}>
                User 1
              </a>
            </div>
            <div>
              <a href="#" onClick={() => handleSelectUser("User 2")}>
                User 2
              </a>
            </div>
            <div>
              <a href="#" onClick={() => handleSelectUser("User 3")}>
                User 3
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;