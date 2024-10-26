import { Label } from "@/components/ui/label";
import { Textarea as TextAreaComponent } from "@/components/ui/textarea";

import { Error } from "@/payload/blocks/forms/error";
import { Width } from "@/payload/blocks/forms/width";

import type { TextField } from "@payloadcms/plugin-form-builder/types";
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from "react-hook-form";

export const Textarea = ({
	name,
	defaultValue,
	errors,
	label,
	register,
	required: requiredFromProps,
	rows = 3,
	width,
}: TextField & {
	errors: Partial<
		FieldErrorsImpl<{
			[x: string]: any;
		}>
	>;
	register: UseFormRegister<FieldValues>;
	rows?: number;
}) => {
	return (
		<Width width={width}>
			<Label htmlFor={name}>{label}</Label>

			<TextAreaComponent defaultValue={defaultValue} id={name} rows={rows} {...register(name, { required: requiredFromProps })} />

			{requiredFromProps && errors[name] && <Error />}
		</Width>
	);
};
