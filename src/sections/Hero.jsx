import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { Button } from "../components";
import { ShoeCard } from "../components";
import { shoes, statistics } from "../constants";

import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col min-h-screen justify-center gap-10 max-container xl:pt-12"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-center xl:items-start text-center xl:!text-left w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label="Shop Now" iconUrl={arrowRight} />

        <div className="flex justify-center xl:justify-start items-center xl:items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, i) => (
            <div key={`stat-${i}`}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:overflow-visible  max-xl:py-20">
        <div className="flex justify-center max-h-[750px] w-full overflow-hidden xl:min-h-screen items-center">
          <img
            src={bigShoeImg}
            alt="shoe collection"
            className="object-contain relative mt-0 sm:-mt-[180px] xl:mt-0 -z-10 w-full xl:w-auto xl:!max-h-lg"
          />
        </div>

        <div className="flex sm:gap-6 gap-4 absolute bottom-5 sm:bottom-0 xl:-bottom-[5%] lg:left-[20%] xl:left-[10%] max-sm:px-6">
          {shoes.map((shoe, i) => (
            <div key={`shoeImg-${i}`}>
              <ShoeCard
                imgUrl={shoe}
                changeBigShoeImg={(shoe) => {
                  setBigShoeImg(shoe);
                }}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
