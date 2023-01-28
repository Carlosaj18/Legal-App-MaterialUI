import { Box, IconButton, useTheme, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const handleInputSearchBar = (e) => {
    console.log(e.target.value);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      sx={{ width: "100%" }}
    >
      {/** Box Container left */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
        sx={{ width: "80%" }}
      >
        {/* SEARCH BAR */}
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
          m="10px"
          sx={{ width: "80%" }}
        >
          <InputBase
            sx={{ ml: 2, flex: 1 }}
            placeholder="Search"
            onChange={handleInputSearchBar}
          />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
            margin: "10px",
            width: 200,
          }}
        >
          <FilterAltOutlinedIcon sx={{ mr: "10px" }} />
          Filters
        </Button>
        <IconButton sx={{ width: 50, height: "50px" }}>
          <NotificationsOutlinedIcon
            sx={{
              fontSize: "1.5em",
              borderRight: `1px solid ${colors.blueAccent[500]}`,
              pr: "5px",
            }}
          />
        </IconButton>
      </Box>

      {/* USER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: "20%" }}
      >
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <Box textAlign="center">
          <Typography
            variant="h3"
            color={colors.grey[100]}
            fontWeight="bold"
            sx={{ m: "10px 0 0 0" }}
          >
            Welcome
          </Typography>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Carlos Jaramillo
          </Typography>
        </Box>
        <Box display="flex" sx={{ position: "relative" }}>
          <img
            alt="profile-user"
            width="100px"
            height="100px"
            src={`../../assets/user.png`}
            style={{ cursor: "pointer", borderRadius: "50%" }}
          />
          <Box
            display="flex"
            justifyContent="start"
            alignItems="start"
            sx={{ position: "absolute", top: "1px", right: "1px" }}
          >
            <IconButton>
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
