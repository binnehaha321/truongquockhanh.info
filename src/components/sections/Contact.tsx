"use client";

import { useState } from "react";
import { Copy, Mail, Phone } from "lucide-react";
// import Link from 'next/link';

import SocialIcons from "@/components/data-display/SocialIcon";
import Tag from "@/components/data-display/Tag";
import IconButton from "@/components/general/IconButton";
import Typography from "@/components/general/Typography";
import Container from "@/components/layout/Container";
import useWindowSize from "@/hooks/useWindowSize";
import { copyTextToClipboard } from "@/lib/utils";
import Link from "../navigation/Link";

let email = "workhanh79@gmail.com";
let phone = "+84 902340111";

type CopyValue = "email" | "phone";

const ContactSection = () => {
	const { width } = useWindowSize();
	const [isCopied, setIsCopied] = useState(false);
	const [copiedValueType, setCopiedValueType] = useState<CopyValue | null>(
		null
	);

	const handleCopyClick = async (text: string, type: CopyValue) => {
		try {
			await copyTextToClipboard(text);
			setIsCopied(true);
			setCopiedValueType(type);
			let timoutId: any = setTimeout(() => {
				setIsCopied(false);
				setCopiedValueType(null);
				clearTimeout(timoutId);
			}, 1500);
		} catch (error) {
			setIsCopied(false);
			setCopiedValueType(null);
			alert("Unable to copy!");
		}
	};

	const handleReplacePhone = (phone: string) => phone.replace(" ", "");

	return (
		<Container id="contact">
			<div className="flex flex-col items-center gap-4">
				<div className="self-center">
					<Tag label="Get in touch" />
				</div>
				<Typography variant="subtitle" className="max-w-xl text-center">
					What’s next? Feel free to reach out to me if you are looking for a
					developer, have a query, or simply want to connect.
				</Typography>
			</div>

			<div className="flex flex-col items-center gap-6 md:gap-12">
				<div className="flex flex-col items-center md:gap-4">
					<div className="flex items-center gap-4 md:gap-5">
						<Mail className="h-6 w-6 md:h-8 md:w-8" />
						<Link href={`mailto:${email}`}>
							<Typography className="text-[24px] font-bold">{email}</Typography>
						</Link>
						<IconButton
							aria-label="Copy email"
							size={width && width < 768 ? "md" : "lg"}
							onClick={() => handleCopyClick(email, "email")}
							showTooltip={isCopied && copiedValueType === "email"}
							tooltipText="Copied!"
						>
							<Copy />
						</IconButton>
					</div>
					<div className="flex items-center gap-4 md:gap-5">
						<Phone className="h-6 w-6 md:h-8 md:w-8" />
						<Link href={`tel:${phone.replace(" ", "")}`}>
							<Typography className="text-[24px] font-bold">{phone}</Typography>
						</Link>
						<IconButton
							aria-label="Copy phone number"
							size={width && width < 768 ? "md" : "lg"}
							onClick={() => {
								const phoneVal = handleReplacePhone(phone);
								handleCopyClick(phoneVal, "phone");
							}}
							showTooltip={isCopied && copiedValueType === "phone"}
							tooltipText="Copied!"
						>
							<Copy />
						</IconButton>
					</div>
				</div>
				<div className="flex flex-col items-center gap-2">
					<Typography className="text-center">
						You may also find me on these platforms!
					</Typography>
					<SocialIcons />
				</div>
			</div>
		</Container>
	);
};

export default ContactSection;
