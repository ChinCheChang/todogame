import React, {Component} from 'react';
import { connect } from 'react-redux';

import { TasksContents, AddTask, InputTitle, AddButton, IconContainer } from '../components/taskPageStyle';
import { createTask, toggleTask } from '../actions';

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateTask: (text) => dispatch(createTask(text)),
    onToggleTask: (taskId) => dispatch(toggleTask(taskId))
  }
}

class TasksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedTaskTitle: ''
    }
  }

  onTaskTitleChange = (e) => {
    this.setState({
      focusedTaskTitle: e.target.value
    })
  }

  // onTaskContentChange = (e) => {
  //   this.setState({
  //     focusedTaskContent: e.target.value
  //   })
  // }

  onAddTaskSubmit = () => {
    const { onCreateTask } = this.props;
    if (this.state.focusedTaskTitle) {
      onCreateTask(this.state.focusedTaskTitle)
      this.setState({
        focusedTaskTitle: ''
      })
    }
  }

  render() {
    const { focusedTaskTitle } = this.state;
    const { tasks, onToggleTask } = this.props;

    return (
      <TasksContents>
        {tasks.map((task, index) => {
          return (
            <AddTask completed={task.completed} key={task.id}>
              <span>{task.text}</span>
              <IconContainer>
                <i onClick={() => {onToggleTask(task.id)}} className="far fa-check-circle"></i>
              </IconContainer>
            </AddTask>
          );
        })}
        <AddTask>
          <InputTitle
            type="text"
            value={focusedTaskTitle}
            // onKeyDown={(e) => {if( e.key === "Enter"){ this.onAddTaskSubmit(focusedTaskTitle) }}}
            onChange={this.onTaskTitleChange}
            placeholder='I have an idea...'
            row='5'
          />
          <AddButton onClick={() => this.onAddTaskSubmit(focusedTaskTitle)}>
            Add
          </AddButton>
        </AddTask>
      </TasksContents>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);
