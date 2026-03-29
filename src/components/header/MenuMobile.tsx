import { useMedia } from "../../hooks/useMedia";
import { COLORS } from "../../styles/colors";
import * as S from "./style";
import { CiSearch } from "react-icons/ci";

export function MenuMobile() {
  const { mobile } = useMedia("(max-width:767px)");

  return (
    <S.WrapperMenuMobile>
      <S.WrapperInput mobile={Boolean(mobile)}>
        <CiSearch size={20} color={COLORS.font_secondary} />
        <S.Input
          type="text"
          placeholder="Buscar vagas por título, empresa ou tecnologia..."
        />
      </S.WrapperInput>
      <S.Link to={"/login"} isColor={COLORS.green_primary} mobile={mobile}>
        Entrar
      </S.Link>
      <S.Link to={"/register"} mobile={mobile}>
        Criar Conta
      </S.Link>
    </S.WrapperMenuMobile>
  );
}
