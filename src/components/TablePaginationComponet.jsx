import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
   
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
   
  },
  {
    id: "Acciones",
    label: "Acciones",
    minWidth: 170,
    align: "center",
  },
  
  
];





const countries = [
  {
    name: "India",
    code: "IN",
    population: 1324171354,
    size: 3287263,
  },
  {
    name: "China",
    code: "CN",
    population: 1403500365,
    size: 9596961
  },
  {
    name: "Italy",
    code: "IT",
    population: 60483973,
    size: 301340
  },
  {
    name: "India",
    code: "IN2",
    population: 1324171354,
    size: 3287263
  },
  {
    name: "China",
    code: "CN2",
    population: 1403500365,
    size: 9596961
  },
  {
    name: "Italy",
    code: "IT2",
    population: 60483973,
    size: 301340
  },
  {
    name: "India",
    code: "IN3",
    population: 1324171354,
    size: 3287263
  },
  {
    name: "China",
    code: "CN3",
    population: 1403500365,
    size: 9596961
  },
  {
    name: "Italy",
    code: "IT3",
    population: 60483973,
    size: 301340
  },
  {
    name: "India",
    code: "IN4",
    population: 1324171354,
    size: 3287263
  },
  {
    name: "China",
    code: "CN4",
    population: 1403500365,
    size: 9596961
  },
  {
    name: "Italy",
    code: "IT4",
    population: 60483973,
    size: 301340
  }
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  searchContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 16,
  },
  searchInput: {
    marginBottom: 16,
    alignItems: "right"
  },
});

function TablePaginationComponet({columTable, dataBody, deleteHandler, editHandler}) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const [data , setData] = useState([])
  
 


  function getData(){
    var data = []
    dataBody.map((item) => {
      var dataItem = {}
      columTable.map((item2) => {
        //console.log(item2.id)
        if(item2.id === "imagen"){
          dataItem[item2.id] = <img src={"data:image/jpeg;base64,"+item[item2.id]} alt="imagen" width="100px" height="100px"/>
        }else{
        dataItem[item2.id] = item[item2.id]
      }
       // console.log(dataItem)
      })
      data.push(dataItem)
    })
    setData(data)
    console.log(data)
  }

  useEffect(() => {
    getData()
  }, [])

  


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0); // Reset page when searching
  };

  const filteredRows = data.filter((row) =>
    Object.values(row).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <Paper className={classes.root}>
      <div className={classes.searchContainer}>
        <TextField
          className={classes.searchInput}
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        </div>
        <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columTable.map((column) => (
                <TableCell
                  key={column.id}
                  align={"center"}
                  style={{ minWidth: 170 }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columTable.map((column) => (
                    <TableCell key={column.id} align={"center"}>
                      {column.id === "Acciones" ? (
                        <div style={{ display: "flex", justifyContent: "center" }}>
                          <button
                            type="button"
                            onClick={() => editHandler(row)}
                            style={{ marginRight: 5 }}
                          >
                            Editar
                          </button>
                          <button
                            type="button"
                            onClick={() => deleteHandler(row.id)}
                          >
                            Eliminar
                          </button>
                        </div>
                      ) : (
                        column.format
                          ? column.format(row[column.id])
                          : row[column.id]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={filteredRows.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default TablePaginationComponet;
