import AdministratorPage from "@pages/AdministratorPage";
import AuthPage from "@pages/AuthPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AuthPage />} />
				<Route path="/administrator" element={<AdministratorPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
