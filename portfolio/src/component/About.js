import React from "react";
function About() {
  return (
    <div className="p-5 abouts">
      <h1 className="text-primary text-center ">
        About <span style={{ color: "black" }}>me</span>
      </h1>
      <p className="font-weight-light text-center text-light">
        Some information about me and my work
      </p>
      <div style={{ color: "white" }} className="container p-3 ">
        <div className="row">
          <div className="col-12 col-md-6">
            <h4 style={{ color: "black" }} className="text-center about">
              What can I do?
            </h4>
            <p className="text-justify">
              I can develop simple, interesting and eye-catching websites like
              the one you are surfing right now based on the demands of the user
              by using tools like HTML, CSS, JAVASCRIPT ,BOOTSTRAP etc.
            </p>
          </div>
          <div className="col-12 col-md-6 pl-3 ">
            <h4 style={{ color: "black" }} className="text-center about">
              What do I believe in?
            </h4>
            <p className="text-justify">
              I believe in quality over quantity I like to work in the most
              precise way as possible I like to keep my product as classy as
              possible and I try to minimize user's efforts while using the
              product.
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 col-md-6">
            <h4 style={{ color: "black" }} className="text-center about">
              What am I doing currently?
            </h4>
            <p className="text-justify">
              Currently I am pursuing btech. in computer science and learning
              and enhancing programming and designing skills. I spent most of
              time either working or getting ready to work on some exciting
              projects.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <h4 style={{ color: "black" }} className="text-center about">
              How can I help you?
            </h4>
            <p className="text-justify">
              I can help you design and develop front-end as well as back-end
              for your desired website with all of my skills and creativity, I
              bet you won't be disappointed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
