import { Github, Linkedin, Facebook } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoJest from "/public/images/logos/icon-jest.svg";
import LogoPostman from "/public/images/logos/icon-postman.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoBootstrap from "/public/images/logos/icon-bootstrap.svg";
import LogoAntd from "/public/images/logos/icon-antdesign.svg";
import LogoChakraUI from "/public/images/logos/icon-chakraui.svg";
import LogoChakraUIDark from "/public/images/logos/icon-chakraui-dark.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoGit from "/public/images/logos/icon-git.svg";
import LogoExpressjsLight from "/public/images/logos/logo-express-light.svg";
import LogoExpressjsDark from "/public/images/logos/logo-express-dark.svg";
import LogoCypressDark from "/public/images/logos/logo-cypress-dark.svg";
import LogoCypressLight from "/public/images/logos/logo-cypress-light.svg";
import LogoRadixuiLight from "/public/images/logos/logo-radixui-light.svg";
import LogoRadixuiDark from "/public/images/logos/logo-radixui-dark.svg";

import LogoGiraTech from "/public/images/logos/logo-gira.svg";
import LogoSplus from "/public/images/logos/logo-splus.svg";
import LogoLikelion from "/public/images/logos/logo-likelion.svg";
import LogoBtec from "public/images/logos/logo-btec.svg";

import LogoGreenwich from "/public/images/logos/logo-greenwich.svg";
import LogoKDU from "/public/images/logos/logo-kdu.svg";
import WorkHelli from "/public/images/work/work-helli.svg";
import WorkGWCMS from "/public/images/work/work-gw-cms.svg";
import WorkExpense from "/public/images/work/work-expense.svg";
import WorkPortfolioV1 from "/public/images/work/work-portfolio-v1.svg";

import {
	EducationDetail,
	ExperienceDetails,
	ProjectDetails,
	TechDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
	GITHUB: "https://github.com/binnehaha321",
	GITHUB_REPO: "https://github.com/binnehaha321/khanh-portfolio",
	LINKEDIN: "https://www.linkedin.com/in/tqk/",
	SOUNDCLOUD: "https://soundcloud.com/binneahihi",
};

export const NAV_LINKS = [
	{
		label: "About",
		href: "#about",
	},
	{
		label: "Experience",
		href: "#experience",
	},
	{
		label: "Work",
		href: "#work",
	},
	{
		label: "Contact",
		href: "#contact",
	},
];

export const SOCIAL_LINKS = [
	{
		icon: Github,
		url: "https://github.com/binnehaha321",
		name: "GitHub",
	},
	{
		icon: Linkedin,
		url: "https://www.linkedin.com/in/tqk/",
		name: "Linkedin",
	},
	{
		icon: Facebook,
		url: "https://www.facebook.com/binneahihi",
		name: "Facebook",
	},
];

export const TECHNOLOGIES: TechDetails[] = [
	{
		label: "Javascript",
		logo: LogoJavascript,
		url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
	},
	{
		label: "Typescript",
		logo: LogoTypescript,
		url: "https://www.typescriptlang.org/",
	},
	{
		label: "React",
		logo: LogoReact,
		url: "https://react.dev/",
	},
	{
		label: "Next.js",
		logo: LogoNextjs,
		url: "https://nextjs.org/",
	},
	{
		label: "Node.js",
		logo: LogoNodejs,
		url: "https://nodejs.org/en",
	},
	{
		label: "Express.js",
		logo: LogoExpressjsLight,
		darkModeLogo: LogoExpressjsDark,
		url: "https://expressjs.com/",
	},
	{
		label: "Cypress",
		logo: LogoCypressLight,
		darkModeLogo: LogoCypressDark,
		url: "https://www.cypress.io/",
	},
	{
		label: "Jest",
		logo: LogoJest,
		url: "https://jestjs.io/",
	},
	{
		label: "Postman",
		logo: LogoPostman,
		url: "https://www.postman.com/",
	},
	{
		label: "PostgreSQL",
		logo: LogoPostgreSQL,
		url: "https://www.postgresql.org/",
	},
	{
		label: "MongoDB",
		logo: LogoMongoDB,
		url: "https://www.mongodb.com/",
	},
	{
		label: "Sass/Scss",
		logo: LogoSass,
		url: "https://sass-lang.com/",
	},
	{
		label: "Tailwindcss",
		logo: LogoTailwindcss,
		url: "https://tailwindcss.com/",
	},
	{
		label: "Bootstrap",
		logo: LogoBootstrap,
		url: "https://getbootstrap.com/",
	},
	{
		label: "Ant Design",
		logo: LogoAntd,
		url: "https://ant.design/",
	},
	{
		label: "ChakraUI",
		logo: LogoChakraUI,
		darkModeLogo: LogoChakraUIDark,
		url: "https://chakra-ui.com/",
	},
	{
		label: "Radix UI",
		logo: LogoRadixuiLight,
		darkModeLogo: LogoRadixuiDark,
		url: "https://www.radix-ui.com/",
	},
	{
		label: "Figma",
		logo: LogoFigma,
		url: "https://www.figma.com/",
	},
	{
		label: "Git",
		logo: LogoGit,
		url: "https://git-scm.com/",
	},
];

export const EXPERIENCES: ExperienceDetails[] = [
	{
		logo: LogoGiraTech,
		logoAlt: "Gira Technology logo",
		position: "Frontend Developer",
		startDate: new Date(2023, 1),
		currentlyWorkHere: true,
		summary: [
			"Worked for various clients B2C and B2B.",
			"Design UI/UX",
			"Designed architecture projects (frontend).",
			"Worked with a variety of technologies, including React.js, Typescript, Redux, Ant Design, Cypress, and others.",
		],
	},
	{
		logo: LogoBtec,
		logoAlt: "BTEC logo",
		position: "Computer Science Lecturer",
		startDate: new Date(2023, 5),
		currentlyWorkHere: true,
		summary: [
			"Acted as foundation programming lecturer.",
			"Brainstormed new ideas and organized workshops and after-school activities.",
		],
	},
	{
		logo: LogoLikelion,
		logoAlt: "LikeLion logo",
		position: "Frontend Lecturer",
		startDate: new Date(2022, 8),
		endDate: new Date(2023, 5),
		summary: [
			"Worked as a Front-end trainer.",
			"Training: HTML5, CSS3, Bootstrap 5, JavaScript (ES6), React 18, RestAPI, Ant Design.",
		],
	},
	{
		logo: LogoSplus,
		logoAlt: "Splus Software logo",
		position: "Frontend Intern",
		startDate: new Date(2021, 10),
		endDate: new Date(2022, 5),
		summary: [
			"Worked as a Front-end intern developer.",
			"Read and converted the design in Adobe XD, AI, PSD to interface",
			"Worked with Japanese clients.",
			"Fixed bugs and maintained production.",
		],
	},
];

export const PROJECTS: ProjectDetails[] = [
	{
		name: "Helli.vn",
		description:
			"A platform for practicing IELTS writing, including both grading and giving feedback based on AI. This is an end-to-end product for those planning to earn an IELTS certificate.",
		url: "https://helli.vn",
		previewImage: WorkHelli,
		technologies: [
			"React",
			"Typescript",
			"Redux",
			"Redux Toolkit",
			"Redux Saga",
			"Ant Design",
			"LESS",
		],
	},
	{
		name: "UOG System",
		description:
			"A platform for managing the University of Greenwich Vietnam system, including students, courses, subjects, grades, staff, departments, etc. Moreover, this allows the Student Affair to remove manual interaction with RPA; it automatically uploads a CSV file and handles exceptions.",
		url: "https://greenwich-cms.vercel.app/",
		previewImage: WorkGWCMS,
		technologies: ["React", "JavaScript", "Ant Design", "Redux Toolkit"],
	},
	{
		name: "Family Expense",
		description:
			"A platform for controlling personal or family expenses monthly. This application calls the Google Spreadsheet API to interact with data (create, read, update, and delete).",
		url: "https://family-expense.vercel.app/",
		previewImage: WorkExpense,
		technologies: [
			"React",
			"Typescript",
			"Ant Design",
			"Google Spreadsheet API",
		],
	},
	{
		name: "My portfolio (v1)",
		description:
			"The first portfolio written with HTML5, SCSS, JavaScript, and Bootstrap 5 There are several valuable sections that I omitted in this second version.",
		url: "https://khanhtq-resume.vercel.app/",
		previewImage: WorkPortfolioV1,
		technologies: ["HTML5", "SCSS", "JavaScript", "Bootstrap 5"],
	},
];

export const EDUCATIONS: EducationDetail[] = [
	{
		name: "University of Greenwich Vietnam",
		logo: LogoGreenwich,
		program: "Computer Science",
		startDate: new Date(2019, 8),
		endDate: new Date(2023, 5),
		link: "https://greenwich.edu.vn/",
		description:
			"3.5 years at UOG are valuable experience for me. I was an insecure guy who never wanted to make more social connections until I was in college. Annually, I reflect on how I have been changing. Motivation, relationships, targets, and open space gave me an overview of the career.",
		gpa: 3.8,
	},
	{
		name: "University of Wollongong",
		logo: LogoKDU,
		program: "English Enhancement",
		startDate: new Date(2019, 10),
		endDate: new Date(2019, 11),
		link: "https://www.uow.edu.au/",
		description:
			"I had an overseas study exchange and visited a new culture, which has spread my vision remarkably.",
	},
];
