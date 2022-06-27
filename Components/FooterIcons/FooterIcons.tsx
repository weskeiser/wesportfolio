import Image from 'next/image';
import styled from 'styled-components';

const FooterIcons = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src="/github.svg" layout="fill" />
      </ImageWrapper>
      <ImageWrapper>
        <Image src="/linkedin.svg" layout="fill" />
      </ImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 1em;
  /* left: 50%; */
  transform: translateX(40%);
`;

const ImageWrapper = styled.div`
  height: 30px;
  width: 30px;
  position: relative;
`;

export default FooterIcons;