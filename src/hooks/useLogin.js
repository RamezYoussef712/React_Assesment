import { useState } from "react";
import axios from "../api/axios";
import { useAuth } from "./useAuth";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuth();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const formData = {
      username: email,
      password,
    };

    try {
      const response = await axios.post("/auth/login", formData);
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch({ type: "LOGIN", payload: response.data });
      setIsLoading(false);
      setError(null);
      console.log(response.data);
    } catch (err) {
      if (!err?.response) {
        setError("Connection Failed!");
      } else {
        setError(err.response.data.message);
        console.log(err.response.data.message);
      }
    }
  };
  return { login, isLoading, error };
};
