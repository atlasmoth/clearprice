"use client";

import { useEffect, useState } from "react";

interface Template {
  Id: string;
  Name: string;
  Version: string;
  Content: string;
}

export default function InvoiceDetails({ data }: { data: any }) {
  const {
    fontFamily,
    color,
    bg,
    image,
    terms,
    organizationName,
    total,
    accountNumber,
    recipient,
    bank,
  } = data;

  const [templates, setTemplates] = useState<Template[]>([]);
  const [currentTemplateId, setCurrentTemplateId] = useState(0);
  const finalData = (templates[currentTemplateId]?.Content || "")
    .replace("{{image}}", image)
    .replace("{{terms}}", terms)
    .replace("{{organizationName}}", organizationName)
    .replace("{{total}}", new Intl.NumberFormat().format(total))
    .replace("{{date}}", new Intl.DateTimeFormat("en-GB").format(new Date()))
    .replace("{{accountNumber}}", accountNumber)
    .replace("{{recipient}}", recipient)
    .replace(
      "{{invoiceNumber}}",
      new Intl.DateTimeFormat("en-GB", { hour: "numeric" }).format(new Date())
    )
    .replace("{{color}}", color)
    .replace("{{fontFamily}}", fontFamily)
    .replace("{{bg}}", bg)
    .replace("{{bank}}", bank);

  useEffect(() => {
    fetch("/api/v1/invoice/templates")
      .then((t) => t.json())
      .then((t) => {
        setTemplates(t.data);
      })
      .catch(console.log);
  }, []);

  return (
    <div className="bg-[#fff] p-4 rounded-xl lg:max-h-[100vh] mb-4">
      <div className="flex mb-4">
        <p>Template: &nbsp; </p>
        <select
          name="template"
          value={currentTemplateId}
          onChange={(e) => {
            setCurrentTemplateId(Number(e.target.value));
          }}
        >
          {templates.map((t, index) => (
            <option value={index} key={t.Id}>
              {t.Name}
            </option>
          ))}
        </select>
      </div>
      <div dangerouslySetInnerHTML={{ __html: finalData }}></div>
    </div>
  );
}
