import React, { useState } from 'react';
import StepCard from './StepCard';

export default function CarrierSignup() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    companyName: '', contactName: '', phone: '', email: '',
    address: '', city: '', state: '', zip: '',
    insuranceProvider: '', policyNumber: '',
    mcNumber: '', dotNumber: '',
    preferredVehicleTypes: '', preferredTransportMethod: '', expectedVolume: '',
    specialRequirements: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      alert("Carrier Signup Complete:\n" + JSON.stringify(formData, null, 2));
      // Replace alert with API call / submission logic
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const steps = [
    { question: "Company Name", fields: [{ name: "Company Name" }] },
    { question: "Contact Info", fields: [{ name: "Contact Name" }, { name: "Phone" }, { name: "Email" }] },
    { question: "Address", fields: [{ name: "Address" }, { name: "City" }, { name: "State", type: "select", options: ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"] }, { name: "Zip" }] },
    { question: "Insurance Info", fields: [{ name: "Insurance Provider" }, { name: "Policy Number" }] },
    { question: "Authority Info", fields: [{ name: "MC Number" }, { name: "DOT Number" }, {name: "CA Number (if applicable)"}] },
    {
      question: "Transport Preferences",
      fields: [
        { name: "Preferred Vehicle Types", type: "multiselect", options: ["SUV", "Sedan", "Coupe", "Pickup", "Van", "Heavy Duty"] },
        { name: "Preferred Transport Method", type: "multiselect", options: ["Open", "Enclosed"] },
        { name: "Expected Volume Per Month", type: "select", options: ["1-10", "11-50", "51-100", "101-200"] }
      ]
    },
    { question: "Special Requirements", fields: [{ name: "Special Requirements (optional)" }] }
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