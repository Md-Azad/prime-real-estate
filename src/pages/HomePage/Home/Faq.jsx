const Faq = () => {
  return (
    <div className="md:px-12 space-y-4 my-4">
      <h1 className="text-3xl text-center">Most Ask question..</h1>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Q1: Why should I invest in your properties?
        </div>
        <div className="collapse-content">
          <p>
            Our properties are located in prime areas with high appreciation
            potential, offering excellent rental yields and long-term value
            growth. Plus, we ensure secure and transparent transactions for a
            hassle-free investment experience.
          </p>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          Do you offer financing options for property purchases?
        </div>
        <div className="collapse-content">
          <p>
            Yes! We collaborate with trusted financial institutions to provide
            flexible mortgage and financing solutions, making it easier for you
            to own your dream property.
          </p>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          How can I schedule a property viewing?
        </div>
        <div className="collapse-content">
          <p>
            You can book a viewing through our website by selecting your
            preferred property and scheduling an appointment. Alternatively, you
            can contact our team, and we’ll arrange a convenient time for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
