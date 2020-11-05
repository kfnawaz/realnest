import React from "react";
import Slider from "./Slider";
import styles from "./styles.css";
import horizontalCss from "./horizontal.css";
import content from "./content";
import { Link } from "react-router-dom";

function InfoSlider() {
  return (
    <div
      className={styles.page}
      style={{ backgroundColor: "#312D3B", paddingTop: 20 }}
      id="projects"
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: 24,
          fontSize: 48,
          lineHeight: 1.1,
          fontWeight: 600,
          color: "white",
          paddingBottom: 60,
        }}
      >
        Projects
      </h1>
      <Slider classNames={horizontalCss} autoplay={3000}>
        {content.map((item, index) => (
          <div
            key={index}
            style={{
              background: `url('${item.image}' )`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "80%",
            }}
          >
            {/* <div className={styles.center}> */}
            <div
              style={{
                textAlign: "center",
                alignContent: "center",
                position: "absolute",
                top: "90%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* <h1>{item.title}</h1>
              <br />
              <p>{item.description}</p>
              <br /> */}
              {item.button && (
                <Link to="/progress">
                  <button
                    style={{ backgroundColor: "white", borderRadius: "none" }}
                  >
                    {item.button}
                  </button>
                </Link>
              )}
              {/* <img
                style={{ width: "100%", height: "100%", margin: "auto" }}
                src={item.image}
                alt=""
              /> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default InfoSlider;
