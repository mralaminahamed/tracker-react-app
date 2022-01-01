import {update_title} from "../includes/utilities";

export default function NotFound() {

    update_title('Not found')

    return (
        <div className="container-special">
            <h1>Content not found</h1>
            <p>Please try again. </p>
        </div>
    );
}
