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
		"block w-full rounded-md border-gray-200 px-4 py-3 text-sm focus:border-emerald-500 focus:ring-emerald-500 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400"

	const mergeClasses: string = twMerge([baseClasses, className])

	return (
		<div className="max-w-sm space-y-3">
			{label && (
				<label className="mb-2 block text-sm font-medium dark:text-white">
					{label}
				</label>
			)}
			<input {...props} className={mergeClasses} />
			{description && (
				<p className="mt-2 text-sm text-gray-500">{description}</p>
			)}
		</div>
	)
}
