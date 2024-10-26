import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Error } from "@/payload/blocks/forms/error";
import { Width } from "@/payload/blocks/forms/width";

import type { EmailField } from "@payloadcms/plugin-form-builder/types";
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from "react-hook-form";

export const Email = ({
	name,
	defaultValue,
	errors,
	label,
	register,
	required: requiredFromProps,
	width,
}: EmailField & {
	errors: Partial<
		FieldErrorsImpl<{
			[x: string]: any;
		}>
	>;
	register: UseFormRegister<FieldValues>;
}) => {
	return (
		<Width width={width}>
			<Label htmlFor={name}>{label}</Label>

			<Input
				defaultValue={defaultValue}
				id={name}
				type="text"
				{...register(name, { pattern: /^\S[^\s@]*@\S+$/, required: requiredFromProps })}
			/>

			{requiredFromProps && errors[name] && <Error />}
		</Width>
	);
};
