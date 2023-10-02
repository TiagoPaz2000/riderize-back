import { ZodError } from "zod";
import { IHttpResponse } from "../protocols/http-protocol";
import ErrorEntity from "@/domain/entities/error-entity";
import { JsonWebTokenError } from "jsonwebtoken";

export const errorHandler = (error: Error): IHttpResponse => {
  if (error instanceof ErrorEntity) {
    return {
      statusCode: error.statusCode,
      body: {
        error: error.message
      },
    }
  }
  if (error instanceof ZodError) {
    return {
      statusCode: 400,
      body: {
        error: error.message
      },
    }
  }
  if (error instanceof JsonWebTokenError) {
    return {
      statusCode: 401,
      body: {
        error: error.message
      },
    }
  }
  return {
    statusCode: 500,
    body: {
      error: 'Internal server error'
    },
  }
}