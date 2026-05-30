export default function FAQ() {
  const faqs = [
    {
      question: "How can I book an appointment?",
      answer:
        "You can book an appointment online through our form or call our clinic directly.",
    },
    {
      question: "Do you provide emergency dental care?",
      answer:
        "Yes, we provide emergency dental care for urgent dental problems and pain relief.",
    },
    {
      question: "Are root canal treatments painful?",
      answer:
        "Modern root canal treatments are comfortable and performed using advanced techniques and anesthesia.",
    },
    {
      question: "Do you treat children?",
      answer:
        "Yes, we provide dental care for patients of all ages, including children.",
    },
    {
      question: "How often should I visit a dentist?",
      answer:
        "We recommend visiting every six months for regular checkups and professional cleaning.",
    },
  ];

  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-3">
            Quick answers to common dental questions.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-4 group"
            >
              <summary className="cursor-pointer font-medium text-gray-800 list-none flex justify-between items-center">
                {faq.question}
                <span className="transition-transform group-open:rotate-180">
                  ▼
                </span>
              </summary>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}