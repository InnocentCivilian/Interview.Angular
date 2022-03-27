
export class MissingOperationServerError extends Error {

    applicationStatus?: number;
    handled: boolean = false;
  
    constructor(message?: string) {
      super(message);
      this.name = MissingOperationServerError.name;
      Object.setPrototypeOf(this, MissingOperationServerError.prototype);
    }
  }