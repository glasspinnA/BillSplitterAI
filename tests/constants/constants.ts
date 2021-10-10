import { v4 as uuidv4 } from "uuid";
import User from "../../src/interfaces/User/IUser";
export const USERS = [
  { Id: uuidv4(), Name: "Vision", Income: 10000 },
  { Id: uuidv4(), Name: "Black Widow", Income: 20000 },
] as User[];

export const GET_EXTRA_USER = { Id: uuidv4(), Name: "Name: " + uuidv4, Income: 500 } as User;
