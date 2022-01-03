import { useEffect } from "react";
import { api_configs } from "../configs/api";
import { databaseConfigs } from "../configs/database";
import { sendRequest } from "../includes/request";

export function DatabaseConnection({ children }) {
    useEffect(function () {
        console.log(localStorage);
        // check database, tables in database server

        sendRequest(
            {
                url: api_configs.url + "db/query",
                method: api_configs.request_method_default,
                async: true,
                header: api_configs.request_content_type_default,
                data: {
                    db: databaseConfigs.name,
                    user: databaseConfigs.user,
                    password: databaseConfigs.password,
                    required: ["databse", "table"],
                    next: [{ notFound: "create" }, { success: "result" }],
                    table: databaseConfigs.tables,
                },
            },
            function (data) {
                try {
                    let response = JSON.parse(data);
                    console.log(response);

                    if (response.message.type === "error") {
                        alert(response.message.details);
                    }
                } catch (e) {
                    console.log(data);
                }
            }
        );
    }, []);

    return children;
}
