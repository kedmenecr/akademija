import React, { Component } from 'react';

class App extends Component {
  state = {
    todos: []
  }


  componentDidMount() {
    try {
      fetch('http://localhost:9090/user')
        .then(res => res.json())
        .then((data) => {
          this.setState({ todos: data })
          console.log(this.state.todos)
        })
    } catch (error) {
      console.log('error', error)
    }
  }

  render() {

    return (
      <div className="container">
        <div className="col-xs-12">
          <h1>My Todos</h1>
          {this.state.todos.map((todo) => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{todo.userId}</h5>
                <h5 className="card-title">{todo.firstName}</h5>
                <h5 className="card-title">{todo.lastName}</h5>
                <h5 className="card-title">{todo.password}</h5>
                <h5 className="card-title">{todo.username}</h5>
                <h5 className="card-title">{todo.email}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default App;