import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  registerDecorator,
  ValidationOptions,
} from "class-validator";

@ValidatorConstraint({ name: "PasswordRequirements", async: false })
export class PasswordValidator implements ValidatorConstraintInterface {
  validate(password: string, args: ValidationArguments) {
    // Минимум 8 символов
    if (password.length < 8) {
      return false;
    }

    // Хотя бы одна заглавная буква
    if (!/(?=.*[A-Z])/.test(password)) {
      return false;
    }

    // Хотя бы одна строчная буква
    if (!/(?=.*[a-z])/.test(password)) {
      return false;
    }

    // Хотя бы одна цифра
    if (!/(?=.*\d)/.test(password)) {
      return false;
    }

    // Хотя бы один спецсимвол
    if (!/(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/.test(password)) {
      return false;
    }

    // Не более 2 повторяющихся символов подряд
    return !/(.)\1{2,}/.test(password);
  }

  defaultMessage(): string {
    return "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, one special character, and no more than 2 repeating characters in a row";
  }
}

export const IsStrongPassword =
  (validationOptions?: ValidationOptions) =>
  (object: Object, propertyName: string) =>
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: PasswordValidator,
    });
