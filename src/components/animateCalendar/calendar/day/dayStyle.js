import styled, { keyframes } from 'styled-components';

const opacity = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const BasicDay = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  background-color: rgba(47.5, 43.9, 29.4, 0.3);
  margin: 0rem 0.3rem;
  cursor: pointer;
  animation: ${opacity} 0.5s linear;
  &: hover {
    box-shadow:4px 4px 8px 0px rgba( 0, 0, 0, 0.2 );
    background-color: #495057;
  }
`;

export const DayName = styled(BasicDay)`
  border-color: rgba(255, 89, 0, 1);
  background-color: rgba(255, 111, 0, 0.5);
`;

export const Weekend = styled(BasicDay)`
  border-color: #FF4646;
  background-color: rgba(255, 70, 70, 0.5);
`;

export const EmptyDay = styled(BasicDay)`
  visibility: hidden;
`;

export const Today = styled(BasicDay)`
  border-color: rgba(248, 235, 18, 0.5);;
  background-color: rgba(248, 235, 18, 0.5);
`;
