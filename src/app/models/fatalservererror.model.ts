
export class FatalServerError extends Error {

    httpStatus?: number = 404;
    applicationStatus?: number;
    handled: boolean = false;
  
    constructor(message?: string) {
      super(message);
      this.name = FatalServerError.name;
      Object.setPrototypeOf(this, FatalServerError.prototype);
    }
  }