import * as S from "./style";
import { FiBriefcase } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { COLORS } from "../../styles/colors";
import { useMedia } from "../../hooks/useMedia";
import { Activity, useCallback, useState } from "react";
import { ButtonMobile } from "./ButtonMobile";
import { MenuMobile } from "./MenuMobile";

export function Header() {
  const { mobile } = useMedia("(max-width:767px)");
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive]);

  return (
    <S.Header mobile={Boolean(mobile)}>
      <S.WrapperHeader>
        <S.Logo to={"/"}>
          <FiBriefcase color={COLORS.blue_primary} size={20} />
          NexusTalent
        </S.Logo>
        <Activity mode={mobile ? "hidden" : "visible"}>
          <S.WrapperInput>
            <CiSearch size={20} color={COLORS.font_secondary} />
            <S.Input
              type="text"
              placeholder="Buscar vagas por título, empresa ou tecnologia..."
            />
          </S.WrapperInput>
          <S.WrapperLinks>
            <S.Link to={"/login"} isColor={COLORS.green_primary}>
              Entrar
            </S.Link>
            <S.Link to={"/register"}>Criar Conta</S.Link>
          </S.WrapperLinks>
        </Activity>
        {mobile && <ButtonMobile toggleMenu={toggleMenu} isActive={isActive} />}
      </S.WrapperHeader>
      {mobile && isActive && <MenuMobile />}
    </S.Header>
  );
}
