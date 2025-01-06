import React, { useState } from "react";
import { useDarkMode } from "../components/DarkModeContext";

const FAQSection = () => {
  const { darkMode } = useDarkMode();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What services do you offer?", answer: "We offer a range of services including web development, SEO, and more." },
    { question: "How can I contact support?", answer: "You can contact support via email at support@example.com or call us at +123456789." },
    { question: "What is your refund policy?", answer: "Our refund policy allows refunds within 30 days of purchase, subject to certain conditions." },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'}`}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h1
          style={{
            fontSize: "2rem",
            textAlign: "center",
            marginBottom: "20px",
            color: darkMode ? "#fff" : "#000",
          }}
        >
          Frequently Asked Questions
        </h1>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              marginBottom: "10px",
              borderBottom: `1px solid ${darkMode ? "#555" : "#ccc"}`,
              paddingBottom: "10px",
              backgroundColor: darkMode ? "#333" : "#f9f9f9",
              borderRadius: "8px",
            }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              style={{
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                padding: "10px 0",
                fontSize: "1.2rem",
                fontWeight: "bold",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                color: darkMode ? "#fff" : "#000",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = darkMode
                  ? "#444"
                  : "#eee")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              {faq.question}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <p
                style={{
                  marginTop: "10px",
                  color: darkMode ? "#ddd" : "#666",
                  fontSize: "1rem",
                }}
              >
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
