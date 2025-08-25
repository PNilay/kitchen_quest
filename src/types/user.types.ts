/**
 * Defines the structure of user input data for registration form. 
 */
export interface UserRegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

/**
 * Defines the standardized response format for form actions.
 */
export interface ActionResponse {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof UserRegisterFormData]?: string[];
  };
  inputs?: Partial<UserRegisterFormData>;
}
