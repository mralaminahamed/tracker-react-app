import { useEffect } from "react";

export function DatabaseConnection({ children }) {
    useEffect(function () {
        console.log(localStorage);
    }, []);

    return children;
}
