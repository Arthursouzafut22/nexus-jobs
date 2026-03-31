import { Link } from "react-router-dom";
import { Input } from "../../components/input/Input";
import * as S from "./styles";
import { useForm } from "react-hook-form";
import type { FormRegister } from "./types/types";

export default function Register() {
  const { register } = useForm<FormRegister>({
    defaultValues: {
      role: "candidate",
    },
  });

  return (
    <S.Section>
      <S.WrapperForm>
        <h1>Criar Conta</h1>
        <p className="first-p">Junte-se à plataforma</p>
        <S.Form onSubmit={() => {}}>
          <Input
            type="text"
            id="name"
            label="Nome completo"
            placeholder="Seu nome"
          />
          <Input
            type="email"
            id="email"
            label="Email"
            placeholder="seu@email.com"
          />
          <Input
            type="password"
            id="password"
            label="Password"
            placeholder="Mínino 8 caracteres"
            value={""}
          />
          <S.WrapperGlobal>
            <p>Tipo de conta</p>
            <S.WrapperInputsRadio>
              <label htmlFor="candidato">
                <input
                  type="radio"
                  id="candidato"
                  value={"Candidato"}
                  defaultChecked
                  {...register("role", { required: true })}
                />
                Candidato
              </label>
              <label htmlFor="recrutador">
                <input
                  type="radio"
                  id="recrutador"
                  value={"Recrutador"}
                  {...register("role", { required: true })}
                />
                Recrutador
              </label>
            </S.WrapperInputsRadio>
          </S.WrapperGlobal>
          <button>Criar Conta</button>
          <p>
            Já tem conta? <Link to={"/login"}>Entrar</Link>
          </p>
        </S.Form>
      </S.WrapperForm>
    </S.Section>
  );
}
