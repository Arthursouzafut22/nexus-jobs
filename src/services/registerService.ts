import type { FormRegister } from "../pages/register/types/types";

// const URL_BASE = "http://localhost:3000";

export async function registerUser(data: FormRegister) {
  try {
    const result = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const payload = await result.json();

    if (!result.ok) {
      throw new Error(payload.message);
    }

    return payload;
  } catch (error) {
    console.error("Erro detalhado na captura:", error);
    throw error;
  }
}
