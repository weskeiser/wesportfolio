import Image from "next/image";
import styled from "styled-components";

const SocialsIcons = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src="/images/github.svg" layout="fill" />
      </ImageWrapper>
      <ImageWrapper>
        <Image src="/images/linkedin.svg" layout="fill" />
      </ImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 0.5em;
  margin-top: 0.8em;
  /* left: 50%; */
  /* transform: translateX(40%); */
`;

const ImageWrapper = styled.div`
  height: 30px;
  width: 30px;
  position: relative;
`;

export default SocialsIcons;
