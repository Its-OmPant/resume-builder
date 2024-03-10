// Components
import Experience from "./Experience";
import Education from "./Education";
import Profile from "./Profile";
import Skills from "./Skills";

// CSS
import "./Resume.css";

//ICONS
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";

function Resume() {
	return (
		<div className="resume">
			<h1>Om Pant</h1>
			<div className="links">
				<div className="link">
					<LinkedInIcon htmlColor="teal" />
					<a href="/">LinkedIn</a>
				</div>
				<div className="link">
					<MailIcon htmlColor="teal" />
					<a href="/">ompant23@gmail.com</a>
				</div>
				<div className="link">
					<PhoneIcon htmlColor="teal" />
					<a href="/">+91 9758689888</a>
				</div>
				<div className="link">
					<GitHubIcon htmlColor="teal" />
					<a href="/">GitHub</a>
				</div>
			</div>
			<hr />

			<div className="main">
				<div className="left">
					<Education />
					<hr />
                    <Skills/>
                    
                    
				</div>
				<div className="right">
					<Profile />
                    <hr />
					<Experience />
				</div>
			</div>
		</div>
	);
}

export default Resume;
