import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-3.svg";
import Icon3 from "../../images/svg-5.svg";
import growth from "../../images/growth.png";
import investment from "../../images/investment.jpg";
import trust from "./../../images/trust.webp";
import visibility from "./../../images/visibility.png";
import safety from "../../images/safety.png";
import competition from "./../../images/competition.jpg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    // <ServicesContainer id='services'>
    //   <ServicesH1>Our Services</ServicesH1>
    //   <ServicesWrapper>
    //     <ServicesCard>
    //       <ServicesIcon src={Icon1} />
    //       <ServicesH2>Service One</ServicesH2>
    //       <ServicesP>
    //       A quick and simplified answer is that Lorem Ipsum refers to text used when the real text is not available..
    //       </ServicesP>
    //     </ServicesCard>
    //     <ServicesCard>
    //       <ServicesIcon src={Icon2} />
    //       <ServicesH2>Service Two</ServicesH2>
    //       <ServicesP>
    //       Lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
    //       </ServicesP>
    //     </ServicesCard>
    //     <ServicesCard>
    //       <ServicesIcon src={Icon3} />
    //       <ServicesH2>Service Three</ServicesH2>
    //       <ServicesP>
    //       Easily generate Lipsum placeholder text in any number of characters, words sentences or paragraphs.
    //       </ServicesP>
    //     </ServicesCard>
    //   </ServicesWrapper>
    // </ServicesContainer>
    <ServicesContainer id="services">
      <ServicesH1>Why Should You Invest With Us.</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          {/* <ServicesIcon src={Icon1} /> */}
          <img
            style={{
              width: 150,
              height: "auto",
            }}
            src={competition}
            alt="growth"
          />
          <ServicesH2>Competitive Growth</ServicesH2>
          <ServicesP>
            Your money will grow at a rate on par with any market or investment
            or business instruments.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          {/* <ServicesIcon src={Icon2} /> */}
          <img
            style={{
              width: 150,
              height: "auto",
            }}
            src={safety}
            alt="growth"
          />
          <ServicesH2>Safest Investment Tool</ServicesH2>
          <ServicesP>
            Your money is invested in Halal hard asset which you can touch and
            feel and check out at any time.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          {/* <ServicesIcon src={Icon3} /> */}
          <img
            style={{
              width: 170,
              height: "auto",
            }}
            src={trust}
            alt="growth"
          />
          <ServicesH2>Trust And Competency</ServicesH2>
          <ServicesP>
            You are in good hands with people who know this business and have
            develoeped an end to end chain of professionals in a variety of
            change.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          {/* <ServicesIcon src={Icon3} /> */}
          <img
            style={{
              width: 170,
              height: "auto",
            }}
            src={visibility}
            alt="growth"
          />
          <ServicesH2>Complete Visibility</ServicesH2>
          <ServicesP>
            Your will have visibility to Investor Models, Project Financials,
            and Periodic Updates on Project Progress.
          </ServicesP>
        </ServicesCard>
        {/* <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Complete Visibility</ServicesH2>
          <ServicesP>
            Easily generate Lipsum placeholder text in any number of characters,
            words sentences or paragraphs.
          </ServicesP>
        </ServicesCard> */}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
