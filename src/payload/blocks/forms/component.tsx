"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { RichText } from "@/components/rich-text";

import { buildInitialFormState } from "@/payload/blocks/forms/build-Initial-form-state";
import { fields } from "@/payload/blocks/forms/fields";

import type { Form as FormType } from "@payloadcms/plugin-form-builder/types";
export type Value = unknown;

export type Data = {
	[key: string]: Property | Property[];
};

export type Property = {
	[key: string]: Value;
};

export type FormBlockType = {
	blockName?: string;
	blockType?: "formBlock";
	enableIntro: boolean;
	form: FormType;
	introContent?: {
		[k: string]: unknown;
	}[];
};

const publicURL = process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_SERVER_URL_DEV! : process.env.NEXT_PUBLIC_SERVER_URL_PRD!;

export const FormBlock = () => {
	return <Container className="my-16">The form goes here</Container>;
};
