// import { createClient } from "../../node_modules/next-sanity/dist/index"
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "q7ggglgf",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: true,

})