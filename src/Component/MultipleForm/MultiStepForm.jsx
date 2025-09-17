import { useState } from "react";
import "./styles.scss";

export default function MultiStepForm() {
  const formsSteps = [
    {
      label: "Name",
      name: "name",
      type: "name",
      placeholder: "Enter your name",
      validate: (value) => value.trim() !== "" || "Please enter your name",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter your Email",
      validate: (value) => value.trim() !== "" || "Please enter your email",
    },
    {
      label: "Phone",
      name: "phone",
      type: "text",
      placeholder: "Enter your Phone",
      maxLength: 10,
      validate: (value) => value.trim() !== "" || "Please enter your Phone",
    },
  ];

  const [step, setStep] = useState(0);
  const [success, setSuccess] = useState(false);
  const [formsData, setFormsData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState("");

  const currentStep = formsSteps[step];

  const handleChange = (e) => {
    setFormsData({
      ...formsData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleNext = () => {
  //   if (step === 1) {
  //     if (formsData.name.trim() !== "") {
  //       setStep(2);
  //       setErrors("");
  //     } else {
  //       setErrors(`Please enter your Name`);
  //     }
  //   } else if (step === 2) {
  //     if (formsData.email.trim() !== "") {
  //       setStep(3);
  //       setErrors("");
  //     } else {
  //       setErrors(`Please enter your Email`);
  //     }
  //   } else if (step === 3) {
  //     if (formsData.phone.trim() !== "") {
  //       alert("form Submitteed Succesfully");
  //       setErrors("");
  //     } else {
  //       setErrors(`Please enter your Phone number`);
  //     }
  //     console.log(formsData);
  //   }
  // };

  const handleNext = () => {
    const value = formsData[currentStep.name];
    const valid = currentStep.validate(value);

    if (valid === true) {
      if (step < formsSteps.length - 1) {
        setStep(step + 1);
        setErrors("");
      } else {
        setSuccess(true);
        console.log(formsData);
      }
    } else {
      setErrors(valid);
    }
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
    setErrors("");
  };
  return (
    <div className="form-container">
      <h1 className="form-title">Multi Step Form</h1>
      {success && (
        <div>
          <h2> Form Submitted! Thanks</h2>
        </div>
      )}
      {!success && (
        <div>
          <h2 className="form-step">
            Step {step + 1} : {currentStep.label}
          </h2>

          <div className="form-group">
            <label htmlFor={currentStep.name}>{currentStep.label}</label>
            <input
              className="form-input"
              id={currentStep.name}
              type={currentStep.type}
              name={currentStep.name}
              placeholder={currentStep.placeholder}
              value={formsData[currentStep.name]}
              onChange={handleChange}
              maxLength={currentStep.maxLength}
            />
          </div>

          {errors && <div className="form-error">{errors}</div>}

          <div className="form-buttons">
            {step !== 0 && (
              <button className="btn btn-back" onClick={handleBack}>
                Back
              </button>
            )}
            <button className="btn btn-next" onClick={handleNext}>
              {step >= formsSteps.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      )}
            {/* For Hard Code */}
      {/* {step === 1 && (
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formsData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          <label style={{ color: "red" }}>{errors}</label>
        </div>
      )}

      {step === 2 && (
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formsData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <label style={{ color: "red" }}>{errors}</label>
        </div>
      )}

      {step === 3 && (
        <div>
          <label>Phone</label>
          <input
            type="number"
            name="phone"
            value={formsData.phone}
            onChange={handleChange}
            placeholder="enter your phone number"
          />
          <label style={{ color: "red" }}>{errors}</label>
        </div>
      )} */}

    </div>

    
  );
}
