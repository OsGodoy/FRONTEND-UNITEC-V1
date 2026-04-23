import { Link } from "react-router-dom";
import FadeLeft from "../components/animations/FadeLeft";
import FadeRight from "../components/animations/FadeRight";
import FadeUp from "../components/animations/FadeUp";
import { ButtonBgEmerald } from "../components/atoms/Buttons";
import {
  DivContainerCenter,
  DivContainerModal,
  DivContainerStart,
} from "../components/atoms/DivContainer";
import HeroSection from "../components/organisms/HeroSection";

const HomePage = () => {
  return (
    <DivContainerCenter className="justify-start h-full">
      <HeroSection />
      <DivContainerCenter className="w-full grow max-w-120 sm:max-w-160 md:max-w-180 px-2 md:px-8 gap-2 sm:gap-6 text-center mt-1">
        <FadeUp delay={0.3} className="w-full">
          <DivContainerModal className="border border-emerald-500 text-mist-400 max-w-60 sm:max-w-80 md:max-w-80 lg:max-w-100 p-2 rounded-br-3xl sm:text-xl lg:text-2xl">
            <p>
              Podrás cambiar entre el rol de{" "}
              <span className="text-emerald-500">Maestro</span> y{" "}
              <span className="text-emerald-500">Estudiante</span> para ver el
              dashboard de cada uno...
            </p>
          </DivContainerModal>
        </FadeUp>
        <FadeUp delay={0.4} className="w-full flex items-center justify-end">
          <DivContainerModal className="border border-emerald-500 text-mist-400 max-w-80 sm:max-w-100 lg:max-w-120 p-2 rounded-bl-3xl sm:text-xl lg:text-2xl">
            <p>
              Desde el dashboard de{" "}
              <span className="text-emerald-500">Maestro</span> podrás
              actualizar las notas del alumno. Mientras que desde el dashboard
              de <span className="text-emerald-500">Estudiante</span> podrás ver
              tus notas y más...
            </p>
          </DivContainerModal>
        </FadeUp>
        <FadeLeft delay={0.5}>
          <Link to="/dashboard">
            <ButtonBgEmerald textColor="text-mist-200" className="px-4 text-lg">
              Comenzar
            </ButtonBgEmerald>
          </Link>
        </FadeLeft>
      </DivContainerCenter>
    </DivContainerCenter>
  );
};

export default HomePage;
