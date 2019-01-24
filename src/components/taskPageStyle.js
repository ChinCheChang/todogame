import styled from 'styled-components';

export const TasksContents = styled.div`
  display: grid;
  width: 100%;
  height: calc(100vh - 7rem);
  grid-template-columns: repeat(auto-fill, 12rem);
  grid-auto-rows: 8rem;
  grid-auto-flow: dense;
  grid-gap: 1rem;
  justify-content: center;
  padding-top: 8rem;
`;

export const AddTask = styled.div`
  position: relative;
  border: 2px solid ${props => props.completed ? "gray" : "tomato"};
  grid-column: ${props => (props.focused === props.id ? "span 2" : "span 1")};
  grid-row: ${props => (props.focused === props.id ? "span 2" : "span 1")};
  border-radius: 0.5rem;
  color: tomato;
  padding: 0.75rem;
  box-sizing: border-box;
  display: block;
  word-wrap: break-word;
  :hover {
    box-shadow:4px 4px 8px 0px rgba( 0, 0, 0, 0.2 );
    cursor: pointer;
  }
  > span {
    color: #495057;
    text-decoration: ${props => props.completed ? "line-through" : ""};
  }
`;


export const IconContainer = styled.div`
  position: absolute;
  width: 100%;
  background-color: ${props => props.completed ? "gray" : "tomato"};
  padding: 0.3rem 0.3rem;
  box-sizing: border-box;
  border-radius: 0 0 0.3rem 0.3rem;
  display: flex;
  justify-content: flex-end;
  right: 0;
  bottom: 0;
  color: #f8f9fa;
  font-size: 1.2rem;
  > i {
    width: 1.5rem;
    display: flex;
    justify-content: center;
    margin-left: 0.25rem;
    :hover {
      color: orange;
    }
  }
`;

export const InputTitle = styled.textarea`
  width: 100%;
  height: 4rem;
  max-height: 100%;
  min-height: 1rem;
  overflow: auto;
  font-size: 1.2rem;
  border: none;
  padding: none;
  background-color: inherit;
`;

export const AddButton = styled.div`
  position: absolute;
  left: 0rem;
  bottom: 0rem;
  color: #f8f9fa;
  font-size: 1rem;
  padding: 0.3rem;
  box-sizing: border-box;
  border-radius: 0rem 0.3rem 0 0;
  background-color: tomato;
  :hover {
    cursor: pointer;
  }
`;
