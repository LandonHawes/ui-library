import { Container } from "../components/site/Container"
import { Section } from "../components/site/Section"
import { Input } from "../components/library/Input"

export const InputPage = () => {
	return (
		<Container
			title="Inputs"
			description="An input is a field used to elicit a response from a user."
		>
			<Section
				id="input-basic"
				title="Basic"
				description="Basic input with a placeholder."
			>
				{/* basic input */}
				<Input type="text" placeholder="Placeholder" />
				{/* disabled basic */}
				<Input type="text" placeholder="Placeholder but disabled" disabled />
			</Section>
			<Section id="input-label" title="Label" description="Input with a label.">
				{/* label input */}
				<Input type="email" label="Email" placeholder="Enter Email" />
			</Section>
			<Section
				id="input-description"
				title="Description"
				description="Input with a description."
			>
				{/* input with description */}
				<Input
					type="password"
					label="Password"
					placeholder="Enter Password"
					description="We don't share your password."
				/>
			</Section>
		</Container>
	)
}
