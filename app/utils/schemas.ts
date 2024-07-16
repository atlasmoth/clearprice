import * as yup from "yup";
import { banks } from "./banks";
export const invoiceSchema = yup
  .object()
  .shape({
    organizationName: yup
      .string()
      .required("Please enter valid organization name"),
    recipient: yup.string().required("Please enter valid recipient"),
    total: yup
      .number()
      .typeError("Please enter valid amount")
      .required("Please enter valid amount")
      .positive("Please enter valid amount")
      .integer("Please enter valid amount"),
    bank: yup
      .string()
      .required("Please select valid bank")
      .oneOf(banks.map((t) => t.id.toString())),
    accountNumber: yup
      .string()
      .matches(/^[0-9]\d*$/, "Please enter valid account number")
      .length(10, "Account number must be 10 digits")
      .required("Please enter valid account number"),
    terms: yup.string().required("Please enter terms"),
    fontFamily: yup.string().required(),
    color: yup.string().required(),
    bg: yup.string().required(),
    image: yup.mixed().nullable(),
  })
  .required();
