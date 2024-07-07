import { Box, Skeleton } from "@mui/material";
import React from "react";

const BooksSkeleton: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          padding: "0 50px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "36px",
        }}
      >
        {new Array(6).fill("").map((_, inx) => (
          <Skeleton
            key={inx}
            sx={{ bgcolor: "grey.900", borderRadius: "12px" }}
            variant="rectangular"
            width="100%"
            height={213}
          />
        ))}
      </Box>
    </>
  );
};

export default BooksSkeleton;
