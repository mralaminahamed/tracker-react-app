import { sendRequest } from "../includes/request";
import { update_title } from "../includes/utilities";

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
                                    url: "https://www.mishusoft.com/api/db/create",
                                    method: "get",
                                    async: true,
                                    data: {
                                        db: "echoa-tracker",
                                        user: "echoa",
                                        password: "echoa",
                                    },
                                },
                                function (data) {
                                    console.log(data);
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
