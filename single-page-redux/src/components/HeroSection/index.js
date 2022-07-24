import React, { useState } from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from "./HeroElements";
import { HeroBtnWrapper, ArrowForward,ArrowRight } from "./HeroElements";
import Video from "../../videos/video.mp4";
import {Button} from "../ButtonElement";

const HeroSection = () => {

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>Quantum Computing Made Easy</HeroH1>
          <HeroP>
            Sign up for a free account today and receive 2 one-on-one session with our experts.
          </HeroP>
          <HeroBtnWrapper>
            <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} >
              Get started {hover? <ArrowForward /> : <ArrowRight />} 
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;