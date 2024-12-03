"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Login from "./Login";
import Footer from "./Footer";
import Security from "./Security";
import useMockLogin from "../hooks/useMockLogin";
import TopBar from "./TopBar";
function Home({ adminId, posterId }) {
  const [showModal, setShowModal] = useState(false);

  const { login } = useMockLogin(adminId, posterId, setShowModal);

  return (
    <>
      {!showModal && (
        <>
          <TopBar />
          <Login login={login} />
          <Footer />
        </>
      )}

      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Security setShowModal={setShowModal} />
        </motion.div>
      )}
    </>
  );
}

export default Home;
