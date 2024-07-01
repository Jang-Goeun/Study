import styled from "styled-components";

const FooterWrapper = styled.div`
  padding: 0px 15px;
  display: flex;
  justify-content: right;
  align-items: center;
  color: white;
  height: 35px;
  background-color: #171932;

  // 네비바 상단 고정
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

function Footer() {
  return (
    <FooterWrapper>
      <span>https://www.makus.in/umc</span>
    </FooterWrapper>
  );
}

export default Footer;
