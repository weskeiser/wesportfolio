import Image from "next/image";
import styled from "styled-components";

const ProfilePhoto = () => {
  return (
    <ImageWrapper>
      <Image src="/images/profilephoto.png" layout="fill" sizes="50vw" />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  height: 100%;
  aspect-ratio: 2 / 3;
  position: relative;
  margin-left: auto;

  img {
    object-fit: contain;
    object-position: left;
  }
`;

export default ProfilePhoto;
