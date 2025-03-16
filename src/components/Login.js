import React, { useState, useEffect } from "react";
import { database } from "../firebaseConfig";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-database.js";

const usersRef = ref(database, 'users');

let users_list = [];

onValue(usersRef, (snapshot) => {
  const users = snapshot.val();
  
});

const Login = () => {
  return (
    <div>
        <h1>Login</h1>
        <div className="login">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <select id="name" name="name">
                    <option value={null}>-- Select Name --</option>
                </select>
            </div>
            <div className="form-group password">
                <label htmlFor="loginPassword">Password:</label>
                <input id="loginPassword" type="password" autoComplete="off" placeholder="Enter your password" />
            </div>
            <div className="form-group password" style={{ flexDirection: 'row', alignItems: 'center' }}>
                <input id="showPassword" type="checkbox" />
                <label htmlFor="showPassword" style={{ fontSize: '1rem' }}>Show Password</label>
            </div>
            <button id="loginButton">Login</button>
        </div>
    </div>
  );
};

export default Login;
