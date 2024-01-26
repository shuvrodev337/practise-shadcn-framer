import useScrollGrow from "@/hooks/useScrollGrow";
import { motion } from "framer-motion";

const BatteryReplacement = () => {
  const { componentRef, style } = useScrollGrow();
  return (
    <motion.div
      ref={componentRef}
      style={style}
      className="bg-red-500 rounded-2xl h-[448px] col-span-12"
    ></motion.div>
  );
};

export default BatteryReplacement;
