import React from "react";
import "./MenuModal.css";
import { VscHome } from "react-icons/vsc";
import { MdContactPhone } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegLifeRing } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";


const menuItems = [
    { icon: <VscHome />, label: "Home", screen: "welcome" },
    { icon: <FaRegBuilding />, label: "Quote", screen: "quote" },
    { icon: <MdContactPhone />, label: "Contact", screen: "contact" },
    { icon: <AiOutlineInfoCircle />, label: "About", screen: "about" },
    { icon: <FaRegHandshake />, label: "Partners", screen: "partners" },
    { icon: <FaRegLifeRing />, label: "Support", screen: "support" },
    { icon: <FaRegQuestionCircle />, label: "FAQ", screen: "faq" },
    { icon: <FaPhone />, label: "Call Us", screen: "call" } // Direct call link

];

export default function MenuModal ({ onClose, navigate}) {
    const handleMenuClick = (screen) => {
        navigate(screen);
        onClose();
    };


  return (
    <div className="modal-backdrop">
      <div className="modal-grid">
        <button className="close-btn" onClick={onClose}>☒</button>
        <div className="grid">
          {menuItems.map(({ screen, label, icon }) => (
            <div className="menu-item" key={screen} onClick={() => handleMenuClick(screen)}>
              <div className="menu-icon">{icon}</div>
              <div className="menu-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}