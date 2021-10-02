import * as React from "react";
import { styled, Box } from "@mui/system";
import { Paper, TextField } from "@mui/material";
import ModalUnstyled from "@mui/core/ModalUnstyled";
import { Grid, Button } from "@material-ui/core";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  p: 2,
  px: 4,
  pb: 3,
};

export function DeleteDepartment(props) {
  const {
    deptNameToDelete,
    setDeptNameToDelete,
    deleteDepartment,
    deptFormOpen,
    handleDeptFormOpen,
    handleDeptFormClose,
  } = props;
  return (
    <div>
      <Button variant="contained" type="button" onClick={handleDeptFormOpen}>
        Delete Department
      </Button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={deptFormOpen}
        onClose={handleDeptFormClose}
        BackdropComponent={Backdrop}
      >
        <Paper style={{ height: 94, width: 400 }}>
          <Grid container direction="column" alignContent="stretch">
            <Grid item>
              <TextField
                id="deptNameToDelete"
                label="Department Name To Delete"
                variant="filled"
                value={undefined || deptNameToDelete}
                onChange={(e) => {
                  setDeptNameToDelete(e.target.value);
                }}
                style={{ width: "100%" }}
              />
            </Grid>
            <Button variant="contained" onClick={deleteDepartment}>
              Delete Department
            </Button>
          </Grid>
        </Paper>
      </StyledModal>
    </div>
  );
}
