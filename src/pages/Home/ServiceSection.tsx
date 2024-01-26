import BatteryReplacement from "@/components/serviceTiles/BatteryReplacement";
import Container from "@/components/ui/Container";
const ServiceSection = () => {
  return (
    <Container className=" my-40">
      <div className="flex flex-col text-center justify-center items-center gap-7 mb-10">
        <h1>
          <span className="text-primary">Services</span> that we provide.
        </h1>
        <p className="max-w-[78ch]">
          We provide various computer repair services and solutions for our new
          and regular customers. Feel free to find out more below.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-4 place-content-center">
        <BatteryReplacement />
        <div className="bg-light-gray rounded-3xl h-[413px] col-span-12 md:col-span-6"></div>
        <div className="bg-light-gray rounded-3xl h-[413px] col-span-12 md:col-span-6"></div>
        <div className="bg-light-gray rounded-2xl h-[448px] col-span-12"></div>
        <div className="bg-light-gray rounded-3xl h-[413px] col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="bg-light-gray rounded-3xl h-[413px] col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="bg-light-gray rounded-3xl h-[413px] col-span-12 md:col-span-6 lg:col-span-4"></div>
      </div>
    </Container>
  );
};

export default ServiceSection;
