import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  //State para iniciar sesion
  const [user, saveUser] = useState({
	email: '',
	password: ''
  });

  //extrar del usuario
  const {email, password} = user;

  const onChange = e => {
	saveUser({
	  ...user,
	  [e.target.name] : e.target.value
	});
  }

  //Send Login
  const onSubmit = e => {
	e.preventDefault();
	//validar info

	//pasar la info
  }

  return (
	<div className="form-usuario">
	  <div className="contenedor-form sombra-dark">
		<h1>Login</h1>
		<form
		  onSubmit={onSubmit}
		>
		  <div className="campo-form">
			<label htmlFor="email">Email</label>
			<input 
			  type="email"
			  id="email"
			  name="email"
			  placeholder="Email"
			  value={email}
			  onChange={onChange}
			/>
		  </div>
		  <div className="campo-form">
			<label htmlFor="password">Password</label>
			<input 
			  type="password"
			  id="password"
			  name="password"
			  placeholder="*******"
			  value={password}
			  onChange={onChange}
			/>
		  </div>
		  <div className="campo-form">
			<input type="submit" className="btn btn-primario btn-block" value="login"/>
		  </div>
		</form>
		<Link to={'/new-account'} className="enlace-cuenta">
		  Register Now
		</Link>
	  </div>
	</div>
  );
}

export default Login;
