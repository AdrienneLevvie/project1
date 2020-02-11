import React, { useContext } from "react";
import Modal from "../common-components/Modal";
import DialogContent from "@material-ui/core/DialogContent";
import { Paper, Avatar, Button } from "@material-ui/core";
import { FIELDS as personal } from "./controller/TextFieldCtrllr";
import InputField from "./Textfield";
import { useDispatch } from "react-redux";
import { pass_data } from "redx/actions";
import { PatientDataContext } from "context/DataProvider";

export default props => {
  const rdxDISPATCH = useDispatch();
  const context_value = useContext(PatientDataContext);
  const { isOpen, title, handleClose } = props;
  return (
    <Modal
      title={title}
      open={isOpen}
      handleClose={handleClose}
      handleSubmit={event => {
        event.preventDefault();
        rdxDISPATCH(pass_data(context_value));
        handleClose(event);
      }}
    >
      <DialogContent style={{ display: "flex" }}>
        <Paper
          variant="outlined"
          elevation={1}
          style={{
            width: "100%",
            padding: "5px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar style={{ width: "150px", height: "150px" }} />

          <InputField fields={personal} title="Personal Information" />
        </Paper>
      </DialogContent>
    </Modal>
  );
};
