import { Box } from "@mui/system";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
  <Box m="20px">
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title="DASHBOARD" subtitle="Welbome to your dashboard" />
    </Box>
  </Box>
  )};

export default Dashboard;