import Image from 'next/image';
import styled from 'styled-components';

const Photo = () => {
  return (
    <Wrapper>
      <Image src="/profilephoto.png" layout="fill" sizes="50vw" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid black;
  height: 15em;
  position: relative;

  img {
    object-fit: contain;
    object-position: left;
  }
`;

export default Photo;
