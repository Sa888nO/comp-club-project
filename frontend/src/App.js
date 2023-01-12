import AdministratorPage from "@pages/AdministratorPage";
import AuthPage from "@pages/AuthPage";
import CleanerPage from "@pages/CleanerPage";
import ManagerPage from "@pages/ManagerPage";
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
				<Route path="/manager" element={<ManagerPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
