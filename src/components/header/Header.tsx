import * as S from "./style";
import { FiBriefcase } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { COLORS } from "../../styles/colors";

export function Header() {
  return (
    <S.Header>
      <S.WrapperHeader>
        <S.Logo to={"/"}>
          <FiBriefcase color={COLORS.blue_primary} size={20} />
          NexusTalent
        </S.Logo>
        <S.WrapperInput>
          <CiSearch size={20} color={COLORS.font_secondary}/>
          <input
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
      </S.WrapperHeader>
    </S.Header>
  );
}
