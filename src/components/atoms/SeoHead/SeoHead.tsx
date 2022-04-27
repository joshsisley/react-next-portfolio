import Head from 'next/head';

export interface HeadProps {
	title: string;
	description: string;
	lang?: string;
	keywords?: string[];
	author?: string;
	image?: string;
	meta?: Array<{
		name: string;
		content: string;
	}>;
}

const SeoHead = ({
	title,
	description,
	author = 'Josh Sisley',
	keywords,
	image = 'https://res.cloudinary.com/joshsisley/image/upload/v1641565970/website-dark-light.png',
	meta,
}: HeadProps) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="author" content={author} />
			<meta name="og:title" content={title} />
			<meta name="og:description" content={description} />
			<meta name="og:type" content="website" />
			<meta name="og:url" content="https://sisley.tech/" />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:creator" content={author} />
			{meta &&
				meta.length > 0 &&
				meta.map(({ name, content }) => (
					<meta name={name} content={content} key={name} />
				))}
			{image && <meta name="og:image" content={image} />}
			{image && <meta name="twitter:image" content={image} />}
			{keywords && <meta name="keywords" content={keywords.join(', ')} />}
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: `{"@context":"http://schema.org","@type":"WebSite","name":"sisley.tech","alternateName":"Josh Sisley","url":"https://sisley.tech/","description":"Senior Software Engineer with a focus on Angular, React.js, Node.js and TypeScript. I have more than 7 years experience working in software engineering.","image":"${image}"}`,
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: `{"@context":"http://schema.org","@type":"Person","image":"https://res.cloudinary.com/joshsisley/image/upload/v1587315576/josh_sisley.jpg","name":"Josh Sisley","alternateName":"JoshSisley","url":"https://sisley.tech/","jobTitle":["Senior Software Engineer","Frontend Engineer", "Front-End Developer", "Tech Lead", "Web Developer"],"hasOccupation":{"@type":"Occupation","name":"Senior Software Engineer","occupationLocation":{"@type":"City","name":"London"},"estimatedSalary":[{"@type":"MonetaryAmountDistribution","name":"base","currency":"GBP","duration":"P1H","percentile10":"74","percentile25":"80","median":"90","percentile75":"100","percentile90":"106"}],"description":"Develops web applications and websites using JavaScript, React and HTML5.","skills":"HTML5, CSS, JavaScript, React, PHP, Sass, Less, Node.js, Express.js, Vue.js, Gatsby, Next.js, JavaScript Frameworks, Git, Github, NPM, SEO, CMS, WordPress, Joomla, Drupal, E-Commerce","alternateName":["Frontend Developer","Full Stack Developer","Frontend Engineer"],"responsibilities":["App Development","Web Design","Website Development","JavaScript Development","WordPress Development","CMS Development","Frontend Development","Full Stack Development","Online Marketing","SEO Services","Web Developer","Website Maintenance"]},"sameAs":["http://linkedin.com/in/joshua-sisley","http://twitter.com/joshsisley","https://github.com/joshsisley","https://instagram.com/joshuasisley"],"brand":[{"@type":"Brand","name":"Software Engineer","alternateName":"Front-End Engineer"},{"@type":"Brand","name":"JoshSisley","alternateName":"Josh Sisley"}],"memberOf":[],"homeLocation":{"@type":"City","name":"Mechanicsburg"},"nationality":{"@type":"Country","name":"USA"},"birthDate":"1991-05-22"}}}`,
				}}
			/>
		</Head>
	);
};

export { SeoHead };
