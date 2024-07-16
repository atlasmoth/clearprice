import { useState } from "react";
const sample = ` <article
    style="
      font-family: {{fontFamily}};
      line-height: 1.6;
      color: {{color}};
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background : {{bg}};
    "
  >
    <header style="text-align: center; margin-bottom: 20px">
      <img src="{{image}}" alt="Company Logo" height="100" width="100" style="border-radius: 20px;" />
      <h1>{{organizationName}}</h1>
    </header>

    <main>
      <div
        style="
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        "
      >
        <div>
          <h2>Invoice</h2>
          <p><strong>Date:</strong> {{date}}</p>
          <p><strong>Invoice Number:</strong> {{invoiceNumber}}</p>
        </div>
        <div>
          <h3>Bill To:</h3>
          <p>{{recipient}}</p>
        </div>
      </div>

      <table
        style="width: 100%; border-collapse: collapse; margin-bottom: 20px"
      >
        <thead>
          <tr style="background-color: #f2f2f2">
            <th style="border: 1px solid #ddd; padding: 10px; text-align: left">
              Terms
            </th>
            <th
              style="border: 1px solid #ddd; padding: 10px; text-align: right"
            >
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #ddd; padding: 10px">{{terms}}</td>
            <td
              style="border: 1px solid #ddd; padding: 10px; text-align: right"
            >
             ₦{{total}}
            </td>
          </tr>
        </tbody>
      </table>

      <div style="margin-bottom: 20px">
        <h3>Payment Details:</h3>
        <p><strong>Bank Name:</strong>{{bank}}</p>
        <p><strong>Account Number:</strong>{{accountNumber}}</p>
      </div>
    </main>

    <footer
      style="
        text-align: center;
        margin-top: 20px;
        font-size: 0.9em;        
      "
    >
      <p>Thank you for your business!</p>
    </footer>
  </article>`;

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
  console.log(image);
  const [currentTemplate, setCurrentTemplate] = useState(sample);
  const finalData = currentTemplate
    .replace("{{image}}", image)
    .replace("{{terms}}", terms)
    .replace("{{organizationName}}", organizationName)
    .replace("{{total}}", new Intl.NumberFormat().format(total))
    .replace("{{date}}", new Intl.DateTimeFormat("en-GB").format(new Date()))
    .replace("{{accountNumber}}", accountNumber)
    .replace("{{recipient}}", recipient)
    .replace("{{invoiceNumber}}", Math.round(Math.random() * 1000).toString())
    .replace("{{color}}", color)
    .replace("{{fontFamily}}", fontFamily)
    .replace("{{bg}}", bg)
    .replace("{{bank}}", bank);
  console.log(image);
  return (
    <div
      className="bg-[#fff] p-4 rounded-xl"
      dangerouslySetInnerHTML={{ __html: finalData }}
    ></div>
  );
}
