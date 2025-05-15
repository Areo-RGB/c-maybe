import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SidebarContext } from '../../../contexts/SidebarContext';
import routes from '../../../routes.js';
import Footer from '../../footer/FooterAdmin.js';
import { Box } from '../ui/box';
import SidebarShadcn from './Sidebar';
import NavbarShadcn from './Navbar';

export default function AdminLayout(props) {
  const { ...rest } = props;
  // States
  const [fixed] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  
  // Route helper functions
  const getRoute = () => {
    return window.location.pathname !== '/admin/full-screen-maps';
  };
  
  const getActiveRoute = (routes) => {
    let activeRoute = 'Default Brand Text';
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].items);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (routes[i].category) {
        let categoryActiveRoute = getActiveRoute(routes[i].items);
        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveNavbar = getActiveNavbar(routes[i].items);
        if (collapseActiveNavbar !== activeNavbar) {
          return collapseActiveNavbar;
        }
      } else if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbar(routes[i].items);
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].secondary;
        }
      }
    }
    return activeNavbar;
  };
  
  const getActiveNavbarText = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveNavbar = getActiveNavbarText(routes[i].items);
        if (collapseActiveNavbar !== activeNavbar) {
          return collapseActiveNavbar;
        }
      } else if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbarText(routes[i].items);
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].messageNavbar;
        }
      }
    }
    return activeNavbar;
  };
  
  const getRoutes = (routes) => {
    return routes.map((route, key) => {
      if (route.layout === '/admin') {
        return (
          <Route path={`${route.path}`} element={route.component} key={key} />
        );
      }
      if (route.collapse) {
        return getRoutes(route.items);
      } else {
        return null;
      }
    });
  };

  // Set document direction
  document.documentElement.dir = 'ltr';
  
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <SidebarContext.Provider value={{ toggleSidebar, setToggleSidebar }}>
        <SidebarShadcn routes={routes} display="none" {...rest} />
        
        <div 
          className="float-right min-h-screen h-full overflow-auto relative max-h-full w-full xl:w-[calc(100%-290px)] xl:max-w-[calc(100%-290px)] transition-all duration-200 ease-linear"
        >
          <NavbarShadcn
            logoText={'Horizon UI Dashboard PRO'}
            brandText={getActiveRoute(routes)}
            secondary={getActiveNavbar(routes)}
            message={getActiveNavbarText(routes)}
            fixed={fixed}
            {...rest}
          />
          
          {getRoute() ? (
            <Box
              mx="auto"
              p={{ base: '20px', md: '30px' }}
              pe="20px"
              minH="100vh"
              pt="50px"
            >
              <Routes>
                {getRoutes(routes)}
                <Route
                  path="/"
                  element={<Navigate to="/admin/default" replace />}
                />
              </Routes>
            </Box>
          ) : null}
          
          <Box>
            <Footer />
          </Box>
        </div>
      </SidebarContext.Provider>
    </div>
  );
} 