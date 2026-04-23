import { Loader } from "lucide-react";
import { DivContainerCenter } from "./DivContainer";

const Loading = ({ size = "size-6", children = "cargando" }) => {
  return (
    <DivContainerCenter className="text-mist-200">
      <Loader className={`animate-spin [animation-duration:1.5s] ${size}`} />
      <p>{children}</p>
    </DivContainerCenter>
  );
};

export default Loading;
