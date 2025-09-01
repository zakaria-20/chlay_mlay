import React from "react";
// import Text_Component from "../component/Text_component";

interface TextBlock {
  tag: string;
  title: string;
  paragraph: string;
  signature: string;
}

const contentData: TextBlock[] = [
  {
    tag: "Overview",
    title: "eaneer Enterprise Profile",
    paragraph:
      "Explore the comprehensive overview of eaneer's vision, mission, and core values. Learn about our innovative solutions and how we are leading the way in electrical, agricultural, industrial, and renewable energy sectors. Discover what makes Eaneer a trusted partner for clients worldwide.",
    signature: "Download now",
  },
  {
    tag: "Financial Insights",
    title: "eaneer Enterprise Profile",
    paragraph:
      "Stay informed with the latest updates and financial insights about Eaneer. Our Investor Relations section provides detailed information on our financial performance, strategic initiatives, and future growth prospects. Empower your investment decisions with accurate and timely data from Eaneer.",
    signature: "Download now",
  },
  {
    tag: "Strategic Direction",
    title: "eaneer Business Presentation",
    paragraph:
      "Gain insights into Eaneer's business model, market strategy, and unique value proposition. Our Business Presentation highlights key aspects of our operations, showcasing how we deliver exceptional value to our clients and stakeholders. Discover the strategic direction that drives our success.",
    signature: "Download now",
  },
];

const Section7 = () => {
  return (
    // <section
    //   className="
    // w-full
    // max-w-full
    // sm:max-w-[318px]
    // md:max-w-[820px]
    // lg:max-w-[1280px]
    // md:px-0
    // mx-auto
    // "
    // >
    //   <div className="flex flex-col lg:px-0">
    //     {contentData.map((item, index) => (
    //       <React.Fragment key={index}>
    //         <hr
    //           className="border-[#707070] w-full 
    //       lg:mb-[52px] lg:mt-[28px]
    //       md:mb-[35px] md:mt-[18px]
    //       sm:mb-[15px] sm:mt-[38px]"
    //         />
    //         <Text_Component
    //           tag={item.tag}
    //           title={item.title}
    //           paragraph={item.paragraph}
    //           signature={item.signature}
    //         />
    //       </React.Fragment>
    //     ))}

    //     {/* Final HR at the bottom */}
    //     <hr
    //       className="border-[#707070] w-full 
    //   lg:mt-[28px]
    //   md:mt-[18px]
    //   sm:mt-[38px]"
    //     />
    //   </div>
    // </section>
    <div>
      <h1>mal had l9lawi</h1>
    </div>
  );
};

export default Section7;
