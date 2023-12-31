import { Section } from "./components/site/Section"
import { Container } from "./components/site/Container"
import { Layout } from "./components/site/Layout"
import { Button } from "./components/library/Button"

export default function App() {
	return (
		<Layout>
			<Container
				title="Button"
				description="A button is a wdiget that enables users to trigger an action or event, such as submitting a form"
			>
				<Section title="Primary" description="Component">
					<Button>Default</Button>
					<Button disabled>Disabled</Button>
					<Button
						colors={{
							bg: "bg-amber-500",
							hoverBg: "hover:bg-amber-600",
							focusRing: "focus:ring-amber-500",
						}}
					>
						Amber
					</Button>
					<Button
						colors={{
							bg: "bg-rose-500",
							hoverBg: "hover:bg-rose-600",
							focusRing: "focus:ring-rose-500",
						}}
					>
						Rose
					</Button>
					<Button
						colors={{
							bg: "bg-fuchsia-500",
							hoverBg: "hover:bg-fuchsia-600",
							focusRing: "focus:ring-fuchsia-500",
						}}
					>
						Fuchsia
					</Button>
					<Button
						colors={{
							bg: "bg-indigo-500",
							hoverBg: "hover:bg-indigo-600",
							focusRing: "focus:ring-indigo-500",
						}}
					>
						Indigo
					</Button>
					<Button
						colors={{
							bg: "bg-[#1DA1F2]",
							hoverBg: "hover:bg-[#1a8cd8]",
							focusRing: "focus:ring-[#1a8cd8]",
						}}
					>
						Twitter Blue
					</Button>
				</Section>
				<Section title="Secondary" description="Component">
					<Button variant="secondary">Default</Button>
					<Button disabled variant="secondary">
						Disabled
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-amber-500",
							hoverBorder: "hover:border-amber-500",
							focusRing: "focus:ring-amber-500",
							hoverBg: "hover:bg-amber-500",
						}}
					>
						Amber
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-rose-500",
							hoverBorder: "hover:border-rose-500",
							focusRing: "focus:ring-rose-500",
							hoverBg: "hover:bg-rose-500",
						}}
					>
						Rose
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-fuchsia-500",
							hoverBorder: "hover:border-fuchsia-500",
							focusRing: "focus:ring-fuchsia-500",
							hoverBg: "hover:bg-fuchsia-500",
						}}
					>
						Fuchsia
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-indigo-500",
							hoverBorder: "hover:border-indigo-500",
							focusRing: "focus:ring-indigo-500",
							hoverBg: "hover:bg-indigo-500",
						}}
					>
						Indigo
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-[#1DA1F2]",
							hoverBorder: "hover:border-[#1a8cd8]",
							focusRing: "focus:ring-[#1a8cd8]",
							hoverBg: "hover:bg-[#1a8cd8]",
						}}
					>
						Twitter Blue
					</Button>
				</Section>
				<Section title="Tertiary" description="Component">
					<Button variant="tertiary">Default </Button>
					<Button disabled variant="tertiary">
						Disabled
					</Button>
					<Button
						variant="tertiary"
						colors={{
							text: "text-amber-500",
							hoverText: "hover:text-amber-700",
							focusRing: "focus:ring-amber-500",
						}}
					>
						Amber
					</Button>
					<Button
						variant="tertiary"
						colors={{
							text: "text-rose-500",
							hoverText: "hover:text-rose-700",
							focusRing: "focus:ring-rose-500",
						}}
					>
						Rose
					</Button>
					<Button
						variant="tertiary"
						colors={{
							text: "text-fuchsia-500",
							hoverText: "hover:text-fuchsia-700",
							focusRing: "focus:ring-fuchsia-500",
						}}
					>
						Fuchsia
					</Button>
					<Button
						variant="tertiary"
						colors={{
							text: "text-indigo-500",
							hoverText: "hover:text-indigo-700",
							focusRing: "focus:ring-indigo-500",
						}}
					>
						Indigo
					</Button>
					<Button
						variant="tertiary"
						colors={{
							text: "text-[#1DA1F2]",
							hoverText: "hover:text-[#1a8cd8]",
							focusRing: "focus:ring-[#1a8cd8]",
						}}
					>
						Twitter Blue
					</Button>
				</Section>
				<Section title="Destructive" description="Component">
					<div className="bg-blue-500/50 p-3">Component1</div>
					<div className="bg-blue-500/50 p-3">Component2</div>
				</Section>
			</Container>

			<Container title="Name with comp" description="Descrip with comp">
				<Section title="Section Heading using comp" description="Component">
					<div className="bg-blue-500/50 p-3">Component1</div>
					<div className="bg-blue-500/50 p-3">Component2</div>
				</Section>
				<Section title="Section Heading using comp" description="Component">
					<div className="bg-blue-500/50 p-3">Component1</div>
					<div className="bg-blue-500/50 p-3">Component2</div>
				</Section>
			</Container>

			<Container title="Name with comp" description="Descrip with comp">
				<Section title="Section Heading using comp" description="Component">
					<div className="bg-blue-500/50 p-3">Component1</div>
					<div className="bg-blue-500/50 p-3">Component2</div>
				</Section>
				<Section title="Section Heading using comp" description="Component">
					<div className="bg-blue-500/50 p-3">Component1</div>
					<div className="bg-blue-500/50 p-3">Component2</div>
				</Section>
			</Container>
		</Layout>
	)
}
