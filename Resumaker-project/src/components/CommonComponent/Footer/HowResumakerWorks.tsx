import React from "react";
import TemplateSVG from "images/CommonComponent/Footer/TemplateSVG";
import EditSVG from "images/CommonComponent/Footer/EditSVG";
import SaveSVG from "images/CommonComponent/Footer/SaveSVG";

const HowResumakerWorks = (): JSX.Element => {
	return (
		<section className="hrw-container">
			<h2 className="hrw-header">How Resumaker Works?</h2>
			<p className="hrw-description">
				<span style={{ fontStyle: "italic", fontWeight: "bold" }}>
					Welcome to Resumaker.
				</span>{" "}
				We provide you with beautifully-designed templates. Land your dream job
				with the perfect resume employers are looking forward to!
			</p>
			<div className="hrw-card-contents">
				<div className="hrw-card theme">
					<figure className="hrw-card-image-container">
						<TemplateSVG />
					</figure>
					<h2 className="hrw-card-title">Choose Template</h2>
					<p className="hrw-card-description">
						Choose a template of your choice from the pre designed templates!
					</p>
				</div>
				<div className="hrw-card theme">
					<figure className="hrw-card-image-container">
						<EditSVG />
					</figure>
					<h2 className="hrw-card-title">Personalize</h2>
					<p className="hrw-card-description">
						Add your uniqueness! Fill in the resume with your talents and skills
					</p>
				</div>
				<div className="hrw-card theme">
					<figure className="hrw-card-image-container">
						<SaveSVG />
					</figure>
					<h2 className="hrw-card-title">Download</h2>
					<p className="hrw-card-description">
						Download, print or get a link to your customized resume!
					</p>
				</div>
			</div>
			<hr />
			<div className="hrw-contents2">
				<div className="hrw-contents2-container">
					<div className="hrw-contents2-img-container">
						{/* <FileImageSVG /> */}
						<img
							className="hrw-contents2-img"
							src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80"
						/>
					</div>
					<div className="hrw-contents2-contents-container">
						<span className="hrw-contents2-title-subheader">
							pre-designed templates
						</span>
						<h2 className="hrw-contents2-title">
							Well-crafted Resume for every occupation
						</h2>
						<p className="hrw-contents2-description">
							Whether you're applying for a developer's role, an accountant, or
							any of your first internships, Resumaker has dozens of beautifully
							pre-designed templates for you to choose from! Highlight your
							values, and the treasure gained from previous experiences. With
							the greatest self value, present to your employer with confidence
							and with certainty.
						</p>
					</div>
				</div>
				<div className="hrw-contents2-container reverse">
					<div className="hrw-contents2-contents-container secondContentPadding">
						<span className="hrw-contents2-title-subheader">
							personalization & customization
						</span>
						<h2 className="hrw-contents2-title">Personalize to your needs</h2>
						<p className="hrw-contents2-description">
							To give your employer a better understanding and interpretation of
							who you are, let the Resumaker's pre-designed templates do the
							work for you! Insert any image you would like to show as proof of
							the hardwork, descriptions showcasing your talents and values and
							let the template format the document for you!
						</p>
					</div>
					<div className="hrw-contents2-img-container">
						<img
							className="hrw-contents2-img"
							src="https://images.unsplash.com/photo-1560421683-6856ea585c78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80"
						/>
					</div>
				</div>
				<div className="hrw-contents2-container">
					<div className="hrw-contents2-img-container">
						<img
							className="hrw-contents2-img"
							src="https://images.unsplash.com/photo-1591617870684-6e861e6a48ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1538&q=80"
						/>
					</div>
					<div className="hrw-contents2-contents-container">
						<span className="hrw-contents2-title-subheader">accessibility</span>
						<h2 className="hrw-contents2-title">
							Progressive resume alongside of your career
						</h2>
						<p className="hrw-contents2-description">
							Resumaker's templates allow you to modify any parts of the
							document. You can flexibly change your resume with new
							experiences, skills, etc for any jobs within minutes. You can also
							save the copies of your resume by either downloading your resume
							or getting a generated link to you resume.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowResumakerWorks;
