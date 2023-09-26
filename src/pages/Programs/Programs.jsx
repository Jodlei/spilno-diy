import ProgramsTitle from "../../Components/ProgramsTitle/ProgramsTitle";
import DaysOfWeeksProgress from "../../Components/DaysOfWeeksProgress/DaysOfWeeksProgress";
import AllActivity from "../../Components/AllActivity/AllActivity";
import ProgramsList from "../../Components/ProgramsList/ProgramsList";
import Container from "../../Components/ui/Container/Container.styled";
import {Link} from "../../Components/ui/Link/Link.styled";
const Programs = () => {
  return (
    <Container>
      <ProgramsTitle />

      <DaysOfWeeksProgress />

      <AllActivity />

      <ProgramsList />

        <Link to={"/psychological-support"}>Психологічна допомога</Link>
    </Container>
  );
};

export default Programs;
