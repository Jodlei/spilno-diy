import { useLocation, useParams } from "react-router-dom";
import AllProgramInfo from "../../Components/AllProgramInfo/AllProgramInfo";
import ExerciceList from "../../Components/ExerciceList/ExerciceList";
import ProgramTopPanel from "../../Components/ProgramTopPanel/ProgramTopPanel";
import Container from "../../Components/ui/Container/Container.styled";
import { useProgram } from "../../hooks/useProgram.jsx";
import { useEffect } from "react";
import { detailProgram } from "../../redux/program/operations.js";
import { useDispatch } from "react-redux";
import AllActivity from "../../Components/AllActivity/AllActivity.jsx";

const ProgramDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { programDetails } = useProgram();

  useEffect(() => {
    dispatch(detailProgram(id));
  }, [dispatch, id]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  const { exercises = [] } = programDetails;

  return (
    <Container>
      <ProgramTopPanel BackTo={backLinkHref} />
        <AllActivity />

      <AllProgramInfo programInfo={programDetails} />

      <ExerciceList exercices={exercises} programId={id} />
    </Container>
  );
};

export default ProgramDetails;
