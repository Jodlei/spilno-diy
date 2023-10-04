import { Wrap, MainTitle } from "./ProgramsTitle.styled";
import CalendarDay from "../CalendarDay/CalendarDay";
import LogoutButton from "../ui/LogoutButton/LogoutButton";

const ProgramsTitle = () => {
  return (
    <Wrap>
      <MainTitle>Spilno-Diy</MainTitle>

      <LogoutButton />

      <CalendarDay />
    </Wrap>
  );
};

export default ProgramsTitle;
