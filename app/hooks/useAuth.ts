"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import api from "@/services/api";

interface LoginData {
  email: string;
  password: string;
}

const useAuth = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { data: isAuthenticated } = useQuery({
    queryKey: ["auth"],
    queryFn: () => {
      const token = localStorage.getItem("token");
      return Boolean(token);
    },
    initialData: false,
  });

  const loginMutation = useMutation({
    mutationFn: async (data: LoginData) => {
      const response = await api.post("/users", data);
      return response.data;
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role); 
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });

  const logout = () => {
    localStorage.removeItem("token");
    queryClient.invalidateQueries({ queryKey: ["auth"] }); 
    router.push("/");
  };

  return {
    isAuthenticated,
    login: loginMutation.mutateAsync,
    isLoading: loginMutation.isPending,
    isSuccess: loginMutation.isSuccess,
    isError: loginMutation.isError,
    logout,
  };
};

export default useAuth;
