import { SocialIcons } from 'Molecules/SocialIcons';

const Footer = () => {
	return (
		<footer className="flex justify-between mt-8 md:mt-20 px-4 md:px-20 py-8">
			<span>&copy; {new Date().getFullYear()} Josh Sisley</span>
			<SocialIcons
				profiles={[
					{
						name: 'Github',
						url: 'https://www.github.com/joshsisley',
						icon: 'GITHUB',
					},
					{
						name: 'LinkedIn',
						url: 'https://www.linkedin.com/in/joshua-sisley',
						icon: 'LINKEDIN',
					},
					{
						name: 'Twitter',
						url: 'https://twitter.com/joshsisley',
						icon: 'TWITTER',
					},
					{
						name: 'Instagram',
						url: 'https://www.instagram.com/joshuasisley',
						icon: 'INSTAGRAM',
					},
				]}
			/>
		</footer>
	);
};

export { Footer };
