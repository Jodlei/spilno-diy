import ProgramsTitle from "../../Components/ProgramsTitle/ProgramsTitle";
import DaysOfWeeksProgress from "../../Components/DaysOfWeeksProgress/DaysOfWeeksProgress";
import AllActivity from "../../Components/AllActivity/AllActivity";
import ProgramsList from "../../Components/ProgramsList/ProgramsList";
import Container from "../../Components/ui/Container/Container.styled";
const Programs = () => {
  return (
    <Container>
      <ProgramsTitle />

      <DaysOfWeeksProgress />

      <AllActivity />

      <ProgramsList />
    </Container>
  );
};

export default Programs;
