import homepic from "../../images/home2.png";
import sharepic from "../../images/share.jpg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "We Welcome You",
  headline: "Real Nest LLC.",
  // description:
  //   "Get access to our exclusive app that allows you to track financials and progress on your projects.",
  pt1: "Is run by highly motivated people",
  pt2: "Has established end to end supply chain",
  pt3:
    "Collaborates with multiple greater Houston area wholesalers, contractors and realtors.",
  pt4:
    "Aims at using halal means to grow it's capital assets and provide unmatched returns to the investors",
  pt5: "Is pursuing aggressive expansion in 2021",
  buttonLabel: "Know More",
  text2: "Formed in 2019",
  imgStart: false,
  // img: require('../../images/svg-1.svg'),
  img: homepic,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "choices",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Investment Model",
  headline: "EquiShare Model",
  description:
    "All Investors (including RealNest) share the profit and loss equitably based on their share of Cpital Investment in the Project.",
  description2:
    "A Real Nest Service Charge of 5% to 15% of rehab Cost is applied as an expense item to the cost of the Project",
  buttonLabel: "Learn More",
  imgStart: false,
  // img: require('../../images/svg-2.svg'),
  img: sharepic,
  alt: "Piggybank",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Invest in Realty and Grow with Us",
  headline: "Creating an account is easy",
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is pitch in some money and you're ready to go.",
  buttonLabel: "Start Now",
  imgStart: false,
  img: require("../../images/svg-3.svg"),
  alt: "Papers",
  dark: false,
  primary: false,
  darkText: true,
};
