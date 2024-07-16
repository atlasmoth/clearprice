export function GET() {
  return Response.json({
    success: true,
    data: [
      {
        Id: "template-id-1",
        Name: "Minimal Layout",
        Version: "1.0",
        Content: ` <article
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
            <th style="border: 1px solid #ddd; padding: 10px; text-align: left; width : 50%;">
              Terms
            </th>
            <th
              style="border: 1px solid #ddd; padding: 10px; text-align: right;width : 50%;"
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
  </article>`,
      },
      {
        Id: "template-id-2",
        Name: "Compact Layout",
        Version: "1.0",
        Content: `<div style="
  font-family: {{fontFamily}};
  color: {{color}};
  background: {{bg}};
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
">
  <header style="
    grid-column: 1 / -1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 2px solid {{color}};
  ">
    <img src="{{image}}" alt="Company Logo" style="height: 60px; width: 60px; border-radius: 50%;">
    <h1 style="margin: 0; font-size: 2.5em;">{{organizationName}}</h1>
  </header>

  <aside style="
    grid-row: 2 / 3;
    padding: 20px;
    border-right: 2px solid {{color}};
  ">
    <h2 style="margin-top: 0;">Invoice Details</h2>
    <p><strong>Date:</strong> {{date}}</p>
    <p><strong>Invoice Number:</strong> {{invoiceNumber}}</p>
    <h3>Bill To:</h3>
    <p>{{recipient}}</p>
    <h3>Payment Details:</h3>
    <p><strong>Bank:</strong> {{bank}}</p>
    <p><strong>Account:</strong> {{accountNumber}}</p>
  </aside>

  <main style="
    grid-row: 2 / 3;
    padding: 20px;
  ">
    <div style="
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    ">
      <h2 style="margin: 0;">Invoice Summary</h2>
      <div style="
        font-size: 1.5em;
        font-weight: bold;
        padding: 10px 20px;
        background-color: {{color}};
        color: {{bg}};
        border-radius: 10px;
      ">
        ₦{{total}}
      </div>
    </div>
    <div style="
      border: 2px solid {{color}};
      border-radius: 10px;
      padding: 20px;
    ">
      <h3 style="margin-top: 0;">Terms</h3>
      <p>{{terms}}</p>
    </div>
  </main>

  <footer style="
    grid-column: 1 / -1;
    text-align: center;
    padding: 20px;
    border-top: 2px solid {{color}};
  ">
    <p style="margin: 0;">Thank you for your business!</p>
  </footer>
</div>`,
      },
      {
        Id: "template-id-3",
        Name: "Modern Layout",
        Version: "1.0",
        Content: `<div style="
  font-family: {{fontFamily}};
  color: {{color}};
  background: {{bg}};
  display: flex;
  flex-direction: column;
  padding: 2rem;
">
  <header style="
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  ">
    <div style="display: flex; align-items: center; gap: 1rem;">
      <img src="{{image}}" alt="Company Logo" style="height: 50px; width: 50px; border-radius: 10px;">
      <h1 style="margin: 0; font-size: 1.5rem;">{{organizationName}}</h1>
    </div>
    <div style="text-align: right;">
      <p style="margin: 0;"><strong>Invoice #{{invoiceNumber}}</strong></p>
      <p style="margin: 0;">{{date}}</p>
    </div>
  </header>

  <main style="
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  ">
    <section style="
      background-color: rgba(255,255,255,0.1);
      border-radius: 15px;
      padding: 1.5rem;
    ">
      <h2 style="margin-top: 0;">Bill To</h2>
      <p>{{recipient}}</p>
    </section>

    <section style="
      background-color: rgba(255,255,255,0.1);
      border-radius: 15px;
      padding: 1.5rem;
    ">
      <h2 style="margin-top: 0;">Invoice Details</h2>
      <div style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
      ">
        <div>
          <h3 style="margin: 0;">Terms</h3>
          <p>{{terms}}</p>
        </div>
        <div style="
          background-color: {{color}};
          color: {{bg}};
          padding: 1rem 2rem;
          border-radius: 10px;
          font-size: 1.5rem;
          font-weight: bold;
        ">
          ₦{{total}}
        </div>
      </div>
    </section>

    <section style="
      background-color: rgba(255,255,255,0.1);
      border-radius: 15px;
      padding: 1.5rem;
    ">
      <h2 style="margin-top: 0;">Payment Details</h2>
      <p><strong>Bank Name:</strong> {{bank}}</p>
      <p><strong>Account Number:</strong> {{accountNumber}}</p>
    </section>
  </main>

  <footer style="
    text-align: center;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255,255,255,0.2);
  ">
    <p>Thank you for your business!</p>
  </footer>
</div>`,
      },
    ],
  });
}

export async function POST() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return Response.json({
    success: true,
    data: {},
  });
}
