import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const useScrollGrow = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  // https://www.framer.com/motion/use-scroll/
  // useScroll gives scrollX,scrollY, scrollYProgress, scrollXProgress
  //   Element position : We can track the progres of an element within the container by passing its ref to the target option.
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "end end"]
  // })
  // offset is an array of at least two intersections.
  // An intersection describes a point when the target and container meet. So for example, "start end" means when the start of the target meets the end of the container.

  const { scrollYProgress } = useScroll({
    // scrollYProgress returns 0 to 1 represenr=ting the whole

    target: componentRef,
    offset: ["0 1", "1.2 1"],
    // ["targetelement      viewport", "targetelement    viewport"]
    //  [ kokhon shuru hobe          ,         kokhon sesh hobe]
    // target er uporer ongsho ta ke denote kora hoyeche 0 diye
    // overall viewport ta denote kora hocche 1 diye
    // orthat jokhon amar target er uporer ongsho ta, amar viewport er nicher ongsher sathe meet korbe, tokhon animation ta apply koro.
    // 0-> top
    // 1-> whole jinish
    // 2-> double
  });
  const scaleValues = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityValues = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  const style = {
    scale: scaleValues,
    opacity: opacityValues,
  };

  return { componentRef, style };
};

export default useScrollGrow;
