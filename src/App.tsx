import { Section } from "./components/site/Section"
import { Container } from "./components/site/Container"
import { Layout } from "./components/site/Layout"
import { Button } from "./components/library/Button"
import { BlockLinkCard, ContentCard } from "./components/library/Card"
import { SiVite, SiNextdotjs } from "react-icons/si"
import { Input } from "./components/library/Input"

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
					<Button
						colors={{
							bg: "bg-red-500",
							hoverBg: "hover:bg-red-600",
							focusRing: "focus:ring-red-500",
						}}
					>
						Yes, delete
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-red-500",
							hoverBg: "hover:bg-red-500",
							focusRing: "focus:ring-red-500",
							hoverBorder: "hover:border-red-500",
						}}
					>
						Unsubscribe
					</Button>
					<Button
						variant="tertiary"
						colors={{
							text: "text-gray-500",
							hoverText: "hover:text-gray-700",
							focusRing: "focus:ring-gray-500",
						}}
					>
						Remove
					</Button>
				</Section>
			</Container>

			<Container
				title="Card"
				description="A card is a flexible and extensible content container"
			>
				<Section
					title="Simple"
					description="Can display content and links that can be selected."
				>
					{/* simple Card */}
					<ContentCard
						title="Card Title"
						subtitle="Card subtitle"
						plaintext="Quick example text to build on the card title and make up the bulk of the card's content."
						link={{ url: "#", text: "Card Link" }}
					></ContentCard>
				</Section>
				<Section
					title="Simple with a header and footer"
					description="Can display content and links that can be selected including a header and footer."
				>
					{/* simple Card */}
					<ContentCard
						header="Highlighted Header"
						title="Card Title"
						subtitle="Card subtitle"
						plaintext="Quick example text to build on the card title and make up the bulk of the card's content."
						link={{ url: "#", text: "Card Link" }}
					></ContentCard>
					<ContentCard
						title="Card Title"
						subtitle="Card subtitle"
						plaintext="Quick example text to build on the card title and make up the bulk of the card's content."
						link={{ url: "#", text: "Card Link" }}
						footer="Highlighted Footer"
					></ContentCard>
				</Section>
				<Section
					title="Block Link Cards"
					description="A card that acts as a link."
				>
					<BlockLinkCard url="https://vitejs.dev/" text="Vite">
						<SiVite className="h-10 w-10" />
					</BlockLinkCard>
					<BlockLinkCard url="https://nextjs.org/" text="Nextjs">
						<SiNextdotjs className="h-10 w-10" />
					</BlockLinkCard>
				</Section>
			</Container>
			<Container
				title="Inputs"
				description="An input is a field used to elicit a response from a user."
			>
				<Section title="Basic" description="Basic input with a placeholder.">
					{/* basic input */}
					<Input type="text" placeholder="Placeholder" />
					{/* disabled basic */}
					<Input type="text" placeholder="Placeholder but disabled" disabled />
				</Section>
				<Section title="Label" description="Input with a label.">
					{/* label input */}
					<Input type="email" label="Email" placeholder="Enter Email" />
				</Section>
				<Section title="Description" description="Input with a description.">
					{/* input with description */}
					<Input
						type="password"
						label="Password"
						placeholder="Enter Password"
						description="We don't share your password."
					/>
				</Section>
			</Container>
		</Layout>
	)
}
