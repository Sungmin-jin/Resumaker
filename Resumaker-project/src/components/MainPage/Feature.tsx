import React from "react";

const Feature = () => {
  return (
    <section className="feature">
      <div className="feature-header">
        <h2>Features</h2>
      </div>
      <div className="feature-contents">
        <div className="feature-various alignText">
          <h3>Various Templates</h3>
          <div>
            <p>
              Resumaker provides a variety of templates design. Make your own resume portfolio with
              our beautifully-designed templates.
            </p>
          </div>
        </div>
        <div className="feature-easy alignText">
          <h3>Easy To Customize</h3>
          <div>
            <p>
              Easy to create and update your resume portfolio. Once signin, you can simply write
              your skills and experience on your template and edit from anywhere at anytime.
            </p>
          </div>
        </div>
        <div className="feature-just alignText">
          <h3>Your own shard link</h3>
          <div>
            <p>
              Insert your own shared link when you apply. It is easy to show the employers that you
              are the perfect fit by simply adding the link.
            </p>
          </div>
        </div>
        <div className="feature-download alignText">
          <h3>Free download</h3>
          <div>
            <p>
              Unlimited download on all of your portfolios. Fill our each section and download for
              free whenever you want.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
