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

export function AddEmployee(props) {
  const {
    handleClose,
    handleOpen,
    open,
    empName,
    age,
    dept,
    setEmpName,
    setAge,
    setDept,
    addEmployeeToTable,
  } = props;
  return (
    <div>
      <Button variant="contained" type="button" onClick={handleOpen}>
        Add Employee
      </Button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Paper style={{ height: 205, width: 210 }}>
          <Grid container direction="column" alignContent="center">
            <Grid item>
              <TextField
                id="empName"
                label="Employee Name"
                variant="filled"
                value={undefined || empName}
                onChange={(e) => {
                  setEmpName(e.target.value);
                }}
                required
              />
            </Grid>
            <Grid item>
              <TextField
                id="age"
                label="Age"
                variant="filled"
                value={undefined || age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                required
              />
            </Grid>
            <Grid item>
              <TextField
                id="dept"
                label="Department"
                variant="filled"
                value={undefined || dept}
                onChange={(e) => {
                  setDept(e.target.value);
                }}
                required
              />
            </Grid>
            <Button variant="contained" onClick={addEmployeeToTable}>
              Add Employee
            </Button>
          </Grid>
        </Paper>
      </StyledModal>
    </div>
  );
}
