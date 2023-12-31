import React, { useState, Suspense } from "react";

import { Box, styled } from "@mui/material";
import { Outlet, Route, Routes, Navigate } from "react-router-dom";
import SuspenseLoader from "../components/chats/common/SuspenseLoader";
import SideNavBar from "../components/note/SideNavbar";
import Header from '../components/note/Header.jsx';
import SideBar from "../components/note/SideBar.jsx";
import Notes from "../components/note/Notes.jsx";




const Wrapper = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
`;

const MainContent = styled(Box)`
  flex: 1;
  overflow: hidden;
`;

const NotesPage = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleDrawer = () => {
    setOpenDrawer((prevState) => !prevState);
  };

  return (
    <>
      <Header toggleDrawer={toggleDrawer} />

      <Wrapper>
        <SideNavBar/>
        <SideBar toggleDrawer={toggleDrawer} openDrawer={openDrawer} />
        <MainContent>
          
          <Suspense fallback={<SuspenseLoader />}>
          <Routes>
                {/* <Route path="/view" element={<ViewEmail openDrawer={openDrawer} />} /> */}
                <Route path="/notes" element={<Notes openDrawer={openDrawer} notesEndpoint="api/note/getNotes" />} />
                 <Route path="/archived" element={<Notes openDrawer={openDrawer} notesEndpoint="api/note/getBinNotes" />} /> 

                 <Route
                index // This makes this route the default child route
                element={<Navigate to="notes" replace />} // Redirect to /email/inbox
              />
            </Routes>
          </Suspense>
        </MainContent>
      </Wrapper>
    </>
  );
};

export default NotesPage;
