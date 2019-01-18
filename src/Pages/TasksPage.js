import React, {Component} from 'react';
import styled from 'styled-components'
import { Contents } from '../components/baseComponents';

const Sidebar = styled.div`
  width: 20%;
  max-width: 13rem;
  background-color: gray;
  display: block;
  border-radius: 0.5rem;
`;

const TasksContents = styled.div`
  width: 80%;
  height: 5rem;
  background-color: palevioletred;
  border-radius: 0.5rem;
`;

class TasksPage extends Component {
  render() {
    return (
      <Contents>
        <Sidebar>

        </Sidebar>
        <TasksContents>

        </TasksContents>
      </Contents>
    );
  }
}

export default TasksPage;
