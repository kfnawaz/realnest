import React from "react";
import { Button } from "../ButtonElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Subtitle1,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  description2,
  buttonLabel,
  img,
  alt,
  id,
  primary,
  darkText,
  dark,
  dark2,
  pt1,
  pt2,
  pt3,
  pt4,
  pt5,
}) => {
  console.log(primary);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <h3
                  style={{
                    fontSize: 25,
                    fontWeight: 300,
                    textAlign: "right",
                    color: "#01bf71",
                  }}
                >
                  Formed in 2019
                </h3>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <Subtitle darkText={darkText}>{description2}</Subtitle>
                <div style={{ textAlign: "center" }}>
                  <Subtitle1 darkText={darkText}>{pt1}</Subtitle1>
                  <Subtitle1 darkText={darkText}>{pt2}</Subtitle1>
                  <Subtitle1 darkText={darkText}>{pt3}</Subtitle1>
                  <Subtitle1 darkText={darkText}>{pt4}</Subtitle1>
                  <Subtitle1 darkText={darkText}>{pt5}</Subtitle1>
                </div>

                {/* <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap> */}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
