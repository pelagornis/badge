import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda"; 
import { redirectURL } from "./redirects";
import { response } from "./response";

export const handler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {
  const path = event.rawPath;
  const url = redirectURL(path);
  return response(url);
};