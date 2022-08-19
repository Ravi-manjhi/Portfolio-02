import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useGlobleContext } from "../../context/appContext";
import SkillsItem from "./skillsCard";
import "./skills.css";

function Skills() {
  const { setActiveLink } = useGlobleContext();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section
      className="skills"
      id="skill"
      onMouseOver={() => {
        setActiveLink("skills");
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col col-xl-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quaerat consequatur ipsa iste architecto officiis. Excepturi
                vitae assumenda omnis quibusdam. Eum expedita dicta culpa nihil
                quae maiores, ullam mollitia repudiandae officiis.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skills-sider"
              >
                <SkillsItem
                  img={require("../../assets/img/meter1.svg").default}
                  title="Web Development"
                />
                <SkillsItem
                  img={require("../../assets/img/meter1.svg").default}
                  title="Data Scientist"
                />
                <SkillsItem
                  img={require("../../assets/img/meter2.svg").default}
                  title="UI | Ux Designer"
                />
                <SkillsItem
                  img={require("../../assets/img/meter3.svg").default}
                  title="Mobile App Developer (React Native)"
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={require("../../assets/img/color-sharp2.png")}
        alt="color-sharp"
        width="100%"
      />
    </section>
  );
}

export default Skills;
