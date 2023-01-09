import AdministratorPage from "@pages/AdministratorPage";
import AuthPage from "@pages/AuthPage";
import CleanerPage from "@pages/CleanerPage";
import ServicePage from "@pages/ServicePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AuthPage />} />
				<Route path="/administrator" element={<AdministratorPage />} />
				<Route path="/cleaner" element={<CleanerPage />} />
				<Route path="/service" element={<ServicePage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
