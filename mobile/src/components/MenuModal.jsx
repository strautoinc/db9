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
    { icon: <VscHome />, label: "Home", link: "/" },
    { icon: <FaRegBuilding />, label: "Quote", link: "/quote" },
    { icon: <MdContactPhone />, label: "Contact", link: " /contact" },
    { icon: <AiOutlineInfoCircle />, label: "About", link: "/about" },
    { icon: <FaRegHandshake />, label: "Partners", link: "/partners" },
    { icon: <FaRegLightbulb />, label: "Carriers", link: "/carriers" },
    { icon: <FaRegLifeRing />, label: "Support", link: "/help" },
    { icon: <FaRegQuestionCircle />, label: "FAQ", link: "/faq" },
    { icon: <FaPhone />, label: "Call Us", link: "tel:+15613212756" } // Direct call link

];

export default function MenuModal ({ onClose, navigate}) {
    const handleMenuClick = (screen) => {
        navigate(screen);
        onClose();
    };

    return (
        <div className="modal-backdrop">
            <div className="modal-grid">
            </div>
                    <button className="close-btn" onClick={onClose}>X</button>
            <div className="grid">
                <div className="menu-item" onClick={() => handleMenuClick("/")}>
                    <span className="menu-icon"><VscHome /></span>
                    <span className="menu-label">{t("menu.home")}</span>
                </div>
                {menu.map((menuItem, index) => (
                    <div key={index} className="menu-item" onClick={() => handleMenuClick(menuItem.link)}>
                        <span className="menu-icon">{menuItem.icon}</span>
                        <span className="menu-label">{t(menuItem.label)}</span>
                    </div>
                ))}
            </div>
        </div>
    );
} 