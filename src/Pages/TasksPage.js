import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Contents, SmallCard, SmallCardTitle, SmallCardContent, ContentLayout, CardContent } from '../components/baseComponents';
import { Sidebar, AddPlan, TasksContents, AddTask, InputTitle } from '../components/taskPageStyle';
import { createTask, deleteTask, createPlan, deletePlan } from '../actions';

const mapStateToProps = (state) => {
  return {
    tasks: state.tasksReducer.tasks,
    plans: state.plansReducer.plans
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateTask: (task) => dispatch(createTask(task)),
    onDeleteTask: (taskId) => dispatch(deleteTask(taskId)),
    onCreatePlan: (plan) => dispatch(createTask(plan)),
    onDeletePlan: (planId) => dispatch(deleteTask(planId))
  }
}

class TasksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: 1,
      focusedTaskTitle: '',
      focusedTaskContent: ''
    }
  }

  onTaskTitleChange = (e) => {
    this.setState({
      focusedTaskTitle: e.target.value
    })
  }

  onTaskContentChange = (e) => {
    this.setState({
      focusedTaskContent: e.target.value
    })
  }

  onAddTaskSubmit = () => {
    const { tasks, onCreateTask } = this.props;
    if (this.state.focusedTaskTitle) {
      onCreateTask({
        id: tasks[tasks.length - 1].id + 1,
        title: this.state.focusedTaskTitle,
        content: this.state.focusedTaskContent,
        article: [ this.state.focused ]
      })
    } else {
      console.log("Title is empty")
    }
  }

  render() {
    const { focused, focusedTaskTitle, focusedTaskContent } = this.state;
    const { tasks, plans, match } = this.props;

    return (
      <Contents>
        <Sidebar>
          <span>Plans</span>
          {
            plans.map(
              (value, index) => (
                <Link
                  to={`${ match.url}/${value.title}`}
                  key={value.title}
                  onClick={() => this.setState({focused: value.id})}
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
            {plans.find(value => value.id === focused).tasks.map((taskId, index) => {
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
            <AddTask onClick={() => this.props.onDeleteTask(4)}>              
              <span>+</span>
            </AddTask>
            <CardContent>
              <InputTitle
                type="text"
                value={focusedTaskTitle}
                onChange={this.onTaskTitleChange}
                placeholder='I have an idea...'/>
              {/* <InputTitle
                type="text"
                value={focusedTaskContent}
                onChange={this.onTaskContentChange}
                placeholder='detail'/> */}
              <input
                type='submit'
                onClick={this.onAddTaskSubmit}
                value='+'
              />
            </CardContent>
          </ContentLayout>
        </TasksContents>
      </Contents>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);
