import { Container } from "../components/site/Container"
import { Section } from "../components/site/Section"
import { BlockLinkCard, ContentCard } from "../components/library/Card"
import { SiVite, SiNextdotjs } from "react-icons/si"

export const CardPage = () => {
	return (
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
	)
}
