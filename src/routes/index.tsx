import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useContext } from "react";
import Form from "../pages/Form";
import Done from "../pages/Sucess";
import FormContext from "../contexts/FormContext";

function AppRoutes() {
  const { successfulRegister } = useContext(FormContext);

  return (
    <BrowserRouter>
      <Routes>
        {!successfulRegister && <Route path="/" element={<Form />} />}
        {successfulRegister && <Route path="/done" element={<Done />} />}
        <Route
          path="*"
          element={<Navigate to={successfulRegister ? "/done" : "/"} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
