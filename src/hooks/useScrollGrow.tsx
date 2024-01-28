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
    // scrollYProgress returns 0 to 1 representing the whole target and viewport

    target: componentRef,
    offset: ["0 1", "1.2 1"],
    // ["targetelement      viewport", "targetelement    viewport"]
    //  [ kokhon shuru hobe          ,         kokhon sesh hobe]
    // target er uporer ongsho ta ke denote kora hoyeche 0 diye
    // overall viewport ta denote kora hocche 1 diye
    // orthat jokhon amar target er uporer ongsho ta, amar viewport er nicher ongsher sathe meet korbe, tokhon animation ta apply koro.
    // 0-> kono akta jinisher shuru theke
    // 1-> mane whole jinish ta
    // 2-> double
  });
  const scaleValues = useTransform(scrollYProgress, [0, 1], [0.9, 1]); //scale er style
  // parameters ( motion Value, motion value ta(scrollYProgress) koto theke koto porjonto jabe, setake transform kore koto theke scale up hobe[0.9, 1] bole dicchi)
  const opacityValues = useTransform(scrollYProgress, [0, 1], [0.1, 1]); //opacity er style
  // parameters ( motion Value, motion value ta(scrollYProgress) koto theke koto porjonto jabe, setake transform kore koto theke opacity up hobe[0.1, 1] bole dicchi)
  const style = {
    scale: scaleValues,
    opacity: opacityValues,
  };

  return { componentRef, style };
};

export default useScrollGrow;
