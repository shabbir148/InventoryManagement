import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Stack,
  Card,
  CardContent,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Widgets = () => {
  const { totalProducts, totalValue, outOfStock, categories } = useSelector(
    (state) => state.products.stats
  );

  // Data for the widgets
  const widgetData = [
    { label: "Total Products", value: totalProducts },
    { label: "Total Store Value", value: `$${totalValue.toFixed(2)}` },
    { label: "Out of Stock", value: outOfStock },
    { label: "Categories", value: categories },
  ];

  // Theme and responsiveness
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Breakpoint for small screens

  return (
    <div>
      {/* Widget Stack */}
      <Stack
        spacing={2}
        sx={{
          marginBottom: 2,
          width: "100%",
          flexWrap: "wrap",
        }}
        direction={isSmallScreen ? "column" : "row"} // Use responsive layout
      >
        {widgetData.map((widget, index) => (
          <Card
            key={index}
            elevation={3}
            sx={{
              padding: 2,
              flex: !isSmallScreen ? "1 1 calc(25% - 16px)" : "1 1 100%",
              backgroundColor: "#101911",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              },
            }}
          >
            <CardContent>
              <Typography
                sx={{ color: "#7f7f7f" }}
                variant="h6"
                component="div"
                gutterBottom
              >
                {widget.label}
              </Typography>
              <Typography
                sx={{ color: "#7f7f7f" }}
                variant="h4"
                component="div"
              >
                {widget.value}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </div>
  );
};

export default Widgets;
