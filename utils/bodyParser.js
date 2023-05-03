import { parse } from 'graphql'

export default function (body) {
    const parsedQuery = parse(body.query)
    const fieldName = firstFieldValueNameFromOperation(firstOperationDefinition(parsedQuery))
    const operation = firstOperationDefinition(parsedQuery).operation

    function firstOperationDefinition(ast) {
        return ast.definitions[0]
    }

    function firstFieldValueNameFromOperation(operationDefinition) {
        return operationDefinition?.selectionSet?.selections[0]?.name?.value
    }

    return {
        operation,
        fieldName,
    }
}