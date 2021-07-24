import TimeIconSVG from "images/CommonComponent/Footer/TimeIconSVG";
import React from "react";
interface Props {
	show: boolean;
}
const LatestNews = ({ show }: Props) => {
	if (!show) {
		return null;
	}
	return (
		<section className="latest-news-container">
			<div className="latest-news-modal">
				<h2 className="modal-title">Latest News</h2>
				<TimeIconSVG />
				<br />
				<p className="modal-description">
					Welcome to Resumaker. This section is to show the lastest news of
					Resumaker.
				</p>
				<p className="modal-description">
					We will be updating the features as we develop, but for now we have 1
					complete and fully functional template available for the users to get
					their dream occupations.
				</p>
				<p className="modal-description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et
					enim risus.
				</p>
			</div>
		</section>
	);
};

export default LatestNews;
