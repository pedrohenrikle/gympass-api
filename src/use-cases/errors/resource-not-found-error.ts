export class ResourceNotExistsError extends Error {
  constructor() {
    super('Resource not found!')
  }
}
