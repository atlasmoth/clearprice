"use client";

import InvoiceForm from "../components/InvoiceForm";
import InvoiceDetails from "../components/InvoiceDetails";
import { useForm } from "react-hook-form";
import { banks } from "../utils/banks";

export default function Invoice() {
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      organizationName: "",
      recipient: "",
      accountNumber: "",
      bank: "",
      fontFamily: "Rubik",
      color: "#0f0f0f",
      bg: "#ffffff",
      terms: "",
      total: 0,
      image: null,
    },
  });

  const [
    organizationName,
    recipient,
    accountNumber,
    bank,
    fontFamily,
    color,
    bg,
    terms,
    total,
    image,
  ] = watch([
    "organizationName",
    "recipient",
    "accountNumber",
    "bank",
    "fontFamily",
    "color",
    "bg",
    "terms",
    "total",
    "image",
  ]);

  return (
    <main className="bg-[#E9EDF2] min-h-lvh">
      <div className="container max-w-[1024px] mx-auto px-4 py-8">
        <div className="grid grid-cols-[7fr_5fr] gap-4">
          <div>
            <InvoiceDetails
              data={{
                organizationName,
                recipient,
                accountNumber,
                bank: banks.find((t) => t.id.toString() === bank)?.name || "",
                fontFamily,
                color,
                bg,
                terms,
                total,
                image,
              }}
            />
          </div>
          <div>
            <InvoiceForm
              data={{
                organizationName,
                recipient,
                accountNumber,
                bank,
                fontFamily,
                color,
                bg,
                terms,
                total,
                control,
                setValue,
                errors,
                image,
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
