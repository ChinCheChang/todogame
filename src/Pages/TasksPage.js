import React, {Component} from 'react';
import styled from 'styled-components'
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Contents, SmallCard, SmallCardTitle, SmallCardContent, ContentLayout } from '../components/baseComponents';
import { Sidebar, AddPlan, TasksContents, AddTask } from '../components/taskPageStyle';
import { result } from '../testDate';
import { addTask } from '../actions';

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTask: (task) => dispatch(addTask(task))
  }
}

class TasksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: result,
      focused: 0
    }
  }

  render() {
    const { focused, store } = this.state;
    const { plans, users, tasks } = this.state.userInfo.entities;

    return (
      <Contents>
        <Sidebar>
          <span>Plans</span>
          {
            plans.map(
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
          <ContentLayout>
            {plans[focused].tasks.map((taskId, index) => {
              return (
                <SmallCard key={taskId}>
                  <SmallCardTitle>
                    {tasks.filter((value) => value.id === taskId)[0].title}
                  </SmallCardTitle>
                  <SmallCardContent>
                    {tasks.filter((value) => value.id === taskId)[0].content}
                  </SmallCardContent>
                </SmallCard>
              );
            })}
            <AddTask onClick={() => this.props.onAddTask({
              id: 6,
              title: 'walking dog6',
              content: 'walking dog in Daan park',
              subNodes: [ ],
              preNode: [ ],
              articles: [ 1 ]
            })}>
              <span>+</span>
            </AddTask>
          </ContentLayout>
        </TasksContents>
      </Contents>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);
