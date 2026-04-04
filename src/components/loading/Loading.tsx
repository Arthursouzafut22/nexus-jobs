import { COLORS } from "../../styles/colors";
import { BeatLoader } from "react-spinners";

export function Loading() {
  return <BeatLoader color={COLORS.white} size={10} />;
}
