import { FieldErrors } from "react-hook-form";

export interface InvoiceFormData {
  fontFamily: string;
  color: string;
  bg: string;
  organizationName: string;
  recipient: string;
  accountNumber: string;
  bank: string;
  terms: string;
  total: number;
  errors: FieldErrors<{
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
  }>;
  setValue: Function;
  image: any;
  handleSubmit: (
    callback: (data: any) => void
  ) => (event: React.FormEvent<HTMLFormElement>) => void;
  register: Function;
}
