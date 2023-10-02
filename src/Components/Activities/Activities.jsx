import { useLocation } from "react-router-dom";
import {
  Wrap,
  Name,
  Title,
  ButtonContinue,
  ButtonCompetition,
  ProgresBarWrappper,
} from "./Activities.styled";
import Container from "../../Components/ui/Container/Container.styled";
import BackButton from "../../Components/ui/BackButton/BackButton";
import CircleProgressBar from "../ui/CircleProgressBar/CircleProgressBar";
import ExerciceProgressList from "./ExerciceProgressList/ExerciceProgressList";

const Activities = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  return (
    <Container>
      <Wrap>
        <BackButton to={backLinkHref} />
        <Name> Ім’я</Name>

        <Title>Активність</Title>

        <ProgresBarWrappper>
          <CircleProgressBar
            progressAmount={82}
            normilizedProgressAmount={82}
            strokeWidth={15}
            textSize={"15px"}
            pathColor={`rgba(86, 217, 138, 1)`}
            textColor={`#101828`}
            trailColor={`rgba(214, 241, 225, 1)`}
            backgroundColor={`rgba(86, 217, 193, 1)`}
          />
        </ProgresBarWrappper>

        <ExerciceProgressList />

        <ButtonContinue>ПРОДОВЖИТИ</ButtonContinue>

        <ButtonCompetition>ЗМАГАННЯ</ButtonCompetition>
      </Wrap>
    </Container>
  );
};

export default Activities;
