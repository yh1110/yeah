import { FormControl, FunctionComponent, Input, Label } from "@yamada-ui/react";
import { Control, Controller } from "react-hook-form";
import { authFormType } from "../molecules/AuthForm";

type AuthFormInput = {
  isInavlid: boolean;
  label: string;
  formType: "username" | "email" | "password";
  control: Control<authFormType>;
  placeholder?: string;
};
export const AuthFormInput: FunctionComponent<AuthFormInput> = ({
  isInavlid,
  label,
  formType,
  control,
  placeholder,
}) => {
  return (
    <FormControl isInvalid={isInavlid}>
      <Label htmlFor={formType} className="text-zinc-200">
        {label}
      </Label>
      <Controller
        name={formType}
        control={control}
        //#TODO バリデーションチェック
        rules={{ required: true }}
        render={({ field }) => (
          <Input
            id={formType}
            placeholder={placeholder}
            className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
            type={formType}
            required
            style={{ border: "1px solid #2f2f2f", backgroundColor: "#171717" }}
            autoComplete="off"
            {...field}
          />
        )}
      />
    </FormControl>
  );
};
