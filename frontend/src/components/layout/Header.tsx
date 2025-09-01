import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../ui/header/Logo";
import MobileMenuButton from "../ui/header/MobileMenuButton";
import DesktopDropdown from "../ui/header/DesktopDropdown";
import MobileNavLinks from "../ui/header/MobileNavLinks";
import { MobileLinksState } from "../ui/header/types";
import { linksData } from "../ui/header/data";

const Header = () => {
  const router = useRouter();
  const { service } = router.query; // هنا بدل useParams
  const pathname = router.asPath;   // هنا بدل usePathname

  const [isNavVisible, setIsNavVisible] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [mobileLinksState, setMobileLinksState] = useState<MobileLinksState>({
    company: false,
    industry: false,
    services: {
      isOpen: false,
      construction: false,
      subscriptions: false,
      agriculture: false,
      industrial: false,
    },
  });

  useEffect(() => {
    if (activeLink === "") {
      setMobileLinksState({
        company: false,
        industry: false,
        services: {
          isOpen: false,
          construction: false,
          subscriptions: false,
          agriculture: false,
          industrial: false,
        },
      });
    }
  }, [activeLink]);

  useEffect(() => {
    const path = pathname.split("/");

    if ((path.length === 3 && path[1] !== "services") || path.length === 4) {
      setIsNavVisible(false);
      setIsDropdownVisible(false);
      setActiveLink("");
      setMobileLinksState({
        company: false,
        industry: false,
        services: {
          isOpen: false,
          construction: false,
          subscriptions: false,
          agriculture: false,
          industrial: false,
        },
      });
    }
  }, [pathname]);

  const handleMainLinkClick = (key: string) => {
    if (key === "company" || key === "industry" || key === "services") {
      setMobileLinksState((prev) => ({
        ...prev,
        company: key === "company" ? !prev.company : false,
        industry: key === "industry" ? !prev.industry : false,
        services: {
          ...prev.services,
          isOpen: key === "services" ? !prev.services.isOpen : false,
          ...(key === "services"
            ? {}
            : {
                construction: false,
                subscriptions: false,
                agriculture: false,
                industrial: false,
              }),
        },
      }));

      setActiveLink((prev) => (prev === key ? "" : key));
      setIsDropdownVisible((prev) => {
        if (prev && activeLink === key) return false;
        return true;
      });
    }
  };

  const handleServiceSubLinkClick = (
    subKey: keyof Omit<MobileLinksState["services"], "isOpen">
  ) => {
    setMobileLinksState((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        construction: false,
        subscriptions: false,
        agriculture: false,
        industrial: false,
        [subKey]: !prev.services[subKey],
      },
    }));
  };

  useEffect(() => {
    if (service) {
      // تقدر دير منطق إضافي هنا
    }
  }, [service]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const header = document.querySelector("header");
      if (header && !header.contains(event.target as Node)) {
        setIsDropdownVisible(false);
        setActiveLink("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownVisible]);

  return (
    <header className="py-5 h-20 font-raleway sticky top-0 z-[100] bg-superdark text-white left-0 [box-shadow:var(--mainShadow)] tracking-wider">
      <div className="lg:w-[1280px] md:w-[820px] sm:w-[100%] mx-auto px-4 flex justify-between items-center relative">
        <div className="logo w-1/4">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <nav
          className={`navlinks lg:w-2/4 lg:block z-[1] duration-500 lg:visible lg:opacity-100 ${
            isNavVisible ? "visible" : "invisible opacity-0"
          }`}
        >
          <MobileNavLinks
            linksData={linksData}
            mobileLinksState={mobileLinksState}
            activeLink={activeLink}
            handleMainLinkClick={handleMainLinkClick}
            handleServiceSubLinkClick={handleServiceSubLinkClick}
            isNavVisible={isNavVisible}
            toggleNav={() => setIsNavVisible(!isNavVisible)}
          />
        </nav>

        <div className="cta w-1/4 gap-3 lg:flex lg:justify-end hidden text-sm font-semibold">
          <button>Login</button>
          <button className="bg-white text-lightgreen [box-shadow:var(--mainShadow)] px-3 py-2 rounded-xl">
            Get started
          </button>
        </div>

        <MobileMenuButton
          isNavVisible={isNavVisible}
          toggleNav={() => setIsNavVisible(!isNavVisible)}
        />
      </div>

      <DesktopDropdown
        isDropdownVisible={isDropdownVisible}
        activeLink={activeLink}
        linksData={linksData}
        isNavVisible={isNavVisible}
        toggleNav={() => setIsNavVisible(!isNavVisible)}
      />
    </header>
  );
};

export default Header;
