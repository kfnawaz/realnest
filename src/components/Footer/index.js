import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/sign-up'>How it works</FooterLink>
              <FooterLink to='/realnest'>Testimonials</FooterLink>
              <FooterLink to='/realnest'>Careers</FooterLink>
              <FooterLink to='/realnest'>Investors</FooterLink>
              <FooterLink to='/realnest'>Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to='/realnest'>Contact</FooterLink>
              <FooterLink to='/realnest'>Support</FooterLink>
              <FooterLink to='/realnest'>Destinations</FooterLink>
              <FooterLink to='/realnest'>Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to='/realnest'>Submit Video</FooterLink>
              <FooterLink to='/realnest'>Ambassadors</FooterLink>
              <FooterLink to='/realnest'>Agency</FooterLink>
              <FooterLink to='/realnest'>Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to='/realnest'>Instagram</FooterLink>
              <FooterLink to='/realnest'>Facebook</FooterLink>
              <FooterLink to='/realnest'>Youtube</FooterLink>
              <FooterLink to='/realnest'>Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/realnest' onClick={toggleHome}>RealNest ®</SocialLogo>
            <WebsiteRights>RealNest © 2020 All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/realnest' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/realnest' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='/realnest'
                target='_blank'
                aria-label='Youtube'
                rel='noopener noreferrer'
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                target='_blank'
                aria-label='Twitter'
                href='/realnest'
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='/realnest' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
