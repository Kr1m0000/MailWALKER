import React, { useState, Suspense } from "react";
import { Header, SideBar } from "../components/emails";
import { Box, styled } from "@mui/material";
import { Outlet, Route, Routes } from "react-router-dom";
import SuspenseLoader from "../components/emails/common/SuspenseLoader";
import Emails from "../components/emails/Emails";
import SideNavBar from "../components/emails/SideNavBar";

const Wrapper = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
`;

const MainContent = styled(Box)`
  flex: 1;
  overflow: hidden;
`;

const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleDrawer = () => {
    setOpenDrawer((prevState) => !prevState);
  };

  return (
    <>
      <Header toggleDrawer={toggleDrawer} />

      <Wrapper>
        <SideNavBar />
        <SideBar toggleDrawer={toggleDrawer} openDrawer={openDrawer} />
        <MainContent>
          <Suspense fallback={<SuspenseLoader />}>
            <Routes>
              <Route path="/" element={<Emails openDrawer={openDrawer} />} />
            </Routes>
          </Suspense>
        </MainContent>
      </Wrapper>
    </>
  );
};

export default Main;
