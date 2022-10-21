import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import Tab from "@mui/material/Tab";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function NavBar({ route }) {
  const pages = [
    "/homepage",
    "/categoriespage",
    "/createPost",
    "/chatpage",
    "/accountpage",
  ];
  const index = pages.findIndex((page) => page == route);
  const r = useRouter();
  const HandleNavBarIcons = (name, num) => {
    r.push(name);
  };

  const Navigation = styled(BottomNavigation)`
    min-width: 100%;
    margin: 0;
  `;
  const Boxy = styled(Box)`
    width: 100vw;
    color: #4f4db0;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    z-index: 10;
    border-top: 0.1px solid #545454;
  `;

  return (
    <Boxy>
      <Navigation value={index}>
        <Tab
          icon={<HomeIcon fontSize="large" />}
          onClick={() => HandleNavBarIcons("/homepage", 1)}
        />
        <Tab
          icon={<SearchIcon fontSize="large" />}
          onClick={() => HandleNavBarIcons("/categoriespage", 2)}
        />
        <Tab
          icon={<AddIcon fontSize="large" />}
          onClick={() => HandleNavBarIcons("/createPost", 3)}
        />
        <Tab
          icon={<ChatBubbleOutlineIcon fontSize="large" />}
          onClick={() => HandleNavBarIcons("/chatpage", 4)}
        />
        <Tab
          icon={<PersonIcon fontSize="large" />}
          onClick={() => HandleNavBarIcons("/accountpage", 5)}
        />
      </Navigation>
    </Boxy>
  );
}
