import { useState } from "react";

export default function useToken() {
    const getToken = () => {
        const tokenStringSes = sessionStorage.getItem("math-test-app");
        const tokenStringLoc = localStorage.getItem("math-test-app");
        const userToken = JSON.parse(tokenStringSes || tokenStringLoc);
        return userToken;
    };

    const [token, setToken] = useState(getToken());

    const saveToken = (userToken, save) => {
        save
            ? localStorage.setItem("math-test-app", JSON.stringify(userToken))
            : sessionStorage.setItem(
                  "math-test-app",
                  JSON.stringify(userToken)
              );
        setToken(userToken);
    };

    return {
        setToken: saveToken,
        token,
    };
}
