import React from "react";
import { useNavigate } from "react-router";
import { FaQuestionCircle } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFAQs = async () => {
      const data = await getFAQ();
      setFaqs(data);
    };
    fetchFAQs();
  }, []);

  return (
    <div className="faq-container">
      <h1>{t("faq.title")}</h1>
      <ul>
        {faqs.map((faq) => (
          <li key={faq.id}>
            <FaQuestionCircle className="faq-icon" />
            <span>{t(faq.question)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
