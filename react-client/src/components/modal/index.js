import * as React from 'react';
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal';

export default function ModalComponent({...props}) {
 
  const handleOpen = () => props.setOpen(true);
  const handleClose = () => props.setOpen(false);

  return (
    <Modal
      open={handleOpen}
      onClose={handleClose}
      aria-labelledby={props.title | ''}
      aria-describedby="modal-modal-description"
    >
      {props.content}
    </Modal>
  );
}
