import bcrypt from "bcrypt";
import { errors } from "@vinejs/vine"; 
import {
  adminLoginSchema,
  superAdminRegisterSchema,
  adminCreatingSchema,
} from "../validations/adminValidationSchema.js";

class adminAuthController {
  static async superAdminRegister(req, res) {
    try {
      const body = req.body;
      const validator = vine.compile(superAdminRegisterSchema);
      const payload = await validator.validate(body);

      //findAdmin
      const findAdmin = await prisma.admin.findunique({
        where: {
          adminName: payload.adminName,
        },
      });
      if (findAdmin) {
        return res.status(400).json({
          errors: {
            adminName: "Admin already exist",
          },
        });
      }
      //superkey validation
      if (payload.superKey !== process.env.SUPER_KEY) {
        return res.status(401).json({
          message: "Super Key is invalid.Unauthorized to Register",
        });
      }
      //password Hashing
      const salt = bcrypt.genSaltSync(10);
      payload.password = bcrypt.hashSync(payload.password, salt);

      let role = "SUPERADMIN";
      const superAdmin = prisma.admin.create({
        data: { payload, role },
      });
      return res.status(200).json({
        message: "Super Admin created successfully",
        superAdmin,
      });
    } catch (error) {
      if (error instanceof errors.E_VALIDATION_ERROR) {
        // console.log(error.messages);
        return res.status(400).json({ errors: error.messages });
      } else {
        return res.status(500).json({
          status: 500,
          message: "Something went wrong.Please try again.",
        });
      }
    }
  }

  static async createNewAdmin(req, res) {
    try {
      const body = req.body;
      const validator = vine.compile(adminCreatingSchema);
      const payload = await validator.validate(body);

      //findAdmin
      const findAdmin = await prisma.admin.findunique({
        where: {
          AdminName: payload.AdminName,
        },
      });
      if (findAdmin) {
        return res.status(400).json({
          errors: {
            adminName: "Admin already exist",
          },
        });
      }

      //password Hashing
      const salt = bcrypt.genSaltSync(10);
      payload.password = bcrypt.hashSync(payload.password, salt);

      
      //creating Admin
      const Admin = prisma.create({
        data: { payload, role:'ADMIN',isLoggedIn:'false'},
      });
      return res.status(200).json({
        message: " Admin created successfully",
        Admin,
      });
    } catch (error) {
      if (error instanceof errors.E_VALIDATION_ERROR) {
        // console.log(error.messages);
        return res.status(400).json({ errors: error.messages });
      } else {
        return res.status(500).json({
          status: 500,
          message: "Something went wrong.Please try again.",
        });
      }
    }
  }

  //Admin Login
  static async AdminLogin(req, res) {
    try {
      const body = req.body;
      const validator = vine.compile(adminLoginSchema);
      const payload = await validator.validate(body);

      //   * Find Admin with AdminName
      const findAdmin = await prisma.admin.findUnique({
        where: {
          AdminName: payload.AdminName,
        },
      });

      if (findAdmin) {
        const passwordMatch= await bcrypt.compare(payload.password, findAdmin.password)
        if (!passwordMatch) {
          return res.status(400).json({
            errors: {
              email: "Invalid Credentials.",
            },
          });
        }
        if(findAdmin.isLoggedIn){
          return res.status(409).json({
            errors:{
              message:"You are already logged in from another device. Please log out from the other device or wait for it to expire."
            }
          })
        }

        // Update isLoggedIn to true
      await prisma.admin.update({
        where: {
          id: findAdmin.id,
        },
        data: {
          isLoggedIn: true,
        },
      });

        // * Issue token to user
        const payloadData = {
          id: findAdmin.id,
          AdminName: findAdmin.AdminName,
          role:findAdmin.role
        };
        const token = jwt.sign(payloadData, process.env.JWT_SECRET, {
          expiresIn: "365d",
        });

        return res.json({
          message: "Logged in",
          access_token: `Bearer ${token}`,
        });
      }

      return res.status(400).json({
        errors: {
          AdminName: "No admin found.",
        },
      });
    } catch (error) {
      console.log("Login error", error);
      if (error instanceof errors.E_VALIDATION_ERROR) {
        // console.log(error.messages);
        return res.status(400).json({ errors: error.messages });
      } else {
        return res.status(500).json({
          status: 500,
          message: "Something went wrong.Please try again.",
        });
      }
    }
  }
}

export default adminAuthController;
