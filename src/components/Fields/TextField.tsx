import { useField } from "formik";

import { Input } from "../ui/input";

interface IProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  readOnly?: boolean;
  disabled?: boolean;
}

const TextField = (props: IProps) => {
  const [field, meta] = useField({ ...props, type: props.type ?? "text" });

  return (
    <div className="w-full">
      {props.label ? (
        <label className="font-medium text-sm text-gray-700">
          {props.label}
        </label>
      ) : null}
      <Input
        className={` w-full  my-1 ${meta.touched && meta.error ? "text-red-500 border-red-500" : ""} ${props.readOnly ? "cursor-not-allowed" : ""} ${
          props.disabled ? "cursor-not-allowed bg-gray-100" : ""
        }`}
        {...field}
        {...props}
        disabled={props.disabled || false}
        placeholder={props.placeholder ?? `Enter ${props.label}`}
        readOnly={props.readOnly}
      />
      {meta.touched && meta.error ? (
        <p className="text-red-500 text-xs">{meta.error}</p>
      ) : null}
    </div>
  );
};

export default TextField;
