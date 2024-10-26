import { Controller } from "react-hook-form";

import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Error } from "@/payload/blocks/forms/error";
import { Width } from "@/payload/blocks/forms/width";
import { stateOptions } from "@/payload/blocks/forms/state/options";

import type { StateField } from "@payloadcms/plugin-form-builder/types";
import type { Control, FieldErrorsImpl, FieldValues } from "react-hook-form";

export const State = ({
	name,
	control,
	errors,
	label,
	required,
	width,
}: StateField & {
	control: Control<FieldValues, any>;
	errors: Partial<
		FieldErrorsImpl<{
			[x: string]: any;
		}>
	>;
}) => {
	return (
		<Width width={width}>
			<Label htmlFor={name}>{label}</Label>

			<Controller
				control={control}
				defaultValue=""
				name={name}
				render={({ field: { onChange, value } }) => {
					const controlledValue = stateOptions.find((t) => t.value === value);

					return (
						<Select onValueChange={(val) => onChange(val)} value={controlledValue?.value}>
							<SelectTrigger className="w-full" id={name}>
								<SelectValue placeholder={label} />
							</SelectTrigger>
							<SelectContent>
								{stateOptions.map(({ label, value }) => {
									return (
										<SelectItem key={value} value={value}>
											{label}
										</SelectItem>
									);
								})}
							</SelectContent>
						</Select>
					);
				}}
				rules={{ required }}
			/>

			{required && errors[name] && <Error />}
		</Width>
	);
};
