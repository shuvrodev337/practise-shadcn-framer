import Container from "@/components/ui/Container";
import macbook from "@/assets/macbook-exposed.png";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <Container className="h-[calc(100vh-64px)] grid grid-cols-1 lg:grid-cols-2 place-content-center">
      <div>
        <h1 className="text-5xl  md:text-8xl font-bold text-nowrap">
          <span className="text-gray">Don't worry.</span>
          <br />
          <span>We'll fix it.</span>
        </h1>
        <p className="text-dark-gray max-w-[50ch] mt-10 mb-5">
          Welcome to{" "}
          <span className="text-primary-foreground font-semibold ">
            iRepair
          </span>
          , your one-stop place for all kinds of{" "}
          <span className="text-primary-foreground font-semibold">
            Macbook repairs
          </span>{" "}
          and diagnostics.
        </p>
        <Button>Book A Service</Button>
      </div>
      <div className="w-3/4 mx-auto lg:w-full mt-10 ">
        <img
          className="-rotate-[35deg] h-[90%] object-contain"
          src={macbook}
          alt=""
        />
      </div>
    </Container>
  );
};

export default HeroSection;
