/**
 * @author - Naim Shaikh
 * @createdDate 22-03-2019
 * @description - This model file are represent of Domain Model.
 */
/**
 * This domain model use for store attributes
 */
export class Domain {

    /** domainId is unique for every record which is auto increment. */
    public domainId: number;
    /** domainNAme is for name of domain */
    public domainName: string;
    /**  description is for description of domain */
    public description: string;
}
/**
 * ManageDomainModal - This enum are represent of error message
 */
export enum ManageDomainModal {
    /** InvalidValue is use for display message when user pass blank form */
    InvalidValue = 'Please fill all the blank fields!',
    /** ErrorMessage define heading of toster message when error is occur */
    ErrorMessage = 'Error',
    /** NotFound indicate server can not find requested resource */
    NotFound = '404 Not Found',
    /** InternalServerError indicates the server has encountered a situation it doesn't know how to handle.  */
    InternalServerError = '500 Internal Server Error',
    /** MethodNotAllowed indicates the request method has been disabled and cannot be used  */
    MethodNotAllowed = '405 Method Not Allowed',
    /** BadRequest response means that server could not understand the request due to invalid syntax  */
    BadRequest = '400 Bad Request',
    /** NoContent indicates no content to send for this request, but the headers may be useful */
    NoContent = '204 No Content',
}
