import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <h1 className="font-bold text-center sm:text-left text-3xl sm:text-4xl">Insuring Dreams: <span className="text-red-500 text-[40px] sm:text-[50px]">Ramesh Gupta -</span> Your Dedicated LIC Agent</h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Your trusted LIC Insurance agent, securing your future with personalized solutions. Let's safeguard your dreams together.
        </p>

        <Button label='Chat now' iconURL={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div className="flex flex-col m-auto" key={index}>
              <p className='text-3xl sm:text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src="https://cdn.leverageedu.com/blog/wp-content/uploads/2020/04/07193645/LIC-Agent-Exam.png"
          alt='shoe colletion'
          width={610}
          height={502}
          className='rounded-2xl object-contain relative z-10'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
              // changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
              // bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;