const { query } = require("express");

const {PrismaClient}=require(prisma/client);
export const prisma=PrismaClient({
    log:["query","error"]
});
