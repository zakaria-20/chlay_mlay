
interface ComponentTypes {
  tag: string;
  title: string;
  paragraph: string;
  signature: string;
}

const Text_Component: React.FC<ComponentTypes> = ({
  tag,
  title,
  paragraph,
  signature,
}) => {
  return (
      <div className="w-full 
      lg:flex lg:flex-row lg:items-center lg:justify-between lg:pr-[200px]
      md:flex md:flex-row md:items-center md:justify-between md:pr-[128px]
      sm:flex sm:flex-col sm:items-center sm:justify-between

      ">
        <div className="
        lg:w-[640px]
        md:w-[410px]
        ">
          <p className="
          lg:text-[18px] lg:font-semibold lg:text-[#CCD0CF] lg:font-source lg:tracking-[0.06em] lg:leading-[20px]
          md:text-[16px] md:font-semibold md:text-[#CCD0CF] md:font-source md:tracking-[0.06em] md:leading-[20px]
          sm:text-[10px] sm:font-semibold sm:text-[#CCD0CF] sm:font-source sm:tracking-[0.06em] sm:leading-[20px]
          ">
            {tag}
          </p>
          <h2 className="
          lg:text-[24px] lg:font-bold lg:text-white lg:font-libre lg:tracking-[0.06em] lg:leading-[20px] lg:mt-[7px]
          md:text-[18px] md:font-bold md:text-white md:font-libre md:tracking-[0.06em] md:leading-[20px] md:mt-[7px]
          sm:text-[15px] sm:font-bold sm:text-white sm:font-libre sm:tracking-[0.06em] sm:leading-[20px] sm:mt-[5px]
          ">
            {title}
          </h2>
          <p className="
          lg:text-[18px] lg:font-normal lg:text-[#CCD0CF] lg:font-libre lg:tracking-[0.026em] lg:leading-[24px] lg:mt-[20px]
          md:text-[16px] md:font-normal md:text-[#CCD0CF] md:font-libre md:tracking-[0.026em] md:leading-[24px] md:mt-[20px]
          sm:text-[14px] sm:font-normal sm:text-[#CCD0CF] sm:font-rubik sm:tracking-[0.02em] sm:leading-[18px] sm:mt-[10px]
          
          ">
            {paragraph}
          </p>
          <a href="#" className="
          block
          text-[#69818D]
          lg:text-[16px] lg:font-bold lg:font-libre lg:tracking-[0.026em] lg:leading-[24px] lg:mt-[10px]
          md:text-[14px] md:font-bold md:font-libre md:tracking-[0.026em] md:leading-[24px] md:mt-[10px]
          sm:text-[12px] sm:font-bold sm:font-rubik sm:tracking-[0.026em] sm:leading-[24px] sm:mt-[9px]
           
          ">
            {signature}</a >
        </div>

        <div className="
        lg:block
        md:block
        sm:hidden
        ">
          <div className="rounded-3xl shadow-lg overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="
              text-[#2C4A52]
              lg:w-[123px] lg:h-[95px]
              md:w-[78px] md:h-[65px]
              "
              viewBox="0 0 67.541 75.071"
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
        </div>
      </div>
  );
};

export default Text_Component;
