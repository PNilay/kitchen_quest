"use server";

import type { UserRegisterFormData, ActionResponse } from "@/types/user.types";
import bcrypt from "bcrypt";
import dbConnect from "@/lib/db/dbConnect";
import { registerSchema } from "@/lib/schemas/authSchemas";
import { createUser, findUserByEmail } from "@/services/userService";

const registerUser = async (initialState: ActionResponse | null, formData: FormData): Promise<ActionResponse> => {
  try {
    await dbConnect();

    // Form data
    const rawData: UserRegisterFormData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
    };

    // Check if a user is already registered
    const isRegistered = await findUserByEmail(rawData.email);
    if (isRegistered) {
      return {
        success: false,
        message: "Email already in use.",
        inputs: rawData,
      };
    }

    // Validate form fields
    const validatedFields = registerSchema.safeParse(rawData);

    // Return early if any form fields are invalid
    if (!validatedFields.success) {
      return {
        success: false,
        message: "Please fix the error(s) in the form.",
        errors: validatedFields.error.flatten().fieldErrors,
        inputs: rawData,
      };
    }

    // Insert the user into the database
    const hashedPassword = await bcrypt.hash(validatedFields.data.password, 10);
    const newUser = await createUser({
      firstName: validatedFields.data.firstName,
      lastName: validatedFields.data.lastName,
      email: validatedFields.data.email,
      password: hashedPassword,
    });

    if (!newUser) {
      return {
        success: false,
        message: "An error occurred while creating your account.",
      }
    }

    return {
      success: true,
      message: "User registered successfully.",
    }

  } catch (error) {
    return {
      success: false,
      message: "An unexpected error occured.",
    }
  }
}

export default registerUser;
