import React from "react";
import { useGlobleContext } from "../context/appContext";
import { BsArrowRightCircle } from "react-icons/bs";

function Banner() {
  const { setActiveLink, text } = useGlobleContext();

  return (
    <section
      id="home"
      className="banner"
      onMouseOver={() => {
        setActiveLink("home");
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-xs-12 col-md-6 col-xl-7">
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Programmer `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              veritatis nihil quo eum optio quibusdam numquam minus dicta
              molestias sed.
            </p>
            <a
              className="btn download-btn"
              href={require("../assets/file/Resume_Ravi_Manjhi.pdf")}
              download
            >
              Download Resume <BsArrowRightCircle size="25" />
            </a>
          </div>
          <div className="col col-xs-12 col-md-6 col-xl-5">
            <img
              src={require("../assets/img/header-img.svg").default}
              alt="banner.png"
              width="100%"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
