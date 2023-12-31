'use client'

import { TechDetails } from '@/lib/types'
import Typography from '@/components/general/Typography'
import Link from '@/components/navigation/Link'
import ImageWrapper from '@/components/data-display/ImageWrapper'

const TechDetails = ({ url, logo, darkModeLogo, label }: TechDetails) => {
	return (
		<div className='flex flex-col items-center gap-2'>
			<Link
				noCustomization
				href={url}
				externalLink
			>
				<ImageWrapper
					src={logo}
					srcForDarkMode={darkModeLogo}
					alt={label}
					className='transition-transform duration-300 md:hover:scale-110'
				/>
			</Link>
			<Typography variant='body1'>{label}</Typography>
		</div>
	)
}

export default TechDetails
