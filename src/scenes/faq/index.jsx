import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box m='20px'>
			<Header title='FAQ' subtitle='Frequently Asked Questions Page'></Header>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						An Important Question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde,
						doloribus.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						An Important Question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
						ducimus quia possimus consequuntur vel ipsa?
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						An Important Question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde,
						doloribus.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						Another One Important Question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde,
						doloribus.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						And Another Important Question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cumque
						quia maxime?
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
};

export default FAQ;
