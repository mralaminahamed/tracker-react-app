import {update_title} from "../includes/utilities";

export default function Diviflash() {

    update_title('DiviFlash')

    return (
        <div className="container-special">
            <h1>Welcome to Issue Tracker for EchoaSoft Projects</h1>
            <p>Realtime application for tracking issues</p>
        </div>
    );
}
