import React, { useState } from 'react';
import StepCard from './StepCard';

export default function QuoteStepper() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    pickupLocation: '', deliveryLocation: '', pickupDate: '', deliveryDate: '',
    transportType: '', vehicleType: '', vehicleInfo: '', vehicleCondition: '',
    phone: '', email: '', additionalInfo: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      alert("Thank you for your request!\n" + JSON.stringify(formData, null, 2));
      setCurrentStep(0);
      setFormData({
        pickupLocation: '', deliveryLocation: '', pickupDate: '', deliveryDate: '',
        transportType: '', vehicleType: '', vehicleInfo: '', vehicleCondition: '',
        phone: '', email: '', additionalInfo: ''
      });
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const steps = [
    { question: "Pickup Location", fields: [{ name: "Pickup Location" }] },
    { question: "Delivery Location", fields: [{ name: "Delivery Location" }] },
    { question: "Pickup Date", fields: [{ name: "Pickup Date", type: "date" }] },
    { question: "Delivery Date", fields: [{ name: "Delivery Date", type: "date" }] },
    { question: "Transport Type", fields: [{ name: "Transport Type", type: "select", options: ["Open", "Enclosed"] }] },
    { question: "Vehicle Type", fields: [{ name: "Vehicle Type", type: "select", options: ["SUV", "Sedan", "Coupe", "Pickup", "Van", "Heavy Duty"] }] },
    { question: "Vehicle Year / Make / Model", fields: [{ name: "Vehicle Year / Make / Model" }] },
    { question: "Vehicle Condition", fields: [{ name: "Vehicle Condition", type: "select", options: ["Operable",  "Inoperable"] }] },
    { question: "Contact Information", fields: [{ name: "Your Phone Number", type: "text" }, { name: "Your Email Address", type: "text" }] },
    { question: "Additional Info (optional)", fields: [{ name: "Additional Info (optional)", type: "textarea" }] }
  ];

  return (
    <StepCard
      question={steps[currentStep].question}
      fields={steps[currentStep].fields}
      formData={formData}
      handleChange={handleChange}
      onNext={handleNext}
      onPrev={handlePrev}
      isFirstStep={currentStep === 0}
      isLastStep={currentStep === steps.length - 1}
    />
  );
}
