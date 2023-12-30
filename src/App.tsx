import { Section } from "./components/site/Section"
import { Container } from "./components/site/Container"
import { Layout } from "./components/site/Layout"

export default function App() {
	return (
		<Layout>
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
