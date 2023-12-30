import { SiLinkedin, SiGithub } from "react-icons/si"

export default function App() {
	return (
		<div className="relative min-h-screen bg-white">
			{/* Nav Section */}
			<header className="sticky top-0 z-50 w-full border-b bg-white">
				<div className="flex h-16 items-center px-10 sm:px-16 lg:px-44">
					<div className="mx-auto w-full max-w-3xl space-y-20">
						<div className="flex justify-between">
							<div className="flex flex-1 items-center justify-start">
								<a
									href="/"
									className="inline-flex h-10 items-center justify-center text-lg font-bold text-gray-800"
								>
									LandUI
								</a>
							</div>
							<div className="flex flex-1 items-center justify-end">
								<nav className="flex items-center space-x-1">
									<a
										href="https://www.linkedin.com/in/landon-hawes-93b642246/"
										className="h-10 w-10  p-2 text-gray-800 hover:text-[#0066ff]"
									>
										<SiLinkedin className="h-full w-full" />
									</a>
									<a
										href="https://github.com/LandonHawes?tab=repositories"
										className="h-10 w-10  p-2 text-gray-800 hover:text-[#4078c0]"
									>
										<SiGithub className="h-full w-full" />
									</a>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</header>
			{/* Main */}
			<main className="p-10 sm:px-16 lg:px-44">
				<div className="mx-auto max-w-3xl space-y-20">
					<header>
						<h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
							Name
						</h1>
						<p className="mt-2 text-lg text-gray-800">Descrip</p>
					</header>
					<div className="space-y-10 md:space-y-16">
						<div>
							<h2 className="text-lg font-bold text-gray-800">Section</h2>
							<p className="mt-1  text-gray-600">Section Descrip</p>
							<div className="mt-3">
								<div className="flex flex-col rounded-xl border p-6 shadow-sm">
									<div className="flex flex-wrap gap-2">
										<div className="bg-blue-500/50 p-3">Component1</div>
										<div className="bg-blue-500/50 p-3">Component2</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<h2 className="text-lg font-bold text-gray-800">Section</h2>
							<p className="mt-1  text-gray-600">Section Descrip</p>
							<div className="mt-3">
								<div className="flex flex-col rounded-xl border p-6 shadow-sm">
									<div className="flex flex-wrap gap-2">
										<div className="bg-blue-500/50 p-3">Component1</div>
										<div className="bg-blue-500/50 p-3">Component2</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<header>
						<h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
							Name
						</h1>
						<p className="mt-2 text-lg text-gray-800">Descrip</p>
					</header>
					<div className="space-y-10 md:space-y-16">
						<div>
							<h2 className="text-lg font-bold text-gray-800">Section</h2>
							<p className="mt-1  text-gray-600">Section Descrip</p>
							<div className="mt-3">
								<div className="flex flex-col rounded-xl border p-6 shadow-sm">
									<div className="flex flex-wrap gap-2">
										<div className="bg-blue-500/50 p-3">Component1</div>
										<div className="bg-blue-500/50 p-3">Component2</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<h2 className="text-lg font-bold text-gray-800">Section</h2>
							<p className="mt-1  text-gray-600">Section Descrip</p>
							<div className="mt-3">
								<div className="flex flex-col rounded-xl border p-6 shadow-sm">
									<div className="flex flex-wrap gap-2">
										<div className="bg-blue-500/50 p-3">Component1</div>
										<div className="bg-blue-500/50 p-3">Component2</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
