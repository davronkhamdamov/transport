import { ApolloError } from 'apollo-server-errors'

export class NotFoundError extends ApolloError {
    constructor(message) {
        super(message, 'NOT_FOUND')
        Object.defineProperty(this, 'name', { value: 'notFoundError' })
    }
}