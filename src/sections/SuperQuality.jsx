import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-[38px] text-center sm:text-left sm:text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Insurance
        </h2>
        <div className="w-70 mx-auto sm:w-auto sm:mx-[0px]">
          <p className='mt-4 lg:max-w-lg info-text'>
            At Ramesh LIC Insurance Services, we understand that life is full of uncertainties, and securing your future and the future of your loved ones is a priority. As your dedicated LIC insurance agent, we are here to guide you through the intricacies of insurance and help you make informed decisions that safeguard your dreams.
          </p>
          <p className='mt-6 lg:max-w-lg info-text'>
            Our dedication to detail and excellence ensures your satisfaction
          </p>
        </div>
        <div className='mt-10 mx-auto sm:mx-1'>
          <Button label='Chat with Us' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={"https://5.imimg.com/data5/VO/DH/MY-53890253/life-insurance-agency-500x500.png"}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
