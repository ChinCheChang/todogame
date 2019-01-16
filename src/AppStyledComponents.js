import styled from 'styled-components';

export const Navbar = styled.header`
  padding: 0.75rem 0rem;
  width: 100%;
  position: relative;
  background-color: white;
  z-index: 3;
  box-shadow: 0 0 8px 2px rgba( 0, 0, 0, .2 );
`;

export const FlexContents = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 3rem;
  padding-right: 3rem;
  font-size: 1.5625rem;
  box-sizing: border-box;
`;

export const HomeIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: #495057;
  > i {
    background-color: #fd7e14;
    border-radius: 0.3rem 0.8rem;
    padding: 0.5rem 0.4rem;
    color: white;
  };
  > div {
    padding: 0.1rem;
    font-size: 0.7rem;
  }
`;

export const OtherIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > a {
    margin: 0rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #495057;
    > div {
      font-size: 1.1rem;
      margin: 0.5rem;
    };
  };
`;

export const PageNav = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 3rem;
  padding-right: 3rem;
  > a {
    color: #495057;
    margin-top: 1vw;
    padding-right: 0.3rem;
    border-right: 2px solid #495057;
  }
  a + a {
    margin-left: 1.5rem;
  };
`;
