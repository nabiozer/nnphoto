import {
  Control,
  DefaultValues,
  FieldErrors,
  FieldValues,
  Path,
  UseFormClearErrors,
  UseFormGetValues,
  UseFormReset,
  UseFormResetField,
  UseFormReturn as UseHookFormReturn,
  useForm as useHookForm,
} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { isEmpty, isNaN, isNull, isString, isUndefined } from "lodash";
import { sleep } from "../_utility/utiliy";
export interface IUseFormProps<TFields> {
  defaultValues: TFields;
  validationSchema?: any;
}
interface IUseForm<TFields extends FieldValues>
  extends Pick<
    UseHookFormReturn<TFields>,
    | "control"
    | "handleSubmit"
    | "resetField"
    | "setValue"
    | "watch"
    | "getValues"
    | "clearErrors"
    | "reset"
    | "setFocus"
    | "trigger"
  > {
  errors?: FieldErrors<TFields>;
  setFieldError: (fieldName: Path<TFields>, errorMsg: string) => void;
}
export type UseFormReturnType<T extends FieldValues> = IUseForm<T>;
export type {
  Control,
  DefaultValues,
  FieldErrors,
  FieldValues,
  Path,
  UseFormClearErrors,
  UseFormGetValues,
};
const useForm = <TFields extends FieldValues>({
  validationSchema,
  defaultValues,
}: IUseFormProps<TFields>): UseFormReturnType<TFields> => {
  const {
    clearErrors,
    control,
    formState: { errors },
    getValues,
    handleSubmit,
    reset: resetForm,
    resetField: resetFieldForm,
    setError,
    setFocus,
    setValue,
    trigger,
    watch,
  }: UseHookFormReturn<TFields> = useHookForm<TFields>({
    defaultValues: defaultValues as DefaultValues<TFields>,
    ...(validationSchema && {
      resolver: yupResolver(yup.object().shape(validationSchema)),
    }),
    reValidateMode: "onChange",
    criteriaMode: "all",
    mode: "all",
    resetOptions: {
      keepDefaultValues: true,
    },
  });
  const setFieldError = (fieldName: Path<TFields>, errorMsg: string) => {
    setError(fieldName, {
      type: "manual",
      message: errorMsg,
    });
  };
  const reset: UseFormReset<TFields> = (values, keepStateOptions) => {
    resetForm(values, {
      ...control._options.resetOptions,
      ...keepStateOptions,
    });
    // * For some components, an error message appeared during the reset. For this reason, the second reset was executed.
    sleep(0).then(() => {
      if (!isEmpty(control._formState.errors)) {
        resetForm(values, {
          ...control._options.resetOptions,
          ...keepStateOptions,
        });
      }
    });
  };
  const resetField: UseFormResetField<TFields> = (name, options) => {
    const defaultValue = (control._defaultValues as any)[name];
    resetFieldForm(name, options);
    (isNull(defaultValue) ||
      isNaN(defaultValue) ||
      (isString(defaultValue) && defaultValue.length === 0)) &&
      // * For some components, an error message appeared during the reset. For this reason, the second reset was executed. // Ex: NumberInput Component
      sleep(0).then(() => {
        if (!isUndefined((control._formState.errors as any)[name])) {
          resetFieldForm(name, options);
        }
      });
  };
  return {
    control,
    errors,
    handleSubmit,
    setValue,
    resetField,
    getValues,
    clearErrors,
    reset,
    setFocus,
    trigger,
    setFieldError,
    watch,
  };
};
export default useForm;
