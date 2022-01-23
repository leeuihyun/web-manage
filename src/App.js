import React, { Component } from "react";
import Customer from "./components/Customer";
import "./App.css";
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { withStyles } from "@material-ui/styles";
import { Paper } from "@material-ui/core";


const styles = ({
  root : {
    width : '100%',
    overflowX : "auto"
  },
  table : {
    minWidth : 1080
  }
})

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "이의현",
    birthday: "970419",
    gender: "man",
    job: "student",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "임종태",
    birthday: "971121",
    gender: "man",
    job: "student",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "이재우",
    birthday: "970305",
    gender: "man",
    job: "student",
  },
];
class App extends Component {
  render() {
    const {classes} = this.props ? this.props:null;
    return (
      <Paper className = {classes.root}>
        <Table className = {classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {customers.map((c) => {
          return (
            <Customer
              key = {c.id} 
              id={c.id}
              name={c.name}
              gender={c.gender}
              birthday={c.birthday}
              image={c.image}
              job={c.job}
            ></Customer>
          );
        })}
          </TableBody>
        </Table>
        
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
