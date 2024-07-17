"use client";

import dynamic from "next/dynamic";
import InvoiceForm from "../components/InvoiceForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { banks } from "../utils/banks";
import { invoiceSchema } from "../utils/schemas";

const InvoiceDetails = dynamic(() => import("../components/InvoiceDetails"), {
  ssr: false,
});

export default function Invoice() {
  const { handleSubmit, watch, setValue, formState, register } = useForm({
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
      image: "",
    },
    resolver: yupResolver(invoiceSchema),
    mode: "all",
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
        <div className="lg:grid lg:grid-cols-[7fr_5fr] lg:gap-4">
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
                setValue,
                errors: formState.errors,
                image,
                handleSubmit,
                register,
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
