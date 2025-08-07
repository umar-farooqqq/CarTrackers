import React from "react";

const Application = () => {
  return (
    <div className="bg-[#ffffff] min-h-screen py-10 px-2 md:px-0">
      <div className="flex justify-center items-center mb-6">
        <img
          src="/logoOrange.png"
          alt="car trackers"
          className="h-14 md:h-16 w-auto"
        />
      </div>
      <form className="max-w-4xl mx-auto bg-[#f4f4f4] p-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-wider">
          PRE-APPROVAL APPLICATION
        </h1>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="example@example.com"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="(000) 000 0000"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
            />
          </div>
        </div>

        {/* Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">&nbsp;</label>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
            />
          </div>
        </div>

        {/* DOB & SSN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Date of Birth<span className="text-red-500">*</span>{" "}
              <span className="text-xs text-gray-400">date</span>
            </label>
            <input
              type="text"
              placeholder="MM-DD-YYYY"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">
              Social Security number<span className="text-red-500">*</span>{" "}
              <span className="text-xs text-gray-400">without dashes</span>
            </label>
            <input
              type="text"
              placeholder="eg.,23"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
            />
          </div>
        </div>

        {/* Home Ownership */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Do you own or rent your home?<span className="text-red-500">*</span>
          </label>
          <div className="flex gap-6 mt-1">
            <label className="flex items-center gap-1 text-sm">
              <input type="radio" name="home" /> Own
            </label>
            <label className="flex items-center gap-1 text-sm">
              <input type="radio" name="home" /> Rent
            </label>
            <label className="flex items-center gap-1 text-sm">
              <input type="radio" name="home" /> live with parents
            </label>
          </div>
        </div>

        {/* Mortgage & Years/Months */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Monthly Mortgage/Rent<span className="text-red-500">*</span>{" "}
              <span className="text-xs text-gray-400">in USD</span>
            </label>
            <input
              type="text"
              placeholder="eg.,23"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">
              Years/Months at Address<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
            />
          </div>
        </div>

        {/* Current Address Section */}
        <div className="mb-2 mt-8">
          <h2 className="text-lg font-semibold mb-1 text-center">
            Current Address<span className="text-red-500">*</span>
          </h2>
          <div className="w-24 h-0.5 bg-gray-300 mb-4 mx-auto"></div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Street Address<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            2nd Street Address<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-semibold mb-1">
              City<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">
              State / Province<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
            />
          </div>
        </div>

        {/* Are you currently working? */}
        <div className="mb-2 mt-8">
          <label className="block text-sm font-semibold mb-1">
            Are You Currently Working?<span className="text-red-500">*</span>
          </label>
          <div className="flex gap-6 mt-1">
            <label className="flex items-center gap-1 text-sm">
              <input type="radio" name="working" /> Yes
            </label>
            <label className="flex items-center gap-1 text-sm">
              <input type="radio" name="working" /> No
            </label>
          </div>
        </div>

        {/* Work Address Section */}
        <div className="mb-2 mt-8">
          <h2 className="text-lg font-semibold mb-1 text-center">
            Work Address<span className="text-red-500">*</span>
          </h2>
          <div className="w-24 h-0.5 bg-gray-300 mb-4 mx-auto"></div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Street Address<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            2nd Street Address<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-semibold mb-1">
              City<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">
              State / Province<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Postal / Zip Code<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">
              Work Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="(000) 000 0000"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Gross Monthly Income<span className="text-red-500">*</span>{" "}
            <span className="text-xs text-gray-400">in USD</span>
          </label>
          <input
            type="text"
            placeholder="eg.,23"
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
          />
        </div>

        {/* Requested Vehicle Details Section */}
        <div className="mb-2 mt-8">
          <h2 className="text-lg font-semibold mb-1 text-center">
            Requested Vehicle Details<span className="text-red-500">*</span>
          </h2>
          <div className="w-48 h-0.5 bg-gray-300 mb-4 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Year<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="MM-DD-YYYY"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">
              Make<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="eg.,23"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Model<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="MM-DD-YYYY"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">
              Trim<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="eg.,23"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Mileage<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="MM-DD-YYYY"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">
              Color<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="eg.,23"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Full Price of Vehicle<span className="text-red-500">*</span>{" "}
            <span className="text-xs text-gray-400">in USD</span>
          </label>
          <input
            type="text"
            placeholder="eg.,23"
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
          />
        </div>

        {/* Requested Loan Details Section */}
        <div className="mb-2 mt-8">
          <h2 className="text-lg font-semibold mb-1 text-center">
            Requested Loan Details<span className="text-red-500">*</span>
          </h2>
          <div className="w-48 h-0.5 bg-gray-300 mb-4 mx-auto"></div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Loan Amount<span className="text-red-500">*</span>{" "}
            <span className="text-xs text-gray-400">in USD</span>
          </label>
          <input
            type="text"
            placeholder="eg.,23"
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
          />
        </div>

        {/* Term, Payment, Co-signer, Loan Type */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Term<span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col gap-1 mt-1">
              <label className="flex items-center gap-1 text-sm">
                <input type="radio" name="term" /> 1 Year
              </label>
              <label className="flex items-center gap-1 text-sm">
                <input type="radio" name="term" /> 2 Year
              </label>
              <label className="flex items-center gap-1 text-sm">
                <input type="radio" name="term" /> 3 Year
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">
              Preferred Payment<span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col gap-1 mt-1">
              <label className="flex items-center gap-1 text-sm">
                <input type="radio" name="payment" /> Monthly
              </label>
              <label className="flex items-center gap-1 text-sm">
                <input type="radio" name="payment" /> Yearly
              </label>
              <label className="flex items-center gap-1 text-sm">
                <input type="radio" name="payment" /> Other
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">
              Do you have a co-signer?<span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col gap-1 mt-1">
              <label className="flex items-center gap-1 text-sm">
                <input type="radio" name="cosigner" /> Yes
              </label>
              <label className="flex items-center gap-1 text-sm">
                <input type="radio" name="cosigner" /> No
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">
              Loan Type<span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col gap-1 mt-1">
              <label className="flex items-center gap-1 text-sm">
                <input type="radio" name="loantype" /> Used Car
              </label>
              <label className="flex items-center gap-1 text-sm">
                <input type="radio" name="loantype" /> New Car
              </label>
            </div>
          </div>
        </div>

        {/* Co-signer name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Co-signer name
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">&nbsp;</label>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Co-signer's Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">
              Co-signer's Social Security Number
              <span className="text-red-500">*</span>{" "}
              <span className="text-xs text-gray-400">Without dashes</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
            />
          </div>
        </div>

        {/* Permission Section */}
        <div className="mt-8 mb-4">
          <h3 className="font-bold mb-2">
            Permission to Obtain Consumer Credit Report
          </h3>
          <p className="text-xs text-gray-700 mb-2">
            By signing this application form, I hereby give the right to obtain
            a consumer credit report regarding me for this application and the
            car loan should my application be approved. I also release from all
            liability all persons, companies, and corporations supplying such
            information. I the indemnify "XYZ Bank" the against any liability
            that might result from making such an investigation.
            <br />I certify that the information above is correct to the best of
            my knowledge. I authorize "XYZ Bank" to make inquiries as necessary
            to verify the accuracy of the statements made by me and to determine
            my creditworthiness. I agree to pay the required sums and I agree to
            be bound by the loan agreement if my application is accepted.
          </p>
        </div>

        {/* Signature */}
        <div className="mb-8">
          <label className="block text-sm font-semibold mb-1">
            Signature<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-96 border border-gray-300 rounded px-3 py-8 bg-white"
          />
        </div>

        {/* Dealership line and Submit button */}
        <div className="flex flex-col gap-4 mb-2">
          <div className="flex justify-end">
            <span className="text-sm text-black">
              Don't have a dealership offer?{" "}
              <a href="#" className="underline">
                Click HERE to get a free quote.
              </a>
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded transition-all duration-200 text-lg flex items-center justify-center gap-2"
          >
            SUBMIT NOW
            <span className="text-xl">
              <img src="/rightarrow.svg" alt="" className="w-4 h-4" />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Application;
