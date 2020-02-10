import React from "react";
import Modal from "../common-components/Modal";
import DialogContent from "@material-ui/core/DialogContent";
import {Container, Paper, Card, Typography, Avatar } from "@material-ui/core";
import { FIELDS as personal, FIELDS2 as family } from './controller/TextFieldCtrllr'
import InputField from './Textfield'
import ImageUploader from 'react-images-upload';

export default props => {
  const { isOpen, title, handleClose } = props;
  return (
    <Modal title={title} open={isOpen} handleClose={handleClose}>
      <DialogContent style={{display: 'flex'}}>
        <Paper variant="outlined" elevation={1} style={{width: '100%', padding: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Avatar style={{width: '150px', height: '150px'}}/>
          <ImageUploader withIcon={true}
                buttonText='Choose images'
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                label="Max Size: 5mb"
            />
          <InputField fields={personal} title="Personal Information" />
        </Paper>
      </DialogContent>
    </Modal>
  );
};
