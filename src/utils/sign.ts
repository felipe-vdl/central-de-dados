import { SignJWT, JWTPayload } from "jose";

export default async function sign(payload: JWTPayload, secret: string) {
  const encodedSecret = new TextEncoder().encode(secret);
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(encodedSecret);
  return token;
}
