import {update_title} from "../includes/utilities";

export default function Home() {
    update_title('Home');

	return (
        <div className="container-special">
            <h1>Issue Tracker for EchoaSoft Projects</h1>
            <p>Realtime application for tracking issues</p>
        </div>
	);
}
