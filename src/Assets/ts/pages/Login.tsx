import { api_configs } from "../configs/api";
import { sendRequest } from "../includes/request";
import { update_title } from "../includes/utilities";
import { databaseConfigs } from "../configs/database";

// https://www.geeksforgeeks.org/how-to-pass-data-from-child-component-to-its-parent-in-reactjs/

export default function Login() {
    update_title("Log in");

    return (
        <div className="log-in">
            <h1>Welcome Back</h1>
            <h2>Enter your credentials to access your account</h2>
            <form action="" method="get" encType="multipart/form-data">
                <label>
                    <input name="username" type="text" placeholder="Type your username" />
                </label>
                <label>
                    <input name="password" type="password" placeholder="Type your password" />
                </label>
                <div className="button-group">
                    <input
                        type="submit"
                        value="Login"
                        onClick={(e) => {
                            e.preventDefault();
                            sendRequest(
                                {
                                    url: api_configs.url + "db/create",
                                    method: api_configs.request_method_default,
                                    async: true,
                                    header: [{ "Content-type": "application/json; charset=utf-8" }],
                                    data: {
                                        db: databaseConfigs.name,
                                        user: databaseConfigs.user,
                                        password: databaseConfigs.password,
                                        required: "table",
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
                            console.log(e);
                        }}
                    />
                    {/* <input type="reset" value="Reset" /> */}
                </div>
            </form>
        </div>
    );
}
