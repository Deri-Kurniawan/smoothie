import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Button from "../components/ui/button";
import { useSmoothie } from "../hooks/use-smoothie";
import { getRandomValue } from "../lib/utils";

const ButtonMotion = motion(Button);

export default function Home() {
  const [transitioning, setTransitioning] = useState(false);
  const { smoothies, smoothie, setSmoothie } = useSmoothie();

  const handleNextSmoothie = () => {
    if (transitioning) return;

    const nextIndex =
      (smoothies.findIndex((s) => s.id === smoothie.id) + 1) % smoothies.length;

    setTransitioning(true);

    const timout = setTimeout(() => {
      setSmoothie(smoothies[nextIndex]);
      setTransitioning(false);
      clearTimeout(timout);
    }, 250);
  };

  const PuddleElement = () => (
    <svg
      width="1721"
      height="1402"
      viewBox="0 0 1721 1402"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1608.57 282.023C1706.57 358.573 1740.63 516.994 1708.67 637.167C1674.54 765.442 1505.4 808.927 1437.99 923.272C1386.11 1011.28 1425.51 1134.52 1366.36 1217.82C1306.49 1302.12 1210.71 1364.22 1109.57 1385.74C1010.19 1406.88 913.857 1333.32 812.282 1335.68C704.682 1338.19 606.041 1414.88 499.454 1399.94C386.69 1384.14 281.927 1325.24 196.967 1249.43C108.131 1170.16 13.5702 1073.77 1.20351 955.355C-11.4321 834.365 99.0274 735.923 131.083 618.574C158.601 517.839 107.138 389.82 176.913 312.127C250.319 230.392 390.968 268.193 489.461 219.529C571.741 178.875 618.952 86.3744 703.937 51.7286C794.631 14.755 900.359 -19.5219 992.168 14.5891C1085.33 49.2021 1099.57 193.042 1190.74 232.598C1320.82 289.035 1496.83 194.736 1608.57 282.023Z"
        className={smoothie.fillColor}
        fill="#DD2D50"
        fillOpacity="0.05"
      />
    </svg>
  );

  return (
    <div className="relative mb-20 container">
      <motion.div
        initial={{ x: -100, y: -100, scale: 0.8, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute -top-[130%] -left-[62%] -z-[1]"
      >
        <PuddleElement />
      </motion.div>

      <div className="grid grid-cols-2">
        <div className="pt-14">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-9xl text-accent font-bold font-poiret-one relative flex justify-start items-center"
            aria-label="Smoothies"
          >
            SM
            {/* fruit shape with leaves */}
            <span
              className={`${smoothie.color} relative flex justify-start items-center w-[162px]`}
            >
              <motion.span
                initial={{ translateX: 34.5 }}
                animate={{ translateX: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative block"
              >
                O
              </motion.span>
              <motion.span
                initial={{ translateX: -34.5 }}
                animate={{ translateX: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute left-[40%]"
              >
                O
              </motion.span>

              <motion.span
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -top-[40%] left-[22%]"
              >
                <IconLeafLeft />
              </motion.span>

              <motion.span
                initial={{ scale: 1.3 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -top-[35%] right-[22%]"
              >
                <IconLeafRight />
              </motion.span>
            </span>
            THIES
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-montserrat font-medium text-sm leading-[21px] tracking-[4%] text-accent/70 mt-4 max-w-[453px]"
          >
            Smoothies are so healthy, refreshing and the perfect way to pack
            some extra fruit and veggies into your diet.
          </motion.p>
          <ButtonMotion
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className={`mt-[50px] ${smoothie.bgColor}`}
          >
            Order Now
          </ButtonMotion>

          <div className="absolute flex justify-between items-center top-[65%] left-[16%] gap-[10px]">
            <h2 className="font-bold text-[33.6px] leading-[125%] tracking-[4%] relative -rotate-90 text-accent">
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                Benefits
              </motion.span>

              {/* red stick */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="w-full h-full flex justify-center items-center relative"
              >
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "80%" }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className={`w-[80%] h-[2px] ${smoothie.bgColor} rounded-full absolute -bottom-8`}
                />
              </motion.div>
            </h2>

            {/* benefit list */}
            <ul className="flex flex-col gap-[10px]">
              {smoothie.benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                  className={`font-montserrat font-semibold text-[15px] leading-[130%] tracking-[2%] ${smoothie.color}`}
                >
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          {/* smoothie fruit base */}
          <div className="absolute bottom-0 right-8 rotate-[2.98] -z-[1]">
            {smoothie.imageFruitBase !== "" && (
              <AnimatePresence mode="wait">
                <motion.img
                  initial={{ scale: 0, translateX: -100, opacity: 0 }}
                  animate={{ scale: 1, translateX: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="w-[338.6px] h-[338.6px]"
                  src={smoothie.imageFruitBase}
                  height={338.6}
                  width={338.6}
                  alt=""
                />
              </AnimatePresence>
            )}
          </div>

          {/* smoothie image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={smoothie.id}
              initial={{
                scale: 0.8,
                opacity: 0,
                rotate: getRandomValue(90),
              }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{
                scale: 0.8,
                opacity: 0,
                rotate: getRandomValue(90),
              }}
              transition={{ duration: 0.5 }}
              className="w-[511px] h-[511px] transition-all duration-300 ease-in-out z-[2] object-cover"
              src={smoothie.image}
              height={511}
              width={511}
              alt={smoothie.name}
            />
          </AnimatePresence>

          {/* smoothie indicator */}
          <motion.div
            className="font-rajdhani font-medium text-[264px] leading-[130%] tracking-[0] absolute bottom-0 -left-[15%] z-[1] text-accent/[0.07]"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <span>0</span>
            <span className="text-[232px]">{smoothie.id}</span>
          </motion.div>

          {/* next smoothie */}
          <ButtonMotion
            className={`absolute -bottom-8 -left-8 min-h-[61px] min-w-[136px] z-[2] ${smoothie.bgColor}`}
            onClick={handleNextSmoothie}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            aria-label="Next Smoothie"
          >
            <span className="absolute bottom-0 left-[40%] w-[100%] h-[100%] flex justify-center items-center">
              <IconArrowRight />
            </span>
          </ButtonMotion>
        </div>
      </div>
    </div>
  );
}

const IconLeafLeft = () => (
  <svg
    width="46"
    height="55"
    viewBox="0 0 46 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.8967 23.4846C23.8811 30.8055 35.2712 45.6222 36.9538 53.9967C37.4267 56.3503 19.3114 55.4114 8.9569 41.8039C0.552906 30.7597 -0.576204 7.80358 0.207731 0C52.7021 6.96732 47.4526 53.9967 43.953 47.0294C41.2476 41.6432 27.4309 29.317 20.1879 23.254C20.0218 23.115 19.7932 23.2944 19.8967 23.4846Z"
      fill="#0FA44D"
    />
  </svg>
);

const IconLeafRight = () => (
  <svg
    width="35"
    height="45"
    viewBox="0 0 35 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.7697 19.3941C16.659 25.4437 8.15057 37.395 6.88298 44.1791C6.52318 46.1048 20.3066 45.3366 28.185 34.2032C34.5793 25.167 35.4384 6.38475 34.8419 0C-5.09945 5.70053 -1.10527 44.1791 1.55749 38.4786C3.59583 34.1148 13.9236 24.1836 19.4764 19.1732C19.6378 19.0275 19.8691 19.2007 19.7697 19.3941Z"
      fill="#0FA44D"
    />
  </svg>
);

const IconArrowRight = () => (
  <svg
    width="87"
    height="29"
    viewBox="0 0 87 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 14.2261H85.9999"
      stroke="#020202"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M72.7778 1L86 14.2222L72.7778 27.4444"
      stroke="#020202"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
