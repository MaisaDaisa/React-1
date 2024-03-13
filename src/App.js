import "./App.css";
import Header from "./components/layout/Header";
import InputForm from "./components/layout/InputForm";

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<InputForm
					inputTypes={[
						{ type: "text", name: "name", label: "Name" },
						{ type: "email", name: "email", label: "Email" },
						{ type: "password", name: "password", label: "Password" },
						{ type: "date", name: "date", label: "Date" },
					]}
				/>
			</main>
		</div>
	);
}

export default App;
