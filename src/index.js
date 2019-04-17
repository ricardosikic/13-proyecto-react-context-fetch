import React from "react";
import ReactDOM from "react-dom";
import { User } from "./users";
import MiProvider from "./contexto/context";

class App extends React.Component {
  render() {
    return (
      <MiProvider>
        <User />
      </MiProvider>
    );
  }
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
