import React, {Component} from 'react';
import styled from 'styled-components'
import { Route, Link } from 'react-router-dom';

import { Contents } from '../components/baseComponents';
import { result } from '../testDate';

const Sidebar = styled.div`
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

const AddPlan = styled(Link)`
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

const TasksContents = styled.div`
  width: 80%;
  height: calc(100vh - 7rem);
`;

class TasksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: result,
      focused: 1
    }
  }

  render() {
    const { focused } = this.state;
    const { articles, users } = this.state.userInfo.entities;
    console.log();

    return (
      <Contents>
        <Sidebar>
          <span>Plans</span>
          {
            articles.map(
              (value, index) => (
                <Link
                  to={`${this.props.match.url}/${value.title}`}
                  key={value.title}
                  onClick={() => this.setState({focused: `${index}`})}
                >
                  {value.title}
                </Link>)
            )
          }
          <div>
            <AddPlan to={`${this.props.match.url}/add`}>+</AddPlan>
          </div>
        </Sidebar>
        <TasksContents>
          {users.filter((value) => value.id === articles[focused].author)[0].name}
        </TasksContents>
      </Contents>
    );
  }
}

export default TasksPage;
