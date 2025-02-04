/**
 * An error that occurs when a required argument is missing.
 *
 * @class
 * @module MissingArgumentError
 * @extends TypeError
 */
export default class MissingArgumentError extends TypeError {
  /**
   * Creates an instance representing an error that occurs when a required argument is missing.
   *
   * @param  {...any} [args] The error arguments.
   */
  constructor(...args: string[]) {
    super(...args)
    Error.captureStackTrace(this, MissingArgumentError)
  }
}
