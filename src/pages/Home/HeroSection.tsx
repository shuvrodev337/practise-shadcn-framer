import Container from "@/components/ui/Container";
import macbook from "@/assets/macbook-exposed.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  const introParent = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delayChildren: 1,
        staggerChildren: 0.25,
      },
    },
  };
  const introChild = {
    hidden: { y: -200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.5, type: "spring", bounce: 0.3 },
    },
  };

  const macbookAnimation = {
    initial: { y: 0, scale: 5 },
    animate: {
      y: 20,
      scale: 1,
      rotate: -35,
      transition: {
        duration: 1,
        y: {
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };
  return (
    <div className="overflow-hidden">
      <Container className="h-screen grid grid-cols-1 lg:grid-cols-2 place-content-center pt-16">
        <motion.div
          variants={introParent}
          initial={"hidden"}
          animate={"visible"}
        >
          <motion.h1
            className="text-5xl  md:text-8xl font-bold text-nowrap"
            variants={introChild}
          >
            <span className="text-gray">Don't worry.</span>
            <br />
            <span>We'll fix it.</span>
          </motion.h1>
          <motion.p
            className="text-dark-gray max-w-[40ch] mt-10 mb-5"
            variants={introChild}
          >
            Welcome to{" "}
            <span className="text-primary-foreground font-semibold ">
              iRepair
            </span>
            , your one-stop place for all kinds of{" "}
            <span className="text-primary-foreground font-semibold">
              Macbook repairs
            </span>{" "}
            and diagnostics.
          </motion.p>
          <motion.div variants={introChild}>
            <Button>Book A Service</Button>
          </motion.div>
        </motion.div>
        <motion.div
          variants={macbookAnimation}
          initial={"initial"}
          animate={"animate"}
          className="w-3/4 mx-auto lg:w-full mt-10 "
        >
          <img className=" h-[95%] object-contain" src={macbook} alt="" />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
