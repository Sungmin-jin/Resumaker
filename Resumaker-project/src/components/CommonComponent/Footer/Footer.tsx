import React, { useState, useCallback, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import LatestNews from "./LatestNews";

const Footer = (): JSX.Element => {
	const modalRef = useRef<HTMLLIElement>(null);
	const [modal, setModal] = useState<boolean>(false);

	const onClickOutside = useCallback(
		({ target }): void => {
			modalRef.current && !modalRef.current.contains(target) && setModal(false);
		},
		[setModal]
	);

	const onClickToggleModal = useCallback((): void => {
		setModal((prev) => !prev);
	}, [setModal]);

	useEffect(() => {
		document.addEventListener("click", onClickOutside);
		return () => document.removeEventListener("click", onClickOutside);
	}, []);

	return (
		<>
			<footer className="footer">
				<div className="footer-contents">
					<ul className="footer-ul">
						<li className="footer-li">
							<Link className="footer-ul-li-a" to="/how-resumaker-works">
								How Resumaker Works
							</Link>
						</li>
						<li
							className="footer-li"
							ref={modalRef}
							onClick={onClickToggleModal}
						>
							Latest News
							<LatestNews show={modal} />
						</li>
						<li className="footer-li">
							<Link className="footer-ul-li-a" to="/about-us">
								About us
							</Link>
						</li>
					</ul>
				</div>
				<hr />
				<div className="copyrights-container">
					<span className="copyrights-text">
						This Site is Protected by Resumaker and the Google Privacy Policy
						and Terms of Services apply.
					</span>
					<span className="copyrights-text">© 2021 Resumaker.</span>
				</div>
			</footer>
		</>
	);
};

export default Footer;
