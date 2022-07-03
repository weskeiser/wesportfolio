import styled from "styled-components";

const ProfilePhoto = () => {
  return (
    // <ImageWrapper>
    <img src="/images/profilephoto.png" alt="" />
    // </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  /* height: 100%;
  position: fixed; */

  img {
    height: ${({ theme }) => theme.heights.footer};
    bottom: 0;
    right: 0;
    position: fixed;
  }
`;

export default ProfilePhoto;
