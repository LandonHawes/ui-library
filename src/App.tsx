import { Layout } from "./components/site/Layout"
import { InputPage } from "./routes/Input"
import { CardPage } from "./routes/Card"
import { ButtonPage } from "./routes/Button"
import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom"
import { HomePage } from "./routes/Home"

export default function App() {
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	)
}

export function AppRoutes() {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<Layout>
						<Outlet />
					</Layout>
				}
			>
				<Route index={true} element={<HomePage />} />
				<Route path="button" element={<ButtonPage />} />
				<Route path="card" element={<CardPage />} />
				<Route path="input" element={<InputPage />} />
			</Route>
		</Routes>
	)
}
