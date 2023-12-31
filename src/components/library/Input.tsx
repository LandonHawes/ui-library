// Defined types for props
import { twMerge } from "tailwind-merge"

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label?: string
	description?: string
}

export const Input: React.FC<InputProps> = ({
	label,
	description,
	className,
	...props
}) => {
	// Base
	const baseClasses: string =
		"block w-full rounded-md border-gray-200 px-4 py-3 text-sm focus:border-emerald-500 focus:ring-emerald-500 disabled:pointer-events-none disabled:opacity-50"

	const mergeClasses: string = twMerge([baseClasses, className])

	return (
		<div>
			<input {...props} className={mergeClasses} />
		</div>
	)
}
