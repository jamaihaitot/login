import logo from "./logo.svg";
import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";

function App() {
	const adminUser = {
		email: "admin@admin.com",
		password: "admin123",
	};

	const [user, setUser] = useState({ name: "", email: "" });
	const [error, setError] = useState("");

	const Login = (details) => {
		console.log(details);
	};

	const Logout = () => {
		console.log("Logout");
	};

	return (
		<div className="App">
			<NavBar />
			Appheader
			<LoginForm />
		</div>
	);
}

export default App;
