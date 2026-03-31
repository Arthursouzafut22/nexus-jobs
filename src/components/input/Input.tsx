import type { ComponentPropsWithoutRef } from "react";
import * as S from "./styles";

type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<"input">;

export function Input({ id, label, ...rest }: InputProps) {
  return (
    <S.WrapperInput>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input {...rest} id={id} />
    </S.WrapperInput>
  );
}
