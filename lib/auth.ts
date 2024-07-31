import { hash } from "bcryptjs";

export async function hashPassword(password: string) {
  hash(password, 12);
}
