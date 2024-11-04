//require("dotenv").config()
//import env from "dotenv"
import "dotenv/config"

//const { get } = require("env-var")
import envar from "env-var"

//env.config()

export const envs = {
  PORT: envar.get("PORT").required().asPortNumber(),
  PUBLIC_PATH: envar.get("PUBLIC_PATH").default("public").asString(),
};

// module.exports = {
//   envs
// }