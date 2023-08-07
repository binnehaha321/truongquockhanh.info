import { PROJECTS } from "@/lib/data";
import ProjectDetails from "@/components/data-display/ProjectDetails";
import Tag from "@/components/data-display/Tag";
import Typography from "@/components/general/Typography";
import Container from "@/components/layout/Container";

const WorkSection = () => {
	return (
		<Container id="work">
			<div className="flex flex-col items-center gap-4">
				<div className="self-center">
					<Tag label="Work" />
				</div>
				<Typography variant="subtitle" className="max-w-xl text-center">
					Some of the noteworthy projects I have built:
				</Typography>
			</div>

			{PROJECTS?.map((project, index) => (
				<ProjectDetails
					key={index}
					{...project}
					layoutType={index % 2 === 0 ? "default" : "reverse"}
				/>
			))}
		</Container>
	);
};

export default WorkSection;
