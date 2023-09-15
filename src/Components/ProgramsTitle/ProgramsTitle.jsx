import { Wrap, MainTitle } from "./ProgramsTitle.styled";
import CalendarDay from "../CalendarDay/CalendarDay";

const ProgramsTitle = () => {
  return (
    <Wrap>
      <MainTitle>Реабілітаційні програми</MainTitle>
      <CalendarDay />
    </Wrap>
  );
};

export default ProgramsTitle;
