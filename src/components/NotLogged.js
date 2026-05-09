import { Box, Modal, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "8px",
  p: 4,
};

export const NotLoggedIn = ({ open, handleClose }) => {
  const navigate = useNavigate();

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Stack sx={{ gap: "10px" }}>
          <Typography variant="h5" component="h5">
            User is not authenticated. Please sign in or sign up to access this
            feature.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button onClick={() => navigate("/sign-in")}>Sign In</Button>
            <Button onClick={() => navigate("/sign-up")}>Sign Up</Button>
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
};
