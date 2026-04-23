import { Cpu, ShieldPlus } from "lucide-react";
import { DivContainerCenter, DivContainerStart } from "../atoms/DivContainer";
import { Link } from "react-router-dom";
import FadeDown from "../animations/FadeDown";

const Header = () => {
  return (
    <div className="sticky top-0 w-full p-2 flex items-center justify-center bg-mist-500 z-40">
      <DivContainerCenter className="flex-row max-w-260 gap-2 md:justify-start">
        <Link
          to="/"
          className="flex items-center text-3xl text-mist-200 font-semibold gap-1"
        >
          <Cpu className="size-7 stroke-2" />
          UNITEC
        </Link>
      </DivContainerCenter>
    </div>
  );
};

export default Header;
