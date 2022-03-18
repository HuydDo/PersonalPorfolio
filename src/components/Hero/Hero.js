import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I love to create dyanamic web applications with positive user
        experiences and problem solving.
      </SectionText>
      <Button onClick={() => (window.location = "https://github.com/HuydDo")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
