import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {
    FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper,
    FooterLinkItem, FooterLinkTitle, FooterLink,
    SocialMedia, SocialMediaWrap, SocialIcons, SocialIconsLink, SocialLogo, WebsiteRights
} from "./FooterElements";
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItem>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">About Us</FooterLink>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">ATestimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Research</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                    </FooterLinkItem>
                    <FooterLinkItem>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">About Us</FooterLink>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">ATestimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Research</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                    </FooterLinkItem>
                    <FooterLinkItem>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">About Us</FooterLink>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">ATestimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Research</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                    </FooterLinkItem>
                    <FooterLinkItem>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">About Us</FooterLink>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">ATestimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Research</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                    </FooterLinkItem>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/" onClick={toggleHome}>Qml</SocialLogo>
                    <WebsiteRights>Qml © {new Date().getFullYear()} · Jyoti Maurya · All rights reserved</WebsiteRights>
                    <SocialIcons>
                        <SocialIconsLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconsLink>
                        <SocialIconsLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconsLink>
                        <SocialIconsLink href="/" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconsLink>
                        <SocialIconsLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconsLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;