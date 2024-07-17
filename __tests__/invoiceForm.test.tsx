import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import InvoiceForm from "@/app/components/InvoiceForm";
import { mockInvoiceFormData } from "../app/mocks/invoiceFormData";
import { banks } from "@/app/utils/banks";

describe("InvoiceForm Component", () => {
  global.URL.createObjectURL = jest.fn(() => "");
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders InvoiceForm with initial state", () => {
    render(<InvoiceForm data={mockInvoiceFormData} />);

    expect(screen.getByText("Create New Invoice")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Organization name")
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Recipient name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter amount")).toBeInTheDocument();
    expect(screen.getByText("Select bank")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter account number")
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter terms")).toBeInTheDocument();
    expect(screen.getByText("Text color")).toBeInTheDocument();
    expect(screen.getByText("Bg color")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  test("displays validation errors on invalid submission", async () => {
    const internalSubmit = jest.fn();
    render(
      <InvoiceForm
        data={{
          ...mockInvoiceFormData,
          handleSubmit: () => internalSubmit,
        }}
      />
    );
    fireEvent.change(screen.getByPlaceholderText("Organization name"), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByPlaceholderText("Recipient name"), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter amount"), {
      target: { value: "0" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter account number"), {
      target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter terms"), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByTestId("combobox"), {
      target: { value: "random" },
    });

    fireEvent.click(screen.getByTestId("submit"));
    expect(internalSubmit).toHaveBeenCalledTimes(0);
  });

  test("handles form submission", async () => {
    const mockHandleSubmit = jest.fn();
    render(
      <InvoiceForm
        data={{ ...mockInvoiceFormData, handleSubmit: () => mockHandleSubmit }}
      />
    );

    fireEvent.change(screen.getByPlaceholderText("Organization name"), {
      target: { value: "Test Org" },
    });
    fireEvent.change(screen.getByPlaceholderText("Recipient name"), {
      target: { value: "Test Recipient" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter amount"), {
      target: { value: "1000" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter account number"), {
      target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter terms"), {
      target: { value: "Test Terms" },
    });
    fireEvent.change(screen.getByTestId("combobox"), {
      target: { value: banks[0].id },
    });

    fireEvent.click(screen.getByTestId("submit"));

    expect(mockHandleSubmit).toHaveBeenCalled();
  });

  test("updates image on file input change", () => {
    render(<InvoiceForm data={mockInvoiceFormData} />);

    const fileInput = screen.getByTestId("file-input");
    const file = new File(["dummy content"], "example.png", {
      type: "image/png",
    });
    fireEvent.change(fileInput, { target: { files: [file] } });

    expect(mockInvoiceFormData.setValue).toHaveBeenCalledWith(
      "image",
      expect.any(String)
    );
  });

  test("updates color, font, and background values", () => {
    render(<InvoiceForm data={mockInvoiceFormData} />);

    fireEvent.change(screen.getByTestId("fontfamily"), {
      target: { value: "Arial" },
    });
    expect(mockInvoiceFormData.setValue).toHaveBeenCalledWith(
      "fontFamily",
      "Arial"
    );
    fireEvent.change(screen.getByTestId("color"), {
      target: { value: "#aaaaaa" },
    });
    expect(mockInvoiceFormData.setValue).toHaveBeenCalledWith(
      "color",
      "#aaaaaa"
    );
    fireEvent.change(screen.getByTestId("bgcolor"), {
      target: { value: "#0f0f0f" },
    });
    expect(mockInvoiceFormData.setValue).toHaveBeenCalledWith("bg", "#0f0f0f");
  });
});
