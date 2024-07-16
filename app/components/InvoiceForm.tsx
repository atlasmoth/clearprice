import { banks } from "../utils/banks";
import { Controller } from "react-hook-form";
import { ArrowUpOnSquareIcon } from "@heroicons/react/20/solid";
export default function InvoiceForm({ data }: { data: any }) {
  const { fontFamily, color, bg, control, errors, setValue, image } = data;

  return (
    <form className="bg-[#fff] p-4 rounded-xl overflow-y-scroll max-h-[100vh] pb-10">
      <h4>Create New Invoice</h4>
      <div className="mt-4">
        <p>Logo</p>
        <div className="border-dashed w-[100px] h-[100px] border-2 mt-2 flex items-center justify-center relative overflow-hidden rounded-xl cursor-pointer panel-parent">
          {image ? (
            <img
              src={image}
              alt="Logo"
              className="w-[100%] h-[100%] object-cover absolute top-0 bottom-0 left-0 right-0 z-10"
            />
          ) : null}
          <div
            className={`absolute top-0 bottom-0 z-20 flex items-center justify-center bg-[rgba(0,0,0,0.5)] left-0 right-0 ${
              image ? "panel" : ""
            }`}
          >
            <ArrowUpOnSquareIcon color="rgba(255,255,255,0.9)" width={60} />
          </div>
          <input
            type="file"
            accept="image/*"
            className="opacity-0 absolute top-0 bottom-0 left-0 right-0 z-30"
            onChange={(e) => {
              const [file] = Array.from(e.target.files || []);
              if (file) {
                const blob = new Blob([file]);
                const fileURL = URL.createObjectURL(blob);
                setValue("image", fileURL);
              }
            }}
          />
        </div>
      </div>
      <div className="mt-4">
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 1,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <label htmlFor="organizationName">
              <p>Organization</p>

              <input
                type="text"
                className="mt-2 bg-[#F8F9FD] px-4 rounded-lg h-[40px] w-[100%]"
                placeholder="Organization name"
                required
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            </label>
          )}
          name="organizationName"
        />
        {errors.organizationName && (
          <p className="text-red-500">Please enter valid orgnization name</p>
        )}
      </div>
      <div className="mt-4">
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 1,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <label htmlFor="recipient">
              <p>Recipient</p>
              <input
                type="text"
                className="mt-2 bg-[#F8F9FD] px-4 rounded-lg h-[40px] w-[100%]"
                placeholder="Recipient name"
                required
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            </label>
          )}
          name="recipient"
        />
        {errors.recipient && (
          <p className="text-red-500">Please enter valid recipient</p>
        )}
      </div>
      <div className="mt-4">
        <Controller
          control={control}
          rules={{
            required: true,
            min: 0,
            pattern: {
              value: new RegExp(/^[1-9]\d*$/),
              message: "Enter valid amount",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <label htmlFor="total">
              <p>Total</p>
              <input
                type="number"
                className="mt-2 bg-[#F8F9FD] px-4 rounded-lg h-[40px] w-[100%]"
                placeholder="Enter amount"
                required
                min={0}
                onBlur={onBlur}
                onChange={(e) => {
                  setValue("total", Number(e.target.value));
                }}
                value={Number(value).toString()}
              />
            </label>
          )}
          name="total"
        />
        {errors.total && (
          <p className="text-red-500">Please enter valid amount</p>
        )}
      </div>
      <div className="mt-4">
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 1,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <label htmlFor="bank">
              <p>Select bank</p>
              <select
                name="bank"
                id="bank"
                className="mt-2 bg-[#F8F9FD] px-4 rounded-lg h-[40px] w-[100%]"
                required
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              >
                <option>Choose bank</option>
                {banks.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </select>
            </label>
          )}
          name="bank"
        />
        {errors.recipient && (
          <p className="text-red-500">Please select valid bank</p>
        )}
      </div>
      <div className="mt-4">
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: {
              value: new RegExp(/^[1-9]\d*$/),
              message: "Enter valid amount",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <label htmlFor="bankAccount">
              <p>Account number</p>
              <input
                type="text"
                className="mt-2 bg-[#F8F9FD] px-4 rounded-lg h-[40px] w-[100%]"
                placeholder="Enter account number"
                required
                min={0}
                minLength={10}
                maxLength={10}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            </label>
          )}
          name="accountNumber"
        />
        {errors.total && (
          <p className="text-red-500">Please enter valid account number</p>
        )}
      </div>
      <div className="mt-4">
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 1,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <label htmlFor="terms">
              <p>Terms</p>
              <textarea
                className="mt-2 bg-[#F8F9FD] px-4 rounded-lg h-[40px] w-[100%] pt-2"
                placeholder="Enter terms"
                required
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
              {errors.terms && (
                <p className="text-red-500">Please enter terms</p>
              )}
            </label>
          )}
          name="terms"
        />
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center flex-col">
          <div className="relative">
            <label
              className={`rounded-[300px] w-[20px] h-[20px] border-[rgba(0,0,0,0.8)] border-[1px] z-10 relative block cursor-pointer`}
              style={{ backgroundColor: color }}
              htmlFor="color"
            ></label>
            <input
              type="color"
              className="invisible absolute top-0 bottom-0 left-0 right-0"
              id="color"
              name="color"
              value={color}
              onChange={(e) => {
                setValue("color", e.target.value);
              }}
            />
          </div>

          <p className="mt-1 text-sm">Text color</p>
        </div>
        <label className="flex items-center flex-col" htmlFor="fontfamily">
          <div className="relative">
            <p className="cursor-pointer" style={{ fontFamily }}>
              Aa
            </p>
          </div>

          <select
            id="fontfamily"
            name="fontfamily"
            value={fontFamily}
            onChange={(e) => {
              setValue("fontFamily", e.target.value);
            }}
            onBlur={(e) => {
              setValue("fontFamily", e.target.value);
            }}
          >
            <option value="Rubik">Rubik</option>
            <option value="Times">Times</option>
            <option value="Arial">Arial</option>
            <option value="Georgia">Georgia</option>
          </select>
        </label>
        <div className="flex items-center flex-col">
          <div className="relative">
            <label
              style={{ backgroundColor: bg }}
              className="rounded-[300px] w-[20px] h-[20px]  border-[rgba(0,0,0,0.8)] border-[1px] z-10 relative block cursor-pointer"
              htmlFor="bgcolor"
            ></label>
            <input
              type="color"
              className="invisible absolute top-0 bottom-0 left-0 right-0"
              id="bgcolor"
              name="bgcolor"
              value={bg}
              onChange={(e) => {
                setValue("bg", e.target.value);
              }}
            />
          </div>

          <p className="mt-1 text-sm">Bg color</p>
        </div>
      </div>
    </form>
  );
}
