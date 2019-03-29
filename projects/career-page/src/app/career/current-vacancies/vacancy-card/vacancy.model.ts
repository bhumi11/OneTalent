/**
 *  Vacancy proprties and properties type details and use to enum of error
 * @author : Gaurang Valia
 * @class : Vacancy,VacancyModel
 * Created Date : 25-03-2019
 */
export class Vacancy {
    /** The unique identification of the vacancy */
    public jobId: number;
    /**  The domainId of the vacancy */
    public domainId: number;
    /**  The designationId of the vacancy */
    public designationId: number;
    /**  The countryId of the vacancy */
    public countryId: number;
    /** The jobName of the vacancy */
    public jobName: string;
    /** Defines the number of vacancy */
    public vacancies: number;
    /** Defines the number of experience needed */
    public experience: string;
    /** The domainName of the vacancy */
    public domainName: string;
    /** The designationTitle of the vacancy */
    public designationTitle: string;
    /** The countryName of the vacancy */
    public countryName: string;
    /** The jobDescription of the vacancy */
    public jobDescription: string;
    /** The responsibilities of the vacancy */
    public responsibilities: string;
    /** The publishDate of the vacancy */
    public publishDate: string;
    /** The technologyName of the vacancy */
    public technologyName: string;
}
/**  check the validation of Vacancy get */
export enum VacancyModel {
    /**  InvalidValue is use for display message when user pass blank form */
    InvalidValue = 'Not Found API',
    /**  ErrorMessage define heading of toster message when error is occur */
    ErrorMessage = 'Error',
    /**  he server encountered an internal error */
    InternalError = 'Internal Server Error',
}
