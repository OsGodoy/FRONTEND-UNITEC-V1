import { Cpu } from "lucide-react";
import heroImg from "../../assets/images/hero.webp";
import { DivContainerCenter, DivContainerStart } from "../atoms/DivContainer";
import FadeUp from "../animations/FadeUp";

const HeroSection = () => {
  return (
    <DivContainerCenter className="relative h-1/2 max-h-100 lg:max-h-120 bg-neutral-900">
      <img
        src={heroImg}
        alt="Hero"
        className="scale-x-[-1] w-full h-full object-cover object-top lg:object-[50%_20%] opacity-0 transition-opacity duration-300"
        onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
        loading="eager"
      />
      <div className="absolute  h-full w-full bg-linear-to-t from-mist-900 to-mist-950/10" />
      <DivContainerCenter className="w-full relative">
        <FadeUp delay={0.2} className="w-full max-w-360 absolute bottom-0">
          <DivContainerStart className="max-w-80 sm:max-w-110 lg:max-w-160 p-4 sm:p-10 text-mist-200 text-xl sm:text-4xl lg:text-6xl">
            <h2>Bienvenido</h2>
            <p className="text-lg sm:text-2xl lg:text-4xl">
              Esta es una simulación de la página web de una universidad
            </p>
          </DivContainerStart>
        </FadeUp>
      </DivContainerCenter>
    </DivContainerCenter>
  );
};

export default HeroSection;
