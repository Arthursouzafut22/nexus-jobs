import { Link } from "react-router-dom";
import { Input } from "../../components/input/Input";
import * as S from "./styles";
import { useForm } from "react-hook-form";
import type { FormRegister } from "./types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaRegister } from "../../schemas/registerSchema";
import Toast from "../../components/toast/Toast";
import { Loading } from "../../components/loading/Loading";
import { useRegister } from "../../hooks/useRegister";

export default function Register() {
  const { onsubmit } = useRegister();

  const { register,handleSubmit,formState: { isSubmitting }} = useForm<FormRegister>({
    resolver: yupResolver(SchemaRegister),
    defaultValues: {
      role: "candidate",
    },
  });

  return (
    <S.Section>
      <S.WrapperForm>
        <h1>Criar Conta</h1>
        <p className="first-p">Junte-se à plataforma</p>
        <S.Form onSubmit={handleSubmit(onsubmit)}>
          <Input
            type="text"
            id="name"
            label="Nome completo"
            placeholder="Seu nome"
            required
            {...register("name", { required: true })}
          />
          <Input
            type="email"
            id="email"
            label="Email"
            placeholder="seu@email.com"
            {...register("email", { required: true })}
          />
          <Input
            type="password"
            id="password"
            label="Password"
            placeholder="Mínino 8 caracteres"
            autoComplete="new-password"
            {...register("password", { required: true, minLength: 8 })}
          />
          <S.WrapperGlobal>
            <p>Tipo de conta</p>
            <S.WrapperInputsRadio>
              <label htmlFor="candidato">
                <input
                  type="radio"
                  id="candidato"
                  value={"Candidate".toUpperCase()}
                  defaultChecked
                  {...register("role", { required: true })}
                />
                Candidato
              </label>
              <label htmlFor="recrutador">
                <input
                  type="radio"
                  id="recrutador"
                  value={"Recruiter".toUpperCase()}
                  {...register("role", { required: true })}
                />
                Recrutador
              </label>
            </S.WrapperInputsRadio>
          </S.WrapperGlobal>
          <button disabled={isSubmitting}>
            {isSubmitting ? <Loading /> : "Criar Conta"}
          </button>
          <p>
            Já tem conta? <Link to={"/login"}>Entrar</Link>
          </p>
        </S.Form>
      </S.WrapperForm>
      <Toast />
    </S.Section>
  );
}
