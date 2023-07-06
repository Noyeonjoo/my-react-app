import React from "react";
import { useMediaQuery } from "react-responsive";

const useScreenType = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width: 1024px)",
  });

  const isPC = useMediaQuery({
    query: "(min-width: 1025px)",
  });

  return isPC ? "pc" : isTablet ? "tablet" : "mobile";
};
const Mobile = ({ children }: any) => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  return <>{isMobile && children}</>;
};

const Tablet = ({ children }: any) => {
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width: 1024px)",
  });

  return <>{isTablet && children}</>;
};

const PC = ({ children }: any) => {
  const isPC = useMediaQuery({
    query: "(min-width: 1025px)",
  });

  return <>{isPC && children}</>;
};

export { Mobile, Tablet, PC, useScreenType };

/* 
mobile : "max-width: 639px"
mobile(landscape):  "min-width: 640px"
tablet: "min-width: 768px"
tablet(landscape): "min-width: 1024px"
pc: "min-width: 1280px"
*/
