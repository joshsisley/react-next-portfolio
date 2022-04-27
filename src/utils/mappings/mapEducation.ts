import { IRawEducation } from '@types';

export const mapEducation = (educationResponse: IRawEducation[]) =>
	educationResponse.map(({ course, date, institute }) => ({
		course,
		date,
		institute: {
			name: institute.name,
			url: institute.url,
			logo: institute.logo,
		},
	}));
