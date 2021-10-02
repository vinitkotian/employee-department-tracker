import * as React from "react";
import { styled, Box } from "@mui/system";
import { InputLabel, Paper, TextField } from "@mui/material";
import ModalUnstyled from "@mui/core/ModalUnstyled";
import { Grid, Button, Typography } from "@material-ui/core";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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

export function FilterByDepartMent(props) {
  const {
    handleFilterDeptClose,
    handleFilterDeptOpen,
    filterByDeptOpen,
    data,
  } = props;
  const [deptNameToFilter, setDeptNameToFilter] = React.useState(undefined);

  const departmentList = data.map((record) => record.dept);
  const uniqueSetOfDepartments = departmentList.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

  const handleDeptSelection = (event) => {
    setDeptNameToFilter(event.target.value);
  };

  return (
    <div>
      <Button variant="contained" type="button" onClick={handleFilterDeptOpen}>
        Filter By Department
      </Button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={filterByDeptOpen}
        onClose={handleFilterDeptClose}
        BackdropComponent={Backdrop}
      >
        <Paper style={{ height: 500, width: 500, margin: "20px 5px 5px 5px" }}>
          <Grid
            container
            direction="column"
            alignContent="center"
            justifyContent="center"
          >
            <Grid item>
              <Box sx={{ minWidth: 200 }} style={{ marginTop: "20px" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Department To Filter
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={deptNameToFilter}
                    label="Enter Department Name"
                    onChange={handleDeptSelection}
                  >
                    {uniqueSetOfDepartments.map((deptName) => (
                      <MenuItem value={deptName}>{deptName}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item>
              <ol>
                {deptNameToFilter
                  ? data.map((record) => {
                      if (
                        record.dept.toLowerCase() ===
                        deptNameToFilter.toLowerCase()
                      ) {
                        return (
                          <li>
                            <Typography variant="h5">{record.name}</Typography>
                          </li>
                        );
                      }
                    })
                  : ""}
              </ol>
            </Grid>
          </Grid>
        </Paper>
      </StyledModal>
    </div>
  );
}
