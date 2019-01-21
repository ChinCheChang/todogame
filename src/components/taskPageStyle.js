import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SmallCard } from './baseComponents';

export const Sidebar = styled.div`
  width: 20%;
  max-width: 13rem;
  padding: 0.5rem;
  display: block;
  background-color: #f1f3f5;
  > a {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 2rem;
    color: #495057;
    padding: 0.3rem 1rem;
    border-radius: 2px;
    box-sizing: border-box;
    font-size: 1.2rem;
    :hover {
      cursor: pointer;
      background-color: #adb5bd;
      color: #f1f3f5;
    }
  }
  > span{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    color: papayawhip;
    font-size: 1.5rem;
    padding: 0.5rem 0 0.5rem 0;
    border-radius: 0.3rem;
    background-color: palevioletred;
    margin-bottom: 0.5rem;
  }
`;

export const AddPlan = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  border-radius: 0.5rem;
  color: #495057;
  font-size: 1.5rem;
  :hover {
    cursor: pointer;
    color: #f1f3f5;
    background-color: #adb5bd;
  }
`;

export const TasksContents = styled.div`
  width: 80%;
  height: calc(100vh - 7rem);
  padding-top: 1rem;
  display: flex;
  justify-content: center;
`;

export const AddTask = styled(SmallCard)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  height: 100%;
  background-color: inherit;
  border: 2px solid tomato;
  color: tomato;
  :hover {
    cursor: pointer;
  }
`;

export const InputTitle = styled.input`
  width: 80%;
  max-height: 3rem;
  font-size: 2rem;
  margin-top: 1rem;
  background-color: papayawhip
`;
