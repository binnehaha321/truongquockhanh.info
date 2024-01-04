import Image from 'next/image'

import KhanhFullPose from '/public/images/khanh-full-pose.svg'
import Tag from '@/components/data-display/Tag'
import Container from '@/components/layout/Container'
import Typography from '@/components/general/Typography'
import Link from '@/components/navigation/Link'
import { EXTERNAL_LINKS } from '@/lib/data'

const AboutMeSection = () => {
	return (
		<Container
			className='bg-gray-50'
			id='about'
		>
			<div className='self-center'>
				<Tag label='About me' />
			</div>

			<div className='flex w-full flex-col justify-between gap-12 md:flex-row'>
				{/* Image */}
				<div className='flex justify-center md:order-first md:justify-end'>
					<div className='relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]'>
						<Image
							src={KhanhFullPose}
							alt='Fullpose of Khanh'
							className='absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]'
							style={{ objectFit: 'cover' }}
						/>
						<div className='absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]'></div>
					</div>
				</div>

				{/* Content */}
				<div className='flex max-w-xl flex-col gap-6'>
					<Typography className='font-bold text-[24px]'>
						Curious about me? Here you have it:
					</Typography>
					<Typography>
						I&apos;m a passionate,{' '}
						<Link
							noCustomization
							externalLink
							withUnderline
							href={EXTERNAL_LINKS.SOUNDCLOUD}
						>
							self-proclaimed composer
						</Link>{' '}
						who specializes in front-end development (React.js & Next.js). I am
						enthusiastic about bringing the technical and visual aspects of
						digital products to life. User experience, pixel perfect design, and
						writing clear, readable, highly performant code matters to me.
					</Typography>
					<Typography>
						I began my journey as a web developer in 2021, and since then,
						I&apos;ve continued to grow and evolve as a developer, taking on new
						challenges and learning the latest technologies along the way. Over
						2 years after starting my web development journey, I&apos;m building
						cutting-edge web applications using modern technologies such as
						React.js, Next.js, JavaScript, Typescript, Express.js, TailwindCSS
						and much more.
					</Typography>
					<Typography>
						I am very much a progressive thinker and enjoy working on products
						end to end, from ideation all the way to development.
					</Typography>
					<Typography>
						When I&apos;m not in full-on developer mode, you can find me
						hovering around on facebook or on composing space, witnessing the
						journey of early startups or enjoying some free time. You can follow
						me on{' '}
						<Link
							noCustomization
							externalLink
							withUnderline
							href={EXTERNAL_LINKS.SOUNDCLOUD}
						>
							SoundCloud
						</Link>{' '}
						where I share tech-related bites and build in public, or you can
						follow me on{' '}
						<Link
							noCustomization
							externalLink
							withUnderline
							href={EXTERNAL_LINKS.GITHUB}
						>
							GitHub
						</Link>
						.
					</Typography>
					<Typography>Finally, some quick bits about me.</Typography>
					<div className='flex flex-col gap-2 md:flex-row md:gap-6'>
						<ul className='flex list-inside list-disc flex-col gap-2'>
							<Typography component='li'>B.E. in Computer Science</Typography>
							<Typography component='li'>Full time developer</Typography>
						</ul>
						<ul className='flex list-inside list-disc flex-col gap-2'>
							<Typography component='li'>Avid learner</Typography>
							<Typography component='li'>Aspiring composer</Typography>
						</ul>
					</div>
					<Typography>
						One last thing, I&apos;m available for freelance work, so feel free
						to reach out and say hello! I promise I don&apos;t bite 😉
					</Typography>
				</div>
			</div>
		</Container>
	)
}

export default AboutMeSection
