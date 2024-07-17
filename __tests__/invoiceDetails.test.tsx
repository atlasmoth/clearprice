import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import InvoiceDetails from "@/app/components/InvoiceDetails";
import { InvoiceFormData } from "@/app/utils/interfaces";

// Mock fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: [
          {
            Id: "1",
            Name: "Template 1",
            Version: "1.0",
            Content: "{{organizationName}} {{total}}",
          },
          {
            Id: "2",
            Name: "Template 2",
            Version: "1.0",
            Content: "{{recipient}} {{accountNumber}}",
          },
        ],
      }),
  })
) as jest.Mock;

const mockData: Omit<
  InvoiceFormData,
  "errors" | "setValue" | "handleSubmit" | "register"
> = {
  fontFamily: "Arial",
  color: "#000000",
  bg: "#FFFFFF",
  image: "logo.png",
  terms: "Net 30",
  organizationName: "Test Company",
  total: 1000,
  accountNumber: "1234567890",
  recipient: "John Doe",
  bank: "Test Bank",
};

describe("InvoiceDetails", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders without crashing", () => {
    render(<InvoiceDetails data={mockData} />);
    expect(screen.getByText("Template:")).toBeInTheDocument();
  });

  test("fetches templates on mount", async () => {
    render(<InvoiceDetails data={mockData} />);
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
    expect(global.fetch).toHaveBeenCalledWith("/api/v1/invoice/templates");
  });

  test("displays fetched templates in the dropdown", async () => {
    render(<InvoiceDetails data={mockData} />);
    await waitFor(() =>
      expect(screen.getByText("Template 1")).toBeInTheDocument()
    );
    expect(screen.getByText("Template 2")).toBeInTheDocument();
  });

  test("changes template when a new option is selected", async () => {
    render(<InvoiceDetails data={mockData} />);
    await waitFor(() =>
      expect(screen.getByText("Template 1")).toBeInTheDocument()
    );

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "1" } });

    expect(select).toHaveValue("1");
  });

  test("renders template content with replaced placeholders", async () => {
    render(<InvoiceDetails data={mockData} />);
    await waitFor(() =>
      expect(screen.getByText("Test Company 1,000")).toBeInTheDocument()
    );
  });

  test("handles fetch error gracefully", async () => {
    console.log = jest.fn();
    global.fetch = jest.fn(() => Promise.reject("API error")) as jest.Mock;

    render(<InvoiceDetails data={mockData} />);
    await waitFor(() => expect(console.log).toHaveBeenCalledWith("API error"));
  });
});
