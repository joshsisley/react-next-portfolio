import { IEducation, IJob, IPodcast } from '@types';

import { client } from 'apollo-client';
import { gql } from '@apollo/client';
import { mapJobs } from 'utils/mappings/mapJobs';
import { mapPodcasts } from 'utils/mappings/mapPodcasts';
import { NextPage } from 'next';

import { AnimatePage } from 'Atoms/AnimatePage';
import { Button } from 'Atoms/Button';
import { Container } from 'Atoms/Container';
import { Education } from 'Organisms/Education';
import { Icon } from 'Atoms/Icon';
import { PodcastList } from 'Molecules/PodcastList';
import { SeoHead } from 'Atoms/SeoHead';
import { WorkExperience } from 'Organisms/WorkExperience';

interface IProps {
	podcasts: IPodcast[];
	jobs: IJob[];
	education: IEducation[];
}

const AboutPage: NextPage<IProps> = ({ podcasts, jobs, education }) => {
	education = [
		{
			course: 'Meteorology',
			date: 'May 19, 2021',
			institute: {
				name: 'Valparaiso University',
				url: 'https://www.valpo.edu/',
				logo: '/assets/education/valpo-primary.png',
			},
		},
	];
	return (
		<AnimatePage>
			<SeoHead
				title="About Josh Sisley, a Senior Software Engineer and Tech Lead in the US"
				description="As a passionate full stack software engineer, I create amazing web apps to make the internet a better place."
			/>
			<Container>
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl mt-8">
					Hey, I&apos;m Josh Sisley
				</h1>
				<h2 className="font-bold text-xl md:text-2xl mt-2">
					Tech Lead and Senior Software Engineer
				</h2>
				<p className="mt-8">
					I always thought my dream was to be a meteorologist for institutions
					that focused on severe storm research. It seemed like an appropriate
					dream at the time because of my interest in storm chasing. I loved
					going storm chasing and in particular the thrill that it gave me when
					I was able to watch a storm go from a small cloud to a large
					supercell. This guided me to get my degree in Meteorology, but in the
					end, I just felt like it was not what I was supposed to do.
				</p>
				<p className="mt-5">
					Shortly after graduating, I took some time to try and find the spark
					that I was missing. I found that spark with the first web development
					tutorial that I started. Since then, I can not get enough. Programming
					to me is much like watching a powerful supercell go from a small cloud
					to the towering anvil. With programming, I am able to build a powerful
					and robust application starting from scratch. The same thrill that I
					got from storm chasing is the same thrill I now get with building
					brand new applications.
				</p>
				<p className="mt-5">
					So now, in this industry, my passion and the thrill I get remains the
					same. I love that there is always more to learn, more problems to
					solve, and more to build.
				</p>
				<h2 className="headline mt-12 mb-4 text-4xl">Podcasts I enjoy</h2>

				<PodcastList podcasts={podcasts} />

				<h2 className="headline mt-12 mb-4 text-4xl">Experience</h2>

				<WorkExperience jobs={jobs} />

				<h2 className="headline mt-12 mb-4 text-4xl">Education</h2>
				<p className="mb-6">
					I am mostly self-taught, but here are some of the most relevant
					certifications I have achieved:
				</p>

				<Education education={education} />

				<div className="flex justify-center mt-8">
					<Button
						href="/cv-2021.pdf"
						download={true}
						className="group flex gap-2 whitespace-nowrap"
					>
						<div className="w-6 text-blue-500 group-hover:text-off-white dark:text-purple-500">
							<Icon icon="DOWNLOAD" />
						</div>
						<div className="block headline group-hover:text-off-white">
							Download my CV
						</div>
					</Button>
				</div>
			</Container>
		</AnimatePage>
	);
};

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query AboutPageQuery {
				podcasts(orderBy: name_DESC) {
					id
					name
					url
					logo
				}
				jobs(orderBy: fromDate_DESC) {
					id
					jobTitle
					fromDate
					toDate
					description {
						raw
					}
					company {
						name
						url
						logo
					}
					skills {
						skill
					}
				}
			}
		`,
	});

	return {
		props: {
			podcasts: mapPodcasts(data.podcasts),
			education: [],
			jobs: mapJobs(data.jobs),
		},
	};
}

export default AboutPage;
