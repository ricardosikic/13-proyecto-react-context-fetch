import React from "react";

export const MiContexto = React.createContext();

class MiProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };

    this.getUsers = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(resp => resp.json())
        .then(data => {
          this.setState({
            users: data
          });
          console.log(this.state.users[0].name);
        });
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <MiContexto.Provider value={this.state}>
        {this.props.children}
      </MiContexto.Provider>
    );
  }
}

export default MiProvider;
