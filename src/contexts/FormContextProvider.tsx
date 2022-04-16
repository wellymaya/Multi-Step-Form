import { ReactNode, useState } from "react";
import FormContext from "./FormContext";

interface FormProviderProps {
  children: ReactNode;
}
interface IformData {
  email: string;
  name: string;
  lastName: string;
  adress: string;
  country: string;
}

export function FormContextProvider({ children }: FormProviderProps) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [successfulRegister, setSuccessfulRegister] = useState(false);
  const [formData, setFormData] = useState<IformData[]>([]);

  const nextStep = () => {
    currentStep <= 3 ? setCurrentStep(currentStep + 1) : currentStep;
  };

  const previousStep = () => {
    currentStep > 0 ? setCurrentStep(currentStep - 1) : currentStep;
  };

  return (
    <FormContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        setFormData,
        nextStep,
        previousStep,
        formData,
        successfulRegister,
        setSuccessfulRegister,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
