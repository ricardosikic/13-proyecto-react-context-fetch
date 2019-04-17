import React, { Fragment } from "react";

import { MiContexto } from "./contexto/context";

export class User extends React.Component {
  render() {
    return (
      <div>
        <h1>Lista de Usuarios</h1>
        <ul>
          <MiContexto.Consumer>
            {valueState => {
              return valueState.users.map((u, i) => {
                return <li key={i}>{u.name}</li>;
              });
            }}
          </MiContexto.Consumer>
        </ul>
      </div>
    );
  }
}
