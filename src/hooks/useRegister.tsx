import { toast } from "react-toastify";
import { registerUser } from "../services/registerService";
import type { FormRegister } from "../pages/register/types/types";
import { useNavigate } from "react-router-dom";

export function useRegister() {
  const navigate = useNavigate();
  async function onsubmit(data: FormRegister) {
    try {
      const user = await registerUser(data);

      if (user.success) {
        toast.success(user.message);
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  }

  return { onsubmit };
}
