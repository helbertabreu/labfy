import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IUserRequest,
  IUserResponse,
  IUserUpdate,
} from "../interfaces/user.interface";

export const userRequestSerializer: SchemaOf<IUserRequest> = yup
  .object()
  .shape({
    first_name: yup.string().max(128).required().lowercase(),
    last_name: yup.string().max(128).required().lowercase(),
    email: yup.string().email().max(128).required(),
    phone: yup.string().max(12).notRequired(),
    position: yup.string().max(128).notRequired(),
    institution: yup.string().max(128).required(),
    password: yup.string().min(8).max(150).required(),
  }) as unknown as SchemaOf<IUserRequest>;

export const userResponseSerializer: SchemaOf<IUserResponse> = yup
  .object()
  .shape({
    id: yup.string().notRequired(),
    first_name: yup.string().max(128).notRequired(),
    last_name: yup.string().max(128).notRequired(),
    email: yup.string().email().max(128).notRequired(),
    phone: yup.string().max(12).notRequired(),
    position: yup.string().max(128).notRequired(),
    institution: yup.string().max(128).notRequired(),
    created_at: yup.date().notRequired(),
    updated_at: yup.date().notRequired(),
  }) as unknown as SchemaOf<IUserResponse>;

export const listUsersSerializer: SchemaOf<IUserResponse[]> = yup.array(
  userResponseSerializer
);

export const userUpdateSerializer: SchemaOf<IUserUpdate> = yup.object().shape({
  first_name: yup.string().max(128).notRequired(),
  last_name: yup.string().max(128).notRequired(),
  email: yup.string().email().max(128).notRequired(),
  phone: yup.string().max(12).notRequired(),
  position: yup.string().max(128).notRequired(),
  institution: yup.string().max(128).notRequired(),
  password: yup.string().min(8).max(150).notRequired(),
});
