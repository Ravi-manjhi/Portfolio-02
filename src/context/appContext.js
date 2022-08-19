import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // ======================================== Banner-Hooks =========================================

  const [loopNum, setLoolNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toRotate = ["Web Developer", "Web Designer", "Data Scientist"];
  const period = 2000;

  // ========================================== Banner =============================================

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updateText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);
      setText(updateText);

      if (isDeleting) {
        setDelta((preDalta) => preDalta / 2);
      }
      if (!isDeleting && updateText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updateText === "") {
        setIsDeleting(false);
        setLoolNum(loopNum + 1);
        setDelta(500);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [delta, isDeleting, loopNum, text, toRotate]);

  // =========================================== Navbar =============================================

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        activeLink,
        setActiveLink,
        scrolled,
        text,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// ======================================== Globle Context ===============================================

export const useGlobleContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
