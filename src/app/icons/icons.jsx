"use client";
import React from "react";
import { CiHome, CiLocationOn, CiHeart, CiUser } from "react-icons/ci";

export const Icons = ({ value }) => {
  const dayIcons = [
    { Icon: CiHome, label: "Home" },
    { Icon: CiLocationOn, label: "Location" },
    { Icon: CiHeart, label: "Heart" },
    { Icon: CiUser, label: "User" },
  ];

  const nightIcons = [
    { Icon: CiHome, label: "Home" },
    { Icon: CiLocationOn, label: "Location" },
    { Icon: CiHeart, label: "Heart" },
    { Icon: CiUser, label: "User" },
  ];

  const iconsToDisplay = value === "day" ? dayIcons : nightIcons;
  const hoverColor = value === "day" ? "hover:text-black" : "hover:text-white";

  return (
    <div className="flex space-x-16 text-3xl text-[#D1D5DB]">
      {iconsToDisplay.map((item, index) => (
        <item.Icon
          key={index}
          className={`${hoverColor} transition-all duration-300 ease-in-out`}
        />
      ))}
    </div>
  );
};
