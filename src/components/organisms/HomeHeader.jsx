import { Cpu, ShieldPlus } from "lucide-react";
import { DivContainerCenter, DivContainerStart } from "../atoms/DivContainer";
import { Link } from "react-router-dom";
import FadeDown from "../animations/FadeDown";

const HomeHeader = () => {
  return (
    <div className="sticky md:absolute top-0 w-full p-2 md:p-4 lg:p-10 flex items-center justify-center bg-mist-500 md:bg-transparent z-40">
      <DivContainerCenter className="flex-row max-w-360 gap-2 md:justify-start">
        <Link
          to="/"
          className="flex items-center text-3xl md:text-6xl text-mist-200 md:text-mist-700 font-semibold gap-1"
        >
          <Cpu className="size-7 md:size-14 stroke-2" />
          UNITEC
        </Link>
      </DivContainerCenter>
    </div>
  );
};

export default HomeHeader;
