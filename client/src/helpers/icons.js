import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
export const icons = {
  Facebook: () => <FaFacebookF size={28} />,
  Instagram: () => <FaInstagram size={28} />,
  Youtube: () => <FaYoutube size={28} />,
};
export const otherIcons = {
  Call: () => <IoCall size={24} />,
};
