import React, { useState, useEffect, useCallback } from "react";
import SalesData from "../data/stackline_frontend_assessment_data_2021.json";
import { StyledTable, StyledTh } from "./styled";

function SalesTable({ itemId }) {
  const [salesData, setSalesData] = useState([]);

  const fetchSalesData = useCallback(() => {
    try {
      const item = SalesData.find((item) => item.id === itemId);
      if (item) {
        setSalesData(item.sales || []);
      } else {
        console.error(`Item with ID ${itemId} not found in the data.`);
      }
    } catch (error) {
      console.error("Error fetching sales data:", error);
    }
  }, [itemId]);

  useEffect(() => {
    fetchSalesData();
  }, [itemId, fetchSalesData]);

  return (
    <div>
      <StyledTable>
        <thead>
          <tr>
            <StyledTh>Week Ending</StyledTh>
            <StyledTh>Retail Sales</StyledTh>
            <StyledTh>Wholesale Sales</StyledTh>
            <StyledTh>Units Sold</StyledTh>
            <StyledTh>Retailer Margin</StyledTh>
          </tr>
        </thead>
        <tbody>
          {salesData.slice(0, 5).map((sale) => (
            <tr key={sale.weekEnding}>
              <td>{sale.weekEnding}</td>
              <td>{sale.retailSales}</td>
              <td>{sale.wholesaleSales}</td>
              <td>{sale.unitsSold}</td>
              <td>{sale.retailerMargin}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
}

export default SalesTable;
