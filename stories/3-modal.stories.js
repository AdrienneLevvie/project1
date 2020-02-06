import React, { Children } from "react";
import ModalComponent from "../src/component/common-components/Modal";
import NewPatientModal from "../src/component/patient/AddPatient"
export default {
  title: "Modal"
};



export const AddPatientModal = () => (
  <NewPatientModal isOpen={true} title="New Patient">
      

  </NewPatientModal>
);
