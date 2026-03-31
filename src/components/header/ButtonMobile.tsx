import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import * as S from "./style";
import { COLORS } from "../../styles/colors";

type ButtonProps = {
  isActive: boolean;
  toggleMenu: () => void;
};

export function ButtonMobile({ toggleMenu, isActive }: ButtonProps) {
  return (
    <S.ButtonMobile
      onClick={toggleMenu}
      aria-expanded={isActive}
      aria-label={isActive ? "Fechar menu" : "Abrir menu"}
    >
      <div
        style={{
          transform: `rotate(${isActive ? 90 : 0}deg)`,
          transition: "0.3s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isActive ? (
          <IoMdClose size={20} color={COLORS.white_secondary} />
        ) : (
          <GiHamburgerMenu size={20} color={COLORS.white_secondary} />
        )}
      </div>
    </S.ButtonMobile>
  );
}
