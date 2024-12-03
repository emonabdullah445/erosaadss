"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Header from "./components/TopBar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Security from "./components/Security";
import useMockLogin from "./hooks/useMockLogin";
import TopBar from "./components/TopBar";

function Home() {
  const [showModal, setShowModal] = useState(false);

  // const { login } = useMockLogin(adminId, posterId, setShowModal);

  return <>Eros</>;
}

export default Home;
