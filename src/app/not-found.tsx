import Button from "@/components/general/Button";
import Typography from "@/components/general/Typography";
import Link from "@/components/navigation/Link";

export default function Custom404() {
	return (
		<div className="flex flex-col gap-6 items-center justify-center w-full h-full">
			<Typography variant="h2">404 - Page Not Found</Typography>
			<Link href="/">
				<Button>Go home</Button>
			</Link>
		</div>
	);
}
