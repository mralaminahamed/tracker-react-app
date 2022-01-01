// external deps
import { useEffect, useState } from "react";

// internal deps
import { sendRequest } from "../includes/request";
import { update_title } from "../includes/utilities";

export default function Diviflash() {
    const [ipInfo, setIpinfo] = useState({});
    const [browserInfo, setBrowserInfo] = useState({});

    useEffect(() => {
        update_title("DiviFlash");
        sendRequest({ method: "get", url: "https://www.mishusoft.com/api/tools/ipinfo", async: true }, setIpinfo);
        sendRequest({ method: "get", url: "https://www.mishusoft.com/api/tools/browser", async: true }, setBrowserInfo);
    }, []);

    return (
        <div className="container-special">
            <h1>Welcome to Issue Tracker for EchoaSoft Projects</h1>
            <p>Realtime application for tracking issues</p>
            <button
                onClick={() => {
                    alert(browserInfo);
                }}
            >
                click for browser info
            </button>
            <button
                onClick={() => {
                    alert(ipInfo);
                }}
            >
                click for ip info
            </button>
        </div>
    );
}
