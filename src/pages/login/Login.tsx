import { Input } from "../../components/input/Input";
import * as S from "./styles";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <S.Section>
      <S.WrapperForm>
        <h1>Entrar</h1>
        <p className="first-p">Acesse sua conta na plataforma</p>
        <S.Form onSubmit={() => {}}>
          <Input
            type="email"
            id="email"
            label="Email"
            placeholder="seu@email.com"
            required
          />
          <Input
            type="password"
            id="password"
            label="Password"
            placeholder="••••••••"
            required
            value={""}
          />

          <button>Entrar</button>
          <p>
            Não tem conta? <Link to={"/register"}>Criar conta</Link>
          </p>
        </S.Form>
      </S.WrapperForm>
    </S.Section>
  );
}
