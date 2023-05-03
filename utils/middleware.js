import bodyParser from "./bodyParser.js";
import { verifyjwt } from '#utils/jwt'

export default async ({ req }) => {
    try {
        const { fieldName } = bodyParser(req.body)
        const { token } = req.headers;
        if (fieldName === '__schema') return

        const agent = req.headers['user-agent']

        if (['Login', 'signup'].includes(fieldName)) {
            return { agent }
        }

        if (!token) {
            throw Error('Token is required')
        }
        const data = verifyjwt(token)

        if (data.UserAgent === agent) {
            throw new Error('Invalid token')
        }
        return {
            id: data.id,
            agent,
            token
        }
    } catch (error) {
        throw error
    }
}