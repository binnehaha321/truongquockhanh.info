import type { StaticImageData } from 'next/image'

export type TechDetails = {
	logo: string | StaticImageData
	darkModeLogo?: string | StaticImageData
	label: string
	url: string
}

export type ExperienceDetails = {
	logo: string | StaticImageData
	darkModeLogo?: string | StaticImageData
	logoAlt: string
	position: string
	currentlyWorkHere?: boolean
	startDate: Date
	endDate?: Date
	summary: string[]
}

export type ProjectDetails = {
	name: string
	description: string
	url: string
	previewImage: string | StaticImageData
	srcForDarkMode?: string | StaticImageData
	technologies: string[]
}

export type EducationDetail = {
	name: string
	logo: string | StaticImageData
	logoDark?: string | StaticImageData
	program: string
	startDate: Date
	endDate: Date
	link: string
	description: string
	gpa?: number
}

export type AwardCarousel = {
	name: string
	src: string | StaticImageData
	link: string
}
