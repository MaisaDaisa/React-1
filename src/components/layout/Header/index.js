import React from "react";
import "./Header.css";
import MenuBar from "../../MenuBar"

export default function Header() {
	return (
		<div className="header-container">
			<h1>Company</h1>
			<nav className="header-nav">
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
					<li>
            <MenuBar />
					</li>
				</ul>
			</nav>
		</div>
	);
}
