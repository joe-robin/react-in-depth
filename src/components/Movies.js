import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { Fragment } from "react";

function Movies({ movies = [] }) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Release Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies.map((item, i) => (
            <Fragment key={i}>
              <TableRow>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.overview}</TableCell>
                <TableCell width={"150px"}>{item.release_date}</TableCell>
              </TableRow>
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Movies;
