import { Container } from "../components/site/Container"

export const HomePage = ({ children }: { children?: React.ReactNode }) => {
	return (
		<Container title="LandComponents" description="Many Components">
			{children}
		</Container>
	)
}
