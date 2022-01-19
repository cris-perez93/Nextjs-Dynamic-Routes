import styled from "@emotion/styled";
import LogoBackground from "./../../public/static/img/vector-background.svg";


export const IntroContainer = styled.div`
  margin-top: 100px;
  background-image: url(${LogoBackground});
  position: relative;
`;

export const Heading = styled.h2`
  color: #5aa057;
  font-size: 40px;
  text-shadow: 0px 3px 20px rgba(90, 120, 87, 0.95);
`;

export const P = styled.p`
  font-size: 18px;
`;
