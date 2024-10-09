"use client";

import { useCallback, useEffect } from "react";

import { TextFieldClientProps } from "payload";

import {
	useField,
	useFieldProps,
	Button,
	TextInput,
	FieldLabel,
	useFormFields,
	useForm,
} from "@payloadcms/ui";

import { formatSlug } from "@/payload/fields/slug/hooks/formatSlug";

import "@/payload/fields/slug/index.scss";

type SlugComponentProps = {
	fieldToUse: string;
	checkboxFieldPath: string;
} & TextFieldClientProps;

export const SlugComponent = ({
	field,
	fieldToUse,
	checkboxFieldPath: checkboxFieldPathFromProps,
}: SlugComponentProps) => {
	const { label } = field;
	const { path, readOnly: readOnlyFromProps } = useFieldProps();

	const checkboxFieldPath = path.includes(".")
		? `${path}.${checkboxFieldPathFromProps}`
		: checkboxFieldPathFromProps;

	const { value, setValue } = useField<string>({ path });

	const { dispatchFields } = useForm();

	// the value of the checkbox
	// we're using separate useFormFields to minimise re-renders
	const checkboxValue = useFormFields(([fields]) => {
		return fields[checkboxFieldPath]?.value as string;
	});

	// the value of the field we're listening to for the slug
	const targetFieldValue = useFormFields(([fields]) => {
		return fields[fieldToUse]?.value as string;
	});

	useEffect(() => {
		if (checkboxValue) {
			if (targetFieldValue) {
				const formattedSlug = formatSlug(targetFieldValue);

				if (value !== formattedSlug) setValue(formattedSlug);
			} else {
				if (value !== "") setValue("");
			}
		}
	}, [targetFieldValue, checkboxValue, setValue, value]);

	const handleLock = useCallback(
		(e: any) => {
			e.preventDefault();

			dispatchFields({
				type: "UPDATE",
				path: checkboxFieldPath,
				value: !checkboxValue,
			});
		},
		[checkboxValue, checkboxFieldPath, dispatchFields],
	);

	const readOnly = readOnlyFromProps || checkboxValue;

	return (
		<div className="field-type slug-field-component">
			<div className="label-wrapper">
				<FieldLabel field={field} htmlFor={`field-${path}`} label={label} />

				<Button className="lock-button" buttonStyle="none" onClick={handleLock}>
					{checkboxValue ? "Unlock" : "Lock"}
				</Button>
			</div>

			<TextInput
				value={value}
				onChange={setValue}
				path={path}
				readOnly={Boolean(readOnly)}
			/>
		</div>
	);
};
