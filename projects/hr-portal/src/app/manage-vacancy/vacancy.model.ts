import { AbstractControl } from '@angular/forms';

/**
 * Vacancy Class representing vacancy fields
 * @author: Bhumi Desai
 * @created date: 22/03/2019
 */
export class Vacancy {
    /** the unique identification of the vacancy */
    public jobId: number;
    /** the job name of the vacancy */
    public jobName: string;
    /** defines the number of vacancy */
    public vacancies: number;
    /** defines the number of experience needed */
    public experience: number;
    /** the domainId of the vacancy */
    public domainId: number;
    /** the technologyId of the vacancy */
    public technologyId: number;
    /** the designationId of the vacancy */
    public designationId: number;
    /** the countryId of the vacancy */
    public countryId: number;
    /** the jobDescription of the vacancy */
    public jobDescription: string;
    /** the responsibilities of the vacancy */
    public responsibilities: string;
}

/**
 * Class representing domain id and name
 * @author: Bhumi Desai
 * @created date: 27/03/2019
 */
export class Domain {

    /** Domain id of the domain */
    public domainId: number;
    /** Domain name of the domain */
    public domainName: string;
}

/**
 * Class representing technology id and name
 * @author: Bhumi Desai
 * @created date: 27/03/2019
 */
export class Technology {
    /** Technology id of the technology */
    public technologyId: number;
    /** Technology name of the technology */
    public technologyName: string;
}

/**
 * Class representing country id and name
 * @author: Bhumi Desai
 * @created date: 27/03/2019
 */
export class Country {
    /** Country id of the country */
    public countryId: number;
    /** Country name of the country */
    public countryName: string;
}

/**
 * Class representing designation id and name
 * @author: Bhumi Desai
 * @created date: 25/03/2019
 */
export class Designation {
    /** Designation id of the designation */
    public designationId: number;
    /** Designation name of the designation */
    public designationName: string;
}

/**
 * Enum representing the error message
 * @author: Bhumi Desai
 * @created date: 27/03/2019
 */
export enum ToastrErrorMessage {
    /** message to show using toster */
    Message = 'Please fill all the blank fields',
    /** type of the message */
    MessageType = 'Error',
}

/**
 * Enum representing the success message
 * @author: Bhumi Desai
 * @created date: 27/03/2019
 */
export enum ToastrSuccessMessage {
    /** message to show using toster */
    Message = 'Successfully inserted',
    /** type of the message */
    MessageType = 'Success',
}

/**
 * Enum representing the error Status 404
 * @author: Bhumi Desai
 * @created date: 27/03/2019
 */
export enum ToastrErrorStatus404 {
    /** message to show using toster */
    Message = 'Api not found',
    /** type of the message */
    MessageType = 'Error',
}

/**
 * Enum representing the error Status 400
 * @author: Bhumi Desai
 * @author: Bhumi Desai
 * @created date: 27/03/2019
 */
export enum ToastrErrorStatus400 {
    /** message to show using toster */
    Message = 'Bad request',
    /** type of the message */
    MessageType = 'Error',
}

/**
 * Enum representing the error Status 401
 * @author: Bhumi Desai
 * @author: Bhumi Desai
 * @created date: 27/03/2019
 */
export enum ToastrErrorStatus401 {
    /** message to show using toster */
    Message = 'Unauthorised',
    /** type of the message */
    MessageType = 'Error',
}

/**
 * Enum representing the error Status 500
 * @author: Bhumi Desai
 * @created date: 27/03/2019
 */
export enum ToastrErrorStatus500 {
    /** message to show using toster */
    Message = 'Internal server error',
    /** type of the message */
    MessageType = 'Error',
}

/**
 * Enum representing the error Status 204
 * @author: Bhumi Desai
 * @created date: 27/03/2019
 */
export enum ToastrErrorStatus204 {
    /** message to show using toster */
    Message = 'No Content',
    /** type of the message */
    MessageType = 'Error',
}
