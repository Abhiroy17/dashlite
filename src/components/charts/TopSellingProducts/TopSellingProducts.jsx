import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: "16px",
  backgroundColor: theme.palette.primary.light,
  width: "100%",
  minWidth: "662px",
  height: "336px",
  display: "flex",
  flexGrow: "1",
  
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "24px",
  gap: "4px",
  fontFamily: "Inter, sans-serif",
  color: theme.palette.common.white,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    minWidth: "320px",
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: 'none',
  padding: '8px 12px',
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '18px',
  fontFeatureSettings: "'ss01' on, 'cv01' on, 'cv11' on",
  '&.MuiTableCell-head': {
    borderBottom: `1px solid ${theme.palette.text.mediumLight}`,
    color: theme.palette.text.medium,
    fontWeight: 400,
    padding: '8px 12px',
  },
}));

const StyledTableRow = styled(TableRow)({
  height: '40px',
  minHeight: '40px',
});

const products = [
  { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
  { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
  { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
  { name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
  { name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$1,965.81' },
];

function TopSellingProducts() {
    const theme = useTheme();
  return (
    <StyledTableContainer component={Paper}>
      <Typography
        variant="h6"
        sx={{
          mb: 1,
          color: theme.palette.text.main
        }}
      >
        Top Selling Products
      </Typography>
      <Table aria-label="top selling products table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell sx={{ width: '224px', minWidth: '224px' }}>Name</StyledTableCell>
            <StyledTableCell sx={{ width: '130px' }}>Price</StyledTableCell>
            <StyledTableCell sx={{ width: '130px' }}>Quantity</StyledTableCell>
            <StyledTableCell sx={{ width: '130px' }}>Amount</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>{product.name}</StyledTableCell>
              <StyledTableCell>{product.price}</StyledTableCell>
              <StyledTableCell>{product.quantity}</StyledTableCell>
              <StyledTableCell>{product.amount}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}

export default TopSellingProducts;