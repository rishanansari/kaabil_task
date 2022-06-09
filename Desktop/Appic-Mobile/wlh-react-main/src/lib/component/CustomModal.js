import React from 'react';
import Button from '@mui/material/Button';

import { TextField } from '@mui/material';

function CustomModal() {
  return (
    <div className="custom_modal">
      <div className="custom_modal_bg"></div>
      <div className="custom_modal_main">
        <div className="custom_modal_header d_flex_center">
          Cloning View Model
            <span >Close</span>
        </div>
        <div className="custom_modal_body">
          <h4>You are cloning Form - <b>SV Model Name 1 (#Model_ID)</b></h4>
          <div className="config_input">
            <TextField id="model_Name" label="Model Name" variant="outlined" defaultValue="SV Model Name 1" />
            <TextField id="model_ID" label="Model ID" variant="outlined" defaultValue="sv_model_id_1" />
          </div>
        </div>
        <div className="custom_modal_footer">
          <Button variant="outlined">Cancle</Button>
          <Button variant="contained">Confirm</Button>
        </div>
      </div>

    </div>
  )
}

export default CustomModal;