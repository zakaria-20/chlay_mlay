interface AboutUsProps {
  tag: string
  title: string;
  paragraph: string;
  paragraph2?: string;
  paragraph3?: string;
  paragraph4?: string;
  imgURL: string;
  order: 0 | 1;
}

const AboutUsComponent: React.FC<AboutUsProps> = ({
  tag,
  title,
  paragraph,
  paragraph2,
  paragraph3,
  paragraph4,
  imgURL,
  order,
}) => {
  if (order === 1) {
    return (
      <div
        className="
        lg:flex lg:flex-row lg:justify-between lg:items-center lg:mb-[260px]
        md:flex md:flex-row md:justify-between md:items-center md:px-[0px] md:mb-[60px]
        sm:flex sm:flex-col sm:justify-between sm:items-center sm:px-[0px]
        "
      >
        <div
          className="
          lg:w-[632px] lg:text-left 
          md:w-[405px] md:text-left 
          sm:w-full sm:h-full sm:text-left "
        >
          <p className="
           text-lightgray

          lg:text-[18px] lg:font-semibold lg:font-source lg:leading-[60px] lg:tracking-[0.02em] 
          md:text-[14px] md:font-semibold md:font-source md:leading-[60px] md:tracking-[0.02em] 
          sm:text-[10px] sm:font-semibold sm:font-source sm:leading-[60px] sm:tracking-[0.02em] 
          ">
            {tag}
          </p>
          <h2
            className="
            text-white
            lg:text-[56px] lg:font-inter lg:font-bold lg:leading-[60px] lg:tracking-[0.02em] lg:mt-0 lg:mb-[10px]
            md:text-[30px] md:font-rubik md:font-medium md:leading-[35px] md:tracking-[0.06em] md:mb-[10px] md:mt-0
            sm:text-[20px] sm:font-inter sm:font-semibold sm:leading-[25px] sm:tracking-[0.02em] sm:mt-[6px] sm:mb-[11px]
            "
          >
            {title}
          </h2>

          <div
            className="
          text-lightgray

            lg:text-[22px] lg:font-sem lg:font-rubik lg:font-normal lg:leading-[25px] lg:tracking-[0.06em]
            md:text-[18px] md:font-rubik md:font-normal md:leading-[20px] md:tracking-[0.06em]
            sm:text-[14px] sm:font-libre sm:font-normal sm:leading-[16px] sm:tracking-[0em]
            "
          >
            <p> {paragraph} </p>
            <p className="
            lg:my-[25px]
            md:my-[25px]
            sm:my-[18px]
            "> {paragraph2} </p>
            <p className="
            lg:mb-[25px]
            md:my-[25px]
            sm:my-[18px]

            "> {paragraph3} </p>
            <p> {paragraph4} </p>
          </div>
        </div>

        {/* Image/Card Column */}
        <div
          className="
          lg:w-[540px] lg:h-[398px] lg:mb-0 lg:mt-0
          md:w-[346px] md:h-[300px] md:mb-0 md:mt-0
          sm:w-full sm:h-[237px] sm:mb-[92px] sm:mt-[41px]
          "
        >
          <div
            className="
            lg:w-full lg:h-full
            md:w-full md:h-full
            sm:w-full sm:h-full            
            "
          >
            <img
              src={`${imgURL}`}
              alt="Solar panels and wind turbines"
              className="
                lg:w-full lg:h-full object-cover
                md:w-full md:h-full
                sm:w-full sm:h-full
                rounded-[20px]"
                
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="
        lg:flex lg:flex-row lg:justify-between lg:items-center lg:mb-0
        md:flex md:flex-row md:justify-between md:items-center md:px-[0px] md:mb-[60px] 
        sm:flex sm:flex-col-reverse sm:justify-between sm:items-center sm:px-[0px]  sm:mb-[57px]
        "
      >
        <div
          className="
          lg:w-[540px] lg:h-[550px] lg:mb-0
          md:w-[346px] md:h-[400px] md:mb-0
          sm:w-full sm:h-[237px] sm:mt-[41px]
          "
        >
          <div
            className="
            lg:w-full lg:h-full
            md:w-full md:h-full
            sm:w-full sm:h-full
            "
          >
            <img
              src={`${imgURL}`}
              alt="Solar panels and wind turbines"
              className="
                lg:w-full lg:h-full object-cover
                md:w-full md:h-full
                sm:w-full sm:h-full
                rounded-[20px]

                "
            />
          </div>
          
        </div>

        <div
          className="
          lg:w-[632px] lg:text-left
          md:w-[405px] md:text-left
          sm:w-full sm:h-full sm:text-left
          "
        >
          <p className="
          text-lightgray
          lg:text-[18px] lg:font-semibold lg:font-source lg:leading-[60px] lg:tracking-[0.02em]
          md:text-[14px] md:font-semibold md:font-source md:leading-[60px] md:tracking-[0.02em] 
          sm:text-[10px] sm:font-semibold sm:font-source sm:leading-[60px] sm:tracking-[0.02em] 

          ">
            {tag}
          </p>
          <h2
            className="
            text-white
            lg:text-[56px] lg:font-inter lg:font-bold lg:leading-[60px] lg:tracking-[0.02em] lg:mt-0 lg:mb-[10px]
            md:text-[30px] md:font-rubik md:font-medium md:leading-[35px] md:tracking-[0.06em]  md:mb-[10px] md:mt-0
            sm:text-[20px] sm:font-inter sm:font-semibold sm:leading-[25px] sm:tracking-[0.02em] sm:mt-[6px] sm:mb-[11px]
            "
          >
            {title}
          </h2>

          <div
            className="
          text-lightgray
            lg:text-[22px] lg:font-sem lg:font-rubik lg:font-normal lg:leading-[30px] lg:tracking-[0.06em]
            md:text-[12px] md:font-rubik md:font-normal md:leading-[20px] md:tracking-[0.06em]
            sm:text-[14px] sm:font-libre sm:font-normal sm:leading-[16px] sm:tracking-[0em]
            "
          >
            <p> {paragraph} </p>
            <p className="
            lg:my-[25px]
            md:my-[25px]
            sm:my-[18px]
            "> {paragraph2} </p>
            <p> {paragraph3} </p>
          </div>
        </div>
        
      </div>
    );
  }
};

export default AboutUsComponent;
