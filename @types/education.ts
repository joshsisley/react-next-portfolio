import { ICompany, IRawCompany } from '@types';

export interface IEducation {
	institute: ICompany;
	course: string;
	date: string;
}

export interface IRawEducation {
	course: string;
	date: string;
	institute: IRawCompany;
}
