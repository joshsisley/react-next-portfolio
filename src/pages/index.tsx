import { AnimatePage } from 'Atoms/AnimatePage';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';
import Typed from 'react-typed';

const IndexPage = () => {
	const talkAbout = [
		'Angular',
		'React',
		'Node.js',
		'Nest.js',
		'JavaScript',
		'TypeScript',
		'GraphQL',
		'Redux',
		'Jamstack',
		'Next.js',
		'RESTful APIs',
		'HTML',
		'CSS',
		'Gatsby',
	];

	return (
		<AnimatePage>
			<SeoHead
				title="Senior Software Engineer and Consultant – Josh Sisley"
				description="A Front-End Software Engineer with a focus on JavaScript and React. I have more than 10 years experience working in software engineering and consulting."
				keywords={[
					'Software Engineer',
					'Josh Sisley',
					'Software Consulting',
					'Front-End',
					'Full-Stack',
					'React',
					'TypeScript',
					'JavaScript',
					'GraphQL',
					'CSS',
					'Tailwind',
				]}
			/>
			<Container>
				<h1 className="headline mt-20 text-3xl md:text-5xl lg:text-6xl">
					Hey, I&apos;m Josh Sisley 👋
				</h1>
				<p className="my-8 text-lg">
					I am a passionate Tech Lead and Senior Software Engineer with more
					than 7 years of experience working on high performance applications.
					When it comes to programming I enjoy the challenging stuff and always
					strive to find the right solution for the problem. I enjoy talking
					about programming and in particular I love to talk about{' '}
					<Typed
						loop
						typeSpeed={80}
						backSpeed={20}
						strings={talkAbout}
						smartBackspace
						backDelay={1000}
						loopCount={0}
						showCursor
						cursorChar="|"
					/>
					.
				</p>
				{/* <p>
					P.S. this website is open-source and available on{' '}
					<a
						href="https://github.com/joshsisley/portfolio"
						title="Link to Github repository"
						target="_blank"
						rel="noopener noreferrer"
						className="underlined font-bold relative border-b-2 border-grey-300 dark:border-grey-700 hover:border-b-0"
					>
						Github
					</a>
					.
				</p> */}
			</Container>
		</AnimatePage>
	);
};

export default IndexPage;
