import styled from "styled-components";

export const SignContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const SignComponent = styled.div`
  max-width: 20rem;
  width: 20vmax;
  height: 20rem;
  margin-top: 7rem;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  z-index: 9;
  > input + div {
    margin-top: 1rem;
  }
`;

export const SignTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

export const SignContent = styled.div`
  margin: 0.5rem 0rem;
  font-size: 1rem;
`;

export const SignInput = styled.input`
  width: 100%;
`;

export const RigisterButton = styled.button`
  display: block;
  text-align: center;
  margin: 1.5rem auto 0rem auto;
  background-color: inherit;
  border: none;
  font-size: 1rem;
`;

export const SubmitButton = styled.button`
  display: block;
  background-color: inherit;
  border: 1px solid gray;
  margin: 1.5rem auto 0rem auto;
  padding: 0.3rem 1rem;
  border-radius: 0.3rem;
  font-size: 1rem;
`;
