import React, {Component} from 'react';
import { connect } from 'react-redux';

import { TasksContents, AddTask, InputTitle, AddButton, IconContainer } from '../components/taskPageStyle';
import { createTask, toggleTask, deleteTask, updateTask } from '../actions';

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateTask: (text) => dispatch(createTask(text)),
    onToggleTask: (taskId) => dispatch(toggleTask(taskId)),
    onDeleteTask: (taskId) => dispatch(deleteTask(taskId)),
    onUpdateTask: (taskId, text) => dispatch(updateTask(taskId, text))
  }
}

class TasksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: -1,
      focusedContents: '',
      createTaskTitle: ''
    }
  }

  onTaskTitleChange = (e) => {
    this.setState({
      createTaskTitle: e.target.value
    })
  }

  onFocusedTask = (id, text) => {
    this.setState({
      focused: id,
      focusedContents: text
    })
  }

  onAddTaskSubmit = () => {
    const { onCreateTask } = this.props;
    if (this.state.createTaskTitle) {
      onCreateTask(this.state.createTaskTitle)
      this.setState({
        createTaskTitle: ''
      })
    }
  }

  render() {
    const { createTaskTitle, focused, focusedContents } = this.state;
    const { tasks, onToggleTask, onDeleteTask, onUpdateTask } = this.props;
    return (
      <TasksContents>
        {tasks.map((task, index) => {
          return (
            <AddTask
              completed={task.completed}
              focused={focused}
              id={task.id}
              key={task.id}
            >
              {
                focused === task.id ? (
                  <InputTitle value={focusedContents} onChange={(e) => this.setState({focusedContents: e.target.value})}/>
                ) : (
                  <span>{task.text}</span>
                )
              }
              <IconContainer completed={task.completed}>
                <i onClick={() => {onToggleTask(task.id)}} className="far fa-check-circle"></i>
                <i onClick={() => {onDeleteTask(task.id)}} className="far fa-trash-alt"></i>
                {
                  focused === task.id ? (
                    <i onClick={() => onUpdateTask(task.id ,focusedContents)} className="fas fa-plus"></i>
                  ) : (
                    null
                  )
                }
                {
                  focused === task.id ? (
                    <i onClick={() => {this.onFocusedTask(-1, '')}} className="fas fa-search-minus"></i>
                  ) : (
                    <i onClick={() => {this.onFocusedTask(task.id, task.text)}} className="fas fa-ellipsis-v"></i>
                  )
                }
              </IconContainer>
            </AddTask>
          );
        })}
        <AddTask id='add'>
          <InputTitle
            type="text"
            value={createTaskTitle}
            onChange={this.onTaskTitleChange}
            placeholder='I have an idea...'
            row='5'
          />
          <AddButton onClick={() => this.onAddTaskSubmit(createTaskTitle)}>
            Add
          </AddButton>
        </AddTask>
      </TasksContents>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);
