import React from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

interface MobileMenuButtonProps {
  isNavVisible: boolean;
  toggleNav: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  isNavVisible,
  toggleNav,
}) => (
  <div
    className="menu-icon lg:hidden flex justify-center items-center w-8 h-8 relative cursor-pointer"
    onClick={toggleNav}
  >
    <RxHamburgerMenu
      className={`absolute left-0 top-0 w-full h-full transition-all duration-500 ease-in-out ${
        isNavVisible
          ? "opacity-0 scale-90 pointer-events-none"
          : "opacity-100 scale-100"
      }`}
    />
    <RxCross2
      className={`absolute left-0 top-0 w-full h-full transition-all duration-500 ease-in-out ${
        isNavVisible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-90 pointer-events-none"
      }`}
    />
  </div>
);

export default MobileMenuButton;
