import React from "react";
import Link from "next/link";
import { IoChevronDownOutline } from "react-icons/io5";
import { MobileLinksState, LinksDataType } from "../header/types";

interface MobileNavLinksProps {
  linksData: LinksDataType[];
  mobileLinksState: MobileLinksState;
  activeLink: string;
  isNavVisible: boolean;
  handleMainLinkClick: (key: string) => void;
  toggleNav: (key: boolean) => void;
  handleServiceSubLinkClick: (
    subKey: keyof Omit<MobileLinksState["services"], "isOpen">
  ) => void;
}

const MobileNavLinks: React.FC<MobileNavLinksProps> = ({
  linksData,
  mobileLinksState,
  activeLink,
  isNavVisible,
  handleMainLinkClick,
  handleServiceSubLinkClick,
  toggleNav,
}) => (
  <ul
    className={`max-lg:h-[calc(100vh_-_75px)] select-none ${
      isNavVisible ? "-bottom-5" : "-bottom-10"
    } overflow-y-auto flex justify-start lg:justify-center lg:items-center gap-3 lg:flex-row lg:translate-y-0 lg:bg-transparent lg:p-0 p-5 rounded-bl-xl rounded-br-xl flex-col bg-superdark max-lg:absolute right-0 duration-500  translate-y-full w-full items-start`}
  >
    {linksData.map((data) => {
      const key = data.name.toLowerCase();

      return (
        <li
          key={key}
          className={`w-full lg:w-fit shrink-0 lg:px-3 lg:py-2 lg:rounded-[10px] hover:lg:bg-white hover:lg:text-black ${
            key === "services"
              ? mobileLinksState.services.isOpen
                ? "max-h-[1000px] lg:bg-white lg:text-black"
                : "max-h-6"
              : mobileLinksState[
                  key as keyof Omit<MobileLinksState, "services">
                ]
              ? "max-h-[1000px] lg:bg-white lg:text-black"
              : "max-h-6"
          } duration-700 overflow-hidden lg:overflow-visible lg:max-h-full`}
        >
          <span
            onClick={() => handleMainLinkClick(key)}
            className="flex text-sm font-semibold lg:justify-center justify-between w-full items-center gap-1 cursor-pointer capitalize"
          >
            {data.name}
            <div className="flex justify-center items-center">
              <IoChevronDownOutline
                className={`mt-1 duration-500 ${
                  (key === "services"
                    ? mobileLinksState.services.isOpen
                    : mobileLinksState[
                        key as keyof Omit<MobileLinksState, "services">
                      ]) || activeLink === key
                    ? "rotate-180"
                    : "rotate-0"
                }`}
              />
            </div>
          </span>

          <div className="mobile_links max-lg:max-h-[30vh] overflow-y-auto lg:hidden">
            {data.links.map((link) => {
              if (
                data.name.toLowerCase() !== activeLink.toLowerCase() &&
                (key !== "services" || !mobileLinksState.services.isOpen)
              ) {
                return null;
              }

              if (key === "services") {
                const serviceKey = link.heading?.toLowerCase() as keyof Omit<
                  MobileLinksState["services"],
                  "isOpen"
                >;

                return (
                  <div key={link.heading}>
                    <span
                      onClick={() => handleServiceSubLinkClick(serviceKey)}
                      className="flex justify-between w-full items-center gap-1 cursor-pointer px-5 py-2"
                    >
                      <p className="font-semibold text-sm">{link.heading}</p>
                      <div className="flex justify-center items-center">
                        <IoChevronDownOutline
                          className={`mt-1 duration-500 ${
                            mobileLinksState.services[serviceKey]
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                        />
                      </div>
                    </span>

                    {mobileLinksState.services[serviceKey] && (
                      <ul className="pl-10">
                        {link.subLinks?.map((sub) => (
                          <div key={sub.href}>
                            <Link
                              href={`/${data.name}/${sub.href}`}
                              className="text-sm my-3 block"
                            >
                              {sub.paragraph}
                            </Link>
                          </div>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              }

              return (
                <div key={link.href} className="py-2 pl-5">
                  <Link
                    href={`/${data.name}/${link.href}`}
                    onClick={() => toggleNav(!isNavVisible)}
                  >
                    <h3 className="font-semibold text-sm">{link.heading}</h3>
                    <p className="text-xs text-pColor font-rubik font-light text-lightgray">
                      {link.paragraph}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </li>
      );
    })}

    {/* الروابط الإضافية */}
    <li className="lg:px-3 lg:py-2 lg:rounded-[10px] hover:lg:bg-white hover:lg:text-black duration-700">
      <Link
        href="/carrer"
        onClick={() => toggleNav(!isNavVisible)}
        className="text-sm font-bold lg:font-semibold"
      >
        Career
      </Link>
    </li>
    <li className="lg:px-3 lg:py-2 lg:rounded-[10px] hover:lg:bg-white hover:lg:text-black duration-700">
      <Link
        href="/finance"
        onClick={() => toggleNav(!isNavVisible)}
        className="text-sm font-bold lg:font-semibold"
      >
        Finance
      </Link>
    </li>
    <li className="lg:px-3 lg:py-2 lg:rounded-[10px] hover:lg:bg-white hover:lg:text-black duration-700">
      <Link
        href="/support"
        onClick={() => toggleNav(!isNavVisible)}
        className="text-sm font-bold lg:font-semibold"
      >
        Support
      </Link>
    </li>

    {/* CTA */}
    <li className="w-full lg:hidden">
      <div className="cta gap-3 text-sm font-semibold">
        <button className="w-full border border-white rounded-xl px-3 py-2 duration-700 hover:bg-white hover:text-dark">
          Login
        </button>
        <button className="w-full bg-white text-lightgreen [box-shadow:var(--mainShadow)] px-3 py-2 rounded-xl">
          Get started
        </button>
      </div>
    </li>

    <li className="mx-auto lg:hidden">
      <p className="font-source text-sm text-center my-6 text-lightgray md:hidden">
        {new Date().getFullYear()} eaneer.all right reserved
      </p>
    </li>
  </ul>
);

export default MobileNavLinks;
