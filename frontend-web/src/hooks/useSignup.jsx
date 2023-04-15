import React, { useState } from "react";
import axios from "axios";

function useSignup() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const signup = async (email, password, name, orgName) => {
    setIsLoading(true);
    setError(null);

    const response = await axios
      .post("http://localhost:3000/auth/signup", {
        email: email,
        password: password,
        name: name,
        orgName: orgName,
      })
      .catch((error) => {
        setError(error.response.data.message);
        setIsLoading(false);
      });
    const json = await response.data;
    if (response.status === 201) {
      setError("Successfull, please login");
      setIsLoading(false);
    }
  };
  return { signup, isLoading, error };
}

export default useSignup;
