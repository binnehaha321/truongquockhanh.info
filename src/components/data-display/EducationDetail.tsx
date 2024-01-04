'use client'
import Image from 'next/image'
import { useTheme } from 'next-themes'

import { EducationDetail as EducationDetailProps } from '@/lib/types'

import Card from '../layout/Card'
import Link from '../navigation/Link'
import Typography from '../general/Typography'
import Tag from './Tag'

const dateFormatOptions: Intl.DateTimeFormatOptions = {
	year: 'numeric',
	month: 'short'
}

const EducationDetail = ({
	name,
	program,
	startDate,
	endDate,
	description,
	link,
	logo,
	logoDark,
	gpa
}: EducationDetailProps) => {
	const { theme } = useTheme()
	const finalSrc = theme === 'dark' ? logoDark || logo : logo

	return (
		<Card className='mx-auto flex w-full max-w-4xl flex-col p-8 md:gap-8 lg:gap-4 h-fit md:h-full'>
			<Link
				href={link}
				noCustomization
				externalLink
			>
				<Image
					src={finalSrc}
					alt={`Logo ${name}`}
					className='max-h-[150px] w-full py-5 object-contain mx-auto rounded-xl shadow-lg bg-slate-50 transition-transform duration-500 md:hover:scale-105'
				/>
			</Link>
			<div>
				<Typography
					variant='subtitle'
					className='text-center my-3 font-bold'
				>
					{name}
				</Typography>
				<div className='grid md:grid-rows-none xl:grid-cols-5 gap-6 xl:gap-3 place-items-start'>
					<div className='grid xl:col-span-2 gap-1 mx-auto'>
						<Tag label={program} />
						<Typography
							variant='body3'
							className='text-center mt-1'
						>
							{new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
								startDate
							)}{' '}
							-{' '}
							{new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
								endDate
							)}
						</Typography>
					</div>
					<div className='grid xl:col-span-3 gap-1'>
						<Typography>
							{description}
							<b>{gpa && ` (GPA: ${gpa}/4)`}</b>
						</Typography>
					</div>
				</div>
			</div>
		</Card>
	)
}

export default EducationDetail
