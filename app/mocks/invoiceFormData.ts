import { FieldErrors } from "react-hook-form";
import { InvoiceFormData } from "@/app/utils/interfaces";

export const mockInvoiceFormData: InvoiceFormData = {
  fontFamily: "Arial",
  color: "#000000",
  bg: "#ffffff",
  organizationName: "",
  recipient: "",
  accountNumber: "",
  bank: "",
  terms: "",
  total: 0,
  errors: {} as FieldErrors<{
    image: any;
    organizationName: string;
    recipient: string;
    accountNumber: string;
    bank: string;
    fontFamily: string;
    color: string;
    bg: string;
    terms: string;
    total: number;
  }>,
  setValue: jest.fn(),
  image: "",
  handleSubmit: jest.fn((callback) => (event) => {
    event.preventDefault();
    callback(mockInvoiceFormData);
  }),
  register: jest.fn(),
};
