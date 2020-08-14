import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewAccount = () => {

  //states
  const [user, saveUser] = useState({
	username: '',
	email: '',
	password: '',
	checkpass: ''
  });

  //extrar del registro
  const {username, email, password, checkpass} = user;

  const onChange = e => {
	saveUser({
	  ...user,
	  [e.target.name] : e.target.value
	});
  } 

  const onSubmit = e => {
	e.preventDefault();
	//validar
	
	//pass minimo 6 char
	
	//password = checkpass

	//registrar (pasarlo al action)
  }

  return (
	<div className="form-usuario">
	  <div className="contenedor-form sombra-dark">
		<h1>Register</h1>
		<form
		  onSubmit={onSubmit}
		>
		  <div className="campo-form">
			<label htmlFor="text">Username</label>
			<input 
			  type="text"
			  id="username"
			  name="username"
			  placeholder="Username"
			  value={username}
			  onChange={onChange}
			/>
		  </div>
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
			<label htmlFor="checkpass">Confirm Password</label>
			<input 
			  type="passtord"
			  id="checkpass"
			  name="checkpass"
			  placeholder="*******"
			  value={checkpass}
			  onChange={onChange}
			/>
		  </div>
		  <div className="campo-form">
			<input type="submit" className="btn btn-primario btn-block" value="Register" />
		  </div>
		</form>
		<Link to={'/'} className="enlace-cuenta">
		  Login
		</Link>
	  </div>
	</div>
  );
}

export default NewAccount;
