import format from 'date-fns/format';
import { ICompany } from '@types';
import Image from 'next/image';

import { Box } from 'Atoms/Box';

export interface SchoolProps {
	institute: ICompany;
	course: string;
	date: string;
}

const School = ({ institute, course, date }: SchoolProps) => {
	return (
		<Box>
			<div className="flex gap-4 items-center">
				{institute.logo && (
					<Image
						src={institute.logo}
						alt={institute.name}
						width={64}
						height={64}
						className="rounded-md"
					/>
				)}
				<div className="w-full mb-2">
					<div className="flex justify-between">
						<h3 className="font-bold">{course}</h3>
						<span>{format(new Date(date), 'MMM yyyy')}</span>
					</div>
					<h4>
						{institute.url ? (
							<a
								href={institute.url}
								target="_blank"
								rel="noopener noreferrer"
								className="underlined relative"
							>
								{institute.name}
							</a>
						) : (
							<>{institute.name}</>
						)}
					</h4>
				</div>
			</div>
		</Box>
	);
};

export { School };
