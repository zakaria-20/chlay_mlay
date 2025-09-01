import AboutUsComponent from "../components/Image&text";

interface AboutUsData {
  tag: string;
  title: string;
  paragraph: string;
  paragraph2: string;
  paragraph3?: string;
  paragraph4?: string;
  imgURL: string;
  order: 0 | 1;
}

const aboutUsContent: AboutUsData[] = [
  {
    tag: "Our Vision",
    title: "A Future Powered By Electrical Innovation",
    paragraph:
      "At eaneer, we envision a future where innovation and sustainability drive electrical engineering.",
    paragraph2:
      "We're dedicated to leveraging cutting-edge technologies in industrial, agricultural, and construction sectors to optimize energy consumption.",
    paragraph3:
      "With a strong focus on renewable energy, we're committed to creating a sustainable future for our customers and the planet.",
    paragraph4: "Join us in shaping a better world.",
    imgURL: "/Company/About_us/Groupe de masques 2.svg",
    order: 1,
  },
  {
    tag: "Our Mission",
    title: "Creating A Clean Environment Through Green Energy",
    paragraph:
      "At eaneer, our mission is to promote a cleaner environment through the adoption of renewable energies, including solar panel installations. We're committed to developing innovative solutions to save energy and optimize electrical and industrial systems.",
    paragraph2:
      "By prioritizing energy efficiency, we help our clients reduce their environmental footprint while achieving substantial savings on their energy costs. We firmly believe that every small step matters in building a more sustainable future, and our mission is to provide the tools and technologies needed to realize this vision.",
    paragraph3:
      "Join us in our commitment to creating a world where clean energy and environmental innovation are at the heart of every project we undertake.",
    imgURL: "/Company/About_us/Groupe de masques 3.svg",
    order: 0,
  },
];

const Section4 = () => {
  return (
    <section
      className="
     w-full
    max-w-full
    sm:max-w-[318px]
    md:max-w-[820px]
    lg:max-w-[1280px]
    md:px-0
    lg:px-0
    mx-auto
    lg:mt-[72.4px]
    "
    >
      {aboutUsContent.map((item, index) => (
        <AboutUsComponent
          key={index}
          tag={item.tag}
          title={item.title}
          paragraph={item.paragraph}
          paragraph2={item.paragraph2}
          paragraph3={item.paragraph3}
          paragraph4={item.paragraph4}
          imgURL={item.imgURL}
          order={item.order}
        />
      ))}
      <div
        className="
          mx-auto 
          w-full
          max-w-full
          sm:text-center
          sm:flex
          sm:justify-center
          sm:max-w-[318px]
          md:hidden 
          lg:hidden 
          sm:mb-[35.2px]
          "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 67.541 75.071"
          className="
          
          lg:w-[33.83px] lg:h-[37.6px] 
          md:h-[30.071px] md:w-[30.541px]
          sm:w-[19.62px] sm:h-[21.81px]"
        >
          <g
            id="Groupe_317"
            data-name="Groupe 317"
            transform="translate(-320 -919)"
          >
            <path
              id="Tracé_7"
              data-name="Tracé 7"
              d="M451.454,1188c2.153,3.66,5.181,4.478,8.768,4.449,12.987-.072,25.989-.043,38.991-.029,1.536,0,3.258-.316,4.033,1.636.761,1.923-.718,2.884-1.794,3.975-4.42,4.478-8.883,8.94-13.547,13.633-2.325-3.975-5.941-4.377-9.888-4.348-12.629.086-25.243.043-37.872.029-1.536,0-3.229.33-4.018-1.636-.732-1.822.574-2.755,1.593-3.789C442.2,1197.371,446.69,1192.822,451.454,1188Z"
              transform="translate(-115.914 -243.379)"
              fill="#fff"
            />
            <path
              id="Tracé_8"
              data-name="Tracé 8"
              d="M600.029,1022.641c0,3.243-.043,6.5.029,9.744.029,1.421-.2,2.181-1.923,2.167-6.587-.086-13.174-.043-19.775-.043-1.378,0-2.612-.273-3.186-1.722-.588-1.478.3-2.44,1.263-3.387,4.865-4.85,9.7-9.715,14.58-14.552,1.421-1.406,2.483-3.143,4.2-4.305,1.048-.717,1.909-1.464,3.215-.861,1.392.646,1.636,1.823,1.607,3.229C599.986,1016.14,600.029,1019.4,600.029,1022.641Z"
              transform="translate(-233.661 -90.461)"
              fill="#fff"
            />
            <path
              id="Tracé_9"
              data-name="Tracé 9"
              d="M604.452,1357.64h10.017a2.9,2.9,0,0,1,2.971,1.607c.689,1.406-.072,2.325-.933,3.186q-9.622,9.644-19.259,19.273a2.667,2.667,0,0,1-3.014.818,2.5,2.5,0,0,1-1.593-2.655c0-6.859.014-13.719-.043-20.579-.014-1.421.617-1.707,1.837-1.693,3.329.058,6.673.029,10.017.043Z"
              transform="translate(-251.274 -388.636)"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Section4;
