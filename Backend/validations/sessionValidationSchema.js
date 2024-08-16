import  vine from "@vinejs/vine";

export const createSessionSchema = vine.object().shape({
    prevSessionId: vine.number(),
    newSessionName: vine.string(),
  });

