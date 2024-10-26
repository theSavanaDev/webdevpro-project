import { Checkbox } from "@/payload/blocks/forms/checkbox";
import { Country } from "@/payload/blocks/forms/country";
import { Email } from "@/payload/blocks/forms/email";
import { Message } from "@/payload/blocks/forms/message";
import { Number } from "@/payload/blocks/forms/number";
import { Select } from "@/payload/blocks/forms/select";
import { State } from "@/payload/blocks/forms/state";
import { Text } from "@/payload/blocks/forms/text";
import { Textarea } from "@/payload/blocks/forms/textarea";

export const fields = {
	checkbox: Checkbox,
	country: Country,
	email: Email,
	message: Message,
	number: Number,
	select: Select,
	state: State,
	text: Text,
	textarea: Textarea,
};
