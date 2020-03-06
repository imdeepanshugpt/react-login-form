import React, { useState } from 'react';

const App = () => {
  const [formValues, setFormValues] = useState(undefined);
  const style = {
    display: 'table-caption',
    margin: '50%',
    padding: '10%'
  }
  function submitForm(event) {
    setFormValues({ email: event.target[0].value, password: event.target[1].value })
    event.preventDefault();
  }
  return (
    <div className="App" style={style}>
      <h1>Login </h1>
      <form onSubmit={(event) => submitForm(event)}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <input type="submit" value="Submit" />
      </form>
      {
        formValues ?
          <div>
            <label>{formValues.email}</label>
            <br />
            <label>{formValues.password}</label>
          </div >
          : ''

      }
    </div>
  );
}

export default App;
