// src/components/Sidebar.jsx
import React from "react";
import { View, Heading, Divider, ListBox, Item } from "@adobe/react-spectrum";
import { useNavigate, useLocation } from "react-router-dom";

const SideNavbar = () => {
  const navigate = useNavigate(); // To handle navigation
  const location = useLocation(); // To determine the current route

  const navItems = [
    { id: "/", name: "Home" },
    { id: "/basicTodo", name: "Basic Todo" },
    { id: "/about", name: "About" },
    { id: "/contact", name: "Contact" },
    { id: "/scribble", name: "Scribble" },
    { id: "/basicCalculator", name: "BasicCalculator" },
    { id: "/noteTaker", name: "NoteTaker" },
    { id: "/catalogue", name: "Catalogue" },
    { id: "/dogs", name: "Dogs" },

    // { id: "/searchbar", name: "Searchbar" },
  ];

  return (
    <View
      width="size-2400"
      height="100vh"
      backgroundColor="gray-100"
      padding="size-200"
      UNSAFE_style={{ borderRight: "1px solid lightgray" }}
    >
      <Heading level={3} marginStart="size-100" marginTop="size-100">
        NavAbi
      </Heading>
      <Divider size="S" marginY="size-200" />
      <ListBox
        selectionMode="single"
        aria-label="Sidebar Navigation"
        selectedKeys={new Set([location.pathname])} // Dynamically highlights the active route
        onSelectionChange={(selected) => {
          const key = Array.from(selected).pop(); // Convert Set to array and get the key
          if (key) navigate(key); // Navigate to the selected route
        }}
        items={navItems}
      >
        {(item) => <Item key={item.id}>{item.name}</Item>}
      </ListBox>
    </View>
  );
};

export default SideNavbar;
