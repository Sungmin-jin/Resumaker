import React from "react";
import { Link } from "react-scroll";

const NavItems = [
	"about",
	"project",
	"experience",
	"education",
	"additional info",
	"contact",
];

const Template1Nav = () => {
	return (
		<>
			{NavItems.map((NavItem) => (
				<li className="template1-nav-li">
					<Link to={`${NavItem}`} smooth={true}>
						{NavItem}
					</Link>
				</li>
			))}
		</>
	);
};

export default Template1Nav;
