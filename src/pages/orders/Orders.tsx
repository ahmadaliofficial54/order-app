import React, { useEffect, useState } from "react";
import "./Orders.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { orderType } from "../../FrontendTaskMockOrdersData";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { searchOrders } from "../../store/ordersSlice";

function Orders() {
  const dispatch = useDispatch();
  const orders = useSelector((state: any) => state?.orderStore?.orders);
  const [rows, setRows] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setRows(orders);
  }, [orders]);

  useEffect(() => {
    dispatch(searchOrders(search?.toLowerCase()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className="container">
      <div>
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by Order Id, Customer, Buyer..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Order #</TableCell>
              <TableCell align="left">Order status</TableCell>
              <TableCell align="left">Customer</TableCell>
              <TableCell align="left">
                Purchase date{" "}
                <ArrowDownwardIcon
                  color="disabled"
                  sx={{ fontSize: "16px", verticalAlign: "sub" }}
                />
              </TableCell>
              <TableCell align="left">
                Fulfilled date{" "}
                <ArrowUpwardIcon
                  color="disabled"
                  sx={{ fontSize: "16px", verticalAlign: "sub" }}
                />
              </TableCell>
              <TableCell>Invoice status</TableCell>
              <TableCell>
                Amount{" "}
                <ArrowUpwardIcon
                  color="disabled"
                  sx={{ fontSize: "16px", verticalAlign: "sub" }}
                />
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row: orderType) => (
              <TableRow key={row.orderID}>
                <TableCell component="th" scope="row">
                  {row.orderID}
                </TableCell>
                <TableCell component="th" scope="row">
                  <FiberManualRecordIcon
                    sx={{
                      color: "red",
                      fontSize: "14px",
                      marginRight: "4px",
                      verticalAlign: "text-top",
                    }}
                  />
                  {row.orderStatus}
                </TableCell>
                <TableCell align="left">
                  <h3 className="headTag">{row.companyName}</h3>
                  {row.customerName}
                </TableCell>
                <TableCell align="left">
                  {row.purDate ? (
                    <>
                      <CalendarTodayIcon
                        sx={{
                          color: "#9f8af1",
                          fontSize: "14px",
                          marginRight: "4px",
                          verticalAlign: "text-top",
                        }}
                      />
                      {row.purDate}
                    </>
                  ) : (
                    "-"
                  )}
                </TableCell>
                <TableCell align="left">
                  {row.fulfillDate ? (
                    <>
                      <CalendarTodayIcon
                        sx={{
                          color: "#87D8B4",
                          fontSize: "14px",
                          marginRight: "4px",
                          verticalAlign: "text-top",
                        }}
                      />
                      {row.fulfillDate}{" "}
                    </>
                  ) : (
                    "-"
                  )}
                </TableCell>
                <TableCell align="left">{row.invoiceStatus}</TableCell>
                <TableCell align="left">
                  <h4 className="headTag">
                    {row.currency} {row.amount}
                  </h4>
                </TableCell>
                <TableCell align="left">
                  <MoreHorizIcon color="disabled" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Orders;
