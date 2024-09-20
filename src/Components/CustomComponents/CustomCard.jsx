import { Box, Card, CardHeader } from "@mui/material";
import React from "react";

const CustomCard = ({ title, width, children }) => {
  return (
      <Card className={width}>
        <CardHeader
          className="bg-gray-300 font-semibold !p-2.5 "
          titleTypographyProps={{
            style: {
              fontSize: "18px",
              color: "#333",
              fontWeight: "600",
              fontFamily: "Josefin Sans",
            },
          }}
          title={title}
        ></CardHeader>

        {children}
      </Card>
  );
};

export default CustomCard;
