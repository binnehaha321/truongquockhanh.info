import HeroSection from "@/components/sections/Hero";
import ContactSection from "@/components/sections/Contact";
import AboutMeSection from "@/components/sections/About";
import SkillsSection from "@/components/sections/Skill";
import ExperienceSection from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import WorkSection from "@/components/sections/Work";

export default function Home() {
	return (
		<>
			<HeroSection />
			<AboutMeSection />
			<SkillsSection />
			<ExperienceSection />
			<WorkSection />
			<Education />
			<ContactSection />
		</>
	);
}
