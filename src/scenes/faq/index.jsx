import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Accordion defaultExpanded>
        <AccordionSummary  expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}  variant="h5">
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta similique necessitatibus itaque ipsa. Iste tempore eveniet doloribus fugiat ex sit deleniti hic, quam, suscipit veniam dolorum magnam illo temporibus. Eligendi.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary  expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}  variant="h5">
            Another Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta similique necessitatibus itaque ipsa. Iste tempore eveniet doloribus fugiat ex sit deleniti hic, quam, suscipit veniam dolorum magnam illo temporibus. Eligendi.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary  expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}  variant="h5">
            Your favorite question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta similique necessitatibus itaque ipsa. Iste tempore eveniet doloribus fugiat ex sit deleniti hic, quam, suscipit veniam dolorum magnam illo temporibus. Eligendi.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary  expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}  variant="h5">
            Some Random question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta similique necessitatibus itaque ipsa. Iste tempore eveniet doloribus fugiat ex sit deleniti hic, quam, suscipit veniam dolorum magnam illo temporibus. Eligendi.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary  expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}  variant="h5">
            The Final question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta similique necessitatibus itaque ipsa. Iste tempore eveniet doloribus fugiat ex sit deleniti hic, quam, suscipit veniam dolorum magnam illo temporibus. Eligendi.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </Box>
  )
}

export default FAQ;