import { IHttpResponse } from "../protocols/http-protocol";
import ErrorEntity from "@/domain/entities/error-entity";

export const errorHandler = (error: Error): IHttpResponse => {
  if (error instanceof ErrorEntity) {
    return {
      statusCode: error.statusCode,
      body: error.message,
    }
  }
  return {
    statusCode: 500,
    body: "Internal server error",
  }
}