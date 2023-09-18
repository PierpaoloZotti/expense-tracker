// without a defined matcher, this file will be used for all routes

export { default } from "next-auth/middleware";

// Now I will apply next-auth only to defined routes

export const config = { matcher: ["/extra", "/dashboard"] };
