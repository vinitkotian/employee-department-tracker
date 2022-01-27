import { AddEmployee } from "../add-employee";
import { EmployeeDepartmentTable } from "../employee-department-table";
import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { DeleteDepartment } from "../delete-department";
import { FilterByDepartMent } from "../filter-by-department";

let initialData = [
  {
    id: 1,
    name: "Vinit",
    age: 24,
    dept: "Technology",
  },
  {
    id: 2,
    name: "Kurunei",
    age: 24,
    dept: "Finance",
  },
  {
    id: 3,
    name: "Abhishek",
    age: 25,
    dept: "Technology",
  },
  {
    id: 4,
    name: "Jhonty",
    age: 28,
    dept: "HR",
  },
  {
    id: 5,
    name: "Mainak",
    age: 26,
    dept: "Sales",
  },
  {
    id: 6,
    name: "Satyam",
    age: 29,
    dept: "Sales",
  },
  {
    id: 7,
    name: "Ujwal",
    age: 24,
    dept: "HR",
  },
  {
    id: 8,
    name: "Nikhil",
    age: 28,
    dept: "Technology",
  },
  {
    id: 9,
    name: "Pratik",
    age: 28,
    dept: "Finance",
  },
  {
    id: 10,
    name: "Harshil",
    age: 25,
    dept: "Finance",
  },
  {
    id: 11,
    name: "Sudharshan",
    age: 24,
    dept: "Finance",
  },
];

export function MainContainer() {
  const [data, setData] = React.useState([...initialData]);
  const [originalData] = React.useState(data);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Add employee form state
  const [empName, setEmpName] = React.useState(undefined);
  const [age, setAge] = React.useState(undefined);
  const [dept, setDept] = React.useState(undefined);

  //Delete Department form state
  const [deptNameToDelete, setDeptNameToDelete] = React.useState("");
  const [deptFormOpen, setDeptFormOpen] = React.useState(false);
  const handleDeptFormOpen = () => {
    setDeptFormOpen(true);
    setDeptNameToDelete(undefined);
  };
  const handleDeptFormClose = () => setDeptFormOpen(false);

  //Filter By Department State
  const [filterByDeptOpen, setFilterByDeptOpen] = React.useState(false);
  const handleFilterDeptOpen = () => {
    setFilterByDeptOpen(true);
  };
  const handleFilterDeptClose = () => setFilterByDeptOpen(false);

  const addEmployeeToTable = () => {
    let updatedData = [...data];
    updatedData.push({
      id: updatedData.length,
      name: empName,
      age: age,
      dept: dept,
    });
    setData(updatedData);
    handleClose();
  };

  const deleteDepartment = () => {
    if (deptNameToDelete) {
      let updatedData = [...data];
      updatedData = updatedData.filter(
        (record) => record.dept.toLowerCase() !== deptNameToDelete.toLowerCase()
      );
      setData(updatedData);
      handleDeptFormClose();
    }
  };

  const resetData = () => setData(originalData);

  return (
    <Grid container={true} alignContent="center" direction="column">
      <Grid item={true} style={{ alignSelf: "center", margin: "20px" }}>
        <Typography variant="h5">
          Employee/Department Tracking System
        </Typography>
      </Grid>
      <Grid item={true}>
        <Grid container direction="row" spacing={9}>
          <Grid item={true}>
            <AddEmployee
              handleOpen={handleOpen}
              handleClose={handleClose}
              open={open}
              setEmpName={setEmpName}
              setAge={setAge}
              setDept={setDept}
              addEmployeeToTable={addEmployeeToTable}
            />
          </Grid>
          <Grid item={true}>
            <FilterByDepartMent
              filterByDeptOpen={filterByDeptOpen}
              handleFilterDeptClose={handleFilterDeptClose}
              handleFilterDeptOpen={handleFilterDeptOpen}
              data={data}
            />
          </Grid>
          <Grid item={true}>
            <DeleteDepartment
              deleteDepartment={deleteDepartment}
              deptFormOpen={deptFormOpen}
              handleDeptFormOpen={handleDeptFormOpen}
              handleDeptFormClose={handleDeptFormClose}
              deptNameToDelete={deptNameToDelete}
              setDeptNameToDelete={setDeptNameToDelete}
            />
          </Grid>
          <Grid item={true}>
            <Button variant="contained" onClick={resetData}>
              Reset Data
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item={true}>
        <EmployeeDepartmentTable data={data} setData={setData} />
      </Grid>
    </Grid>
  );
}
