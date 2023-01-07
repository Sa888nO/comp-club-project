import AdministratorPage from "@pages/AdministratorPage";
import AuthPage from "@pages/AuthPage";
import CleanerPage from "@pages/CleanerPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AuthPage />} />
				<Route path="/administrator" element={<AdministratorPage />} />
				<Route path="/cleaner" element={<CleanerPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
