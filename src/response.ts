import { APIGatewayProxyResultV2 } from "aws-lambda";

export const response = (url: string) : APIGatewayProxyResultV2 => {
    return {
        statusCode: 301,
        headers: {
            Location: url,
        }
    };
}