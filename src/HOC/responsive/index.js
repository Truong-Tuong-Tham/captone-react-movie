// desktop > 1024px , 640px  < tablet <= 1024px , mobile < 640px

// const { useMediaQuery } = require('react-responsive');

import { useMediaQuery } from 'react-responsive';

export const DesktopResponsive = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  return isDesktop ? children : null;
};

export const TabletResponsive = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1024 });
  console.log('isTablet: ', isTablet);
  return isTablet ? children : null;
};

export const MobileResponsive = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 639 });
  return isMobile ? children : null;
};
