import {settings} from "../configs/settings";

export default function Footer (){
    return (
		<footer>
			<section className="container footer">
        <div className="copyright">© {settings.company} {(new Date()).getFullYear()} • All rights reserved.</div>
			</section>
		</footer>
	);
}
