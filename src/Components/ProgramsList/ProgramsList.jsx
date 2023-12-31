import Program from "../Program/Program";
import { Link } from "react-router-dom";
import { Wrap, List, ListItem, Title } from "./ProgramsList.styled";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { programs } from "../../redux/program/operations.js";
import { useProgram } from "../../hooks/useProgram.jsx";

const ProgramsList = () => {
  const dispatch = useDispatch();
  const { listProgram } = useProgram();

  useEffect(() => {
    if (listProgram.length === 0) {
      dispatch(programs());
    }
  }, [dispatch, listProgram.length]);
  return (
    <Wrap>
      <Title>Реабілітаційні програми</Title>
      <List>
        {listProgram.map((item) => (
          <ListItem key={item.id}>
            <Link to={`/programs/${item.id}`}>
              <Program
                title={item.title}
                difficulty={item.difficulty}
                intensity={item.intensity}
                coordinating={item.coordinating}
                description={item.description}
                img={item.img}
              ></Program>
            </Link>
          </ListItem>
        ))}
      </List>
    </Wrap>
  );
};

export default ProgramsList;
