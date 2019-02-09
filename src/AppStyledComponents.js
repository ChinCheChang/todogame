import styled from 'styled-components';

export const Navbar = styled.header`
  padding: 0.75rem 1rem;
  width: 100%;
  height: 6rem;
  position: fixed;
  left: 0;
  top: 0;
  background-color: white;
  z-index: 3;
  box-shadow: 0 0 8px 2px rgba( 0, 0, 0, .2 );
  transform: ${props => (props.state === "shrink" ? 'translateY(-100%)' : 'translateY(0)')};
  transition-duration: 0.5s;
  box-sizing: border-box;
`;

export const FlexContents = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin 0 auto;
  max-width: 95.36743rem;
  font-size: 1.5625rem;
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
  > div {
    margin: 0rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #495057;
    :hover {
      cursor: pointer;
    }
    > div {
      font-size: 1.1rem;
      margin: 0.5rem;
    };
  };
`;

export const PageNav = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 95%;
  margin 0 auto;
  max-width: 95.36743rem;
  > a {
    color: #495057;
    margin-top: 0.7rem;
    padding-right: 0.3rem;
    border-right: 2px solid #495057;
  }
  a + a {
    margin-left: 1.5rem;
  };
`;
