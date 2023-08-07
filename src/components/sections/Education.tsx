import Container from "../layout/Container";
import Tag from "../data-display/Tag";
import { EDUCATIONS } from "@/lib/data";
import EducationDetail from "../data-display/EducationDetail";

const Education = () => {
	return (
		<Container className="bg-gray-50">
			<div className="self-center">
				<Tag label="Education" />
			</div>
			<div className="grid md:grid-cols-2 md:grid-rows-none gap-6 xl:gap-3">
				{EDUCATIONS?.map((education, index) => (
					<EducationDetail {...education} key={index} />
				))}
			</div>
		</Container>
	);
};

export default Education;
