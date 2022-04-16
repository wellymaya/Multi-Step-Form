import { createContext, Dispatch, SetStateAction } from "react";

interface IFormContextData {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  formData: any;
  setFormData: Dispatch<SetStateAction<any[]>>;
  nextStep: () => void;
  previousStep: () => void;
  successfulRegister: boolean;
  setSuccessfulRegister: Dispatch<SetStateAction<boolean>>;
}

const FormContext = createContext<IFormContextData>({} as IFormContextData);

export default FormContext;
