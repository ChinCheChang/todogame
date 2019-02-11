import React, {Component} from 'react';
import { connect } from 'react-redux';

import { TasksContents, AddTask, InputTitle, AddButton, IconContainer } from '../components/taskPageStyle';
import { createTask, toggleTask, deleteTask, updateTask } from '../actions';

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateTask: (title, authorid, id) => dispatch(createTask(title, authorid, id)),
    onToggleTask: (taskId) => dispatch(toggleTask(taskId)),
    onDeleteTask: (taskId) => dispatch(deleteTask(taskId)),
    onUpdateTask: (taskId, text) => dispatch(updateTask(taskId, text))
  }
}

class TasksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: 0,
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
    const { onCreateTask, user } = this.props;
    if (this.state.createTaskTitle) {
      fetch('https://guarded-dusk-16440.herokuapp.com//tasks', {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
          title: this.state.createTaskTitle,
          contents: '',
          authorid: user.id
        })
      })
        .then(res => res.json())
        .then(task => {
          if( task === 'add task error' ) throw(task);
          onCreateTask(this.state.createTaskTitle, user.id, task.id)
          this.setState({
            createTaskTitle: ''
          })
        })
        .catch(err => console.log(err))
    }
  }

  UpdateTask = (taskid, request, type) => {
    fetch('https://guarded-dusk-16440.herokuapp.com//tasks', {
      method: 'put',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        taskid: taskid,
        request: request
      })
    })
      .then(res => res.json())
      .then(task => {
        if( task === 'update error' ) throw(task);
      })
      .catch(err => console.log(err))
    if(type === 'updateTitle') {this.props.onUpdateTask(taskid, request.title)}
    else {this.props.onToggleTask(taskid)}
  }

  render() {
    const { createTaskTitle, focused, focusedContents } = this.state;
    const { tasks, onDeleteTask } = this.props;
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
                  <span>{task.title}</span>
                )
              }
              <IconContainer completed={task.completed}>
                <i onClick={() => {this.UpdateTask(task.id ,{completed: !task.completed}, 'toggleTask')}} className="far fa-check-circle"></i>
                <i onClick={() => {onDeleteTask(task.id)}} className="far fa-trash-alt"></i>
                {
                  focused === task.id ? (
                    <i onClick={() => this.UpdateTask(task.id ,{title: focusedContents}, 'updateTitle')} className="fas fa-plus"></i>
                  ) : (
                    null
                  )
                }
                {
                  focused === task.id ? (
                    <i onClick={() => {this.onFocusedTask(0, '')}} className="fas fa-search-minus"></i>
                  ) : (
                    <i onClick={() => {this.onFocusedTask(task.id, task.title)}} className="fas fa-ellipsis-v"></i>
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
