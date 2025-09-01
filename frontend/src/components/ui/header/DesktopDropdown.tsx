'use client'
import React, { useState } from "react";
// import AppCard from "../../../public/global/Applicationcard.svg";
import Link from "next/link";
import { LinksDataType } from "../header/types";
import Image from "next/image";

interface DesktopDropdownProps {
  isDropdownVisible: boolean;
  activeLink: string;
  linksData: LinksDataType[];
  isNavVisible: boolean;
  toggleNav: (key: boolean) => void;
}

const DesktopDropdown: React.FC<DesktopDropdownProps> = ({
  isDropdownVisible,
  activeLink,
  linksData,
  isNavVisible,
  toggleNav,
}) => {
  const [servicesTypes, setServicesTypes] = useState<
    | "construction"
    | "subscriptions"
    | "agriculture"
    | "industrial"
    | "energetics"
  >("construction");
  return (
    <div
      className={`link_popup hidden lg:block absolute left-0 -bottom-10 translate-y-full w-full bg-[#06141b80] backdrop-blur-lg py-5 duration-500 ${
        isDropdownVisible
          ? "lg:visible lg:opacity-100 lg:-bottom-0"
          : "lg:invisible opacity-0"
      }`}
    >
      <div
        className={`lg:w-[1280px] md:w-[820px] sm:w-[318px] mx-auto px-4 font-semibold font-inter text-sm lg:grid lg:grid-cols-3 lg:gap-10 duration-500 ${
          isDropdownVisible ? "-bottom-5" : "-bottom-10"
        } lg:bottom-0`}
      >
        {linksData.map((data) => {
          if (data.name.toLowerCase() !== activeLink) return null;

          if (activeLink === "company") {
            return data.links.map((link, index) => (
              <div key={`company-${index}`} className={`${link.href}`}>
                <Link
                  href={`/${data.name}/${link.href}`}
                  onClick={() => {
                    toggleNav(!isNavVisible);
                  }}
                >
                  <h2>{link.heading}</h2>
                  <p className="text-lightgray font-light">{link.paragraph}</p>
                </Link>
              </div>
            ));
          }

          if (activeLink === "industry") {
            return (
              <React.Fragment key="industry-dropdown">
                <div className="col-span-2 grid grid-cols-2 gap-10">
                  {data.links.map((link, idx) => (
                    <div key={idx} className={`${link.href}`}>
                      <Link
                        href={`/${data.name}/${link.href}`}
                        onClick={() => {
                          toggleNav(!isNavVisible);
                        }}
                      >
                        <h2>{link.heading}</h2>
                        <p className="text-lightgray font-light">
                          {link.paragraph}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="col-span-1 flex justify-end">
                  <Image src='/global/Applicationcard.svg' width={500} height={300} alt="" />
                </div>
              </React.Fragment>
            );
          }

          return (
            <React.Fragment key="services-dropdown">
              <div className="col-span-1">
                {data.links.map((link) => (
                  <div
                    key={link.heading}
                    onClick={() => {
                      const heading = link.heading?.toLowerCase();
                      // console.log(heading);

                      if (
                        heading === "construction" ||
                        heading === "subscriptions" ||
                        heading === "agriculture" ||
                        heading === "industrial" ||
                        heading === "energetics"
                      ) {
                        setServicesTypes(heading);
                      }
                    }}
                    className={`${link.heading?.toLowerCase()} border border-white cursor-pointer w-2/5 lg:max-xl:w-3/5 rounded-xl text-center px-4 py-4 duration-700 my-3 hover:bg-white hover:text-dark ${
                      link.heading?.toLowerCase() === servicesTypes
                        ? "bg-white text-dark"
                        : "bg-dark text-white"
                    }`}
                  >
                    <h2 className="font-semibold uppercase text-sm">
                      {link.heading}
                    </h2>
                  </div>
                ))}
              </div>
              <div className="col-span-1 flex flex-col justify-center gap-10">
                {data.links.map(
                  (link) =>
                    link.heading?.toLowerCase() === servicesTypes &&
                    link.subLinks?.map((sub) => (
                      <div key={sub.href} className={`${sub.href}`}>
                        <Link
                          href={`/${data.name}/${sub.href}`}
                          onClick={() => {
                            toggleNav(!isNavVisible);
                          }}
                        >
                          <h2 className="font-semibold text-sm">
                            {sub.paragraph}
                          </h2>
                        </Link>
                      </div>
                    ))
                )}
              </div>
              <div className="col-span-1 flex justify-end">
                <Image src='/global/Applicationcard.svg'  width={500} height={300} alt="" />
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default DesktopDropdown;
