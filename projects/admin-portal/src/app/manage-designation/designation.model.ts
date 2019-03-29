/**
 *  @author Rayhan Kasli
 *  @createdDate 22-03-2019
 *  @discription  Here Designation class ia model class which has some property and ManageDesignationModal class
 *                is handle all http error handle events
 */
/**
 *  Designation class is model class its contain designationId, designationTitle
 */
export class Designation {
    /** designationId define unique identification of designation */
    public designationId: number;
    /**  designationTitle define title of designation */
    public designationTitle: string;
}

/**
 * ManageDesignationModal enum is use to display error messages
 */
export enum ManageDesignationModal {
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
