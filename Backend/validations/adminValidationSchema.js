import  vine from "@vinejs/vine";

const superAdminRegisterSchema = vine.object({
  username: vine.string().minLength(2).maxLength(20),
  password: vine.string().minLength(6),
  supercode: vine.string(),
  role: vine.string().toUpperCase(),
});

const adminCreatingSchema = vine.object({
  username: vine.string().minLength(2).maxLength(20),
  password: vine.string().minLength(6),
});

const adminLoginSchema = vine.object({
  username: vine.string(),
  password: vine
    .string() 
    .minLength(6)
    .confirmed({
      confirmationField: "passwordConfirmation",
    })
});

export { superAdminRegisterSchema, adminCreatingSchema, adminLoginSchema };
