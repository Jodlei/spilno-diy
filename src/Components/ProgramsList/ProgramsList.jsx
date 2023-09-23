import Program from "../Program/Program";
import { Link } from "react-router-dom";
import { Wrap, List, ListItem } from "./ProgramsList.styled";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import { programs } from "../../redux/program/operations.js";
import {useProgram} from "../../hooks/useProgram.jsx";

const ProgramsList = () => {
  const dispatch = useDispatch();
  const { isLoading, listProgram } = useProgram();
  useEffect(() => {
    if(listProgram.length === 0) {
      dispatch(programs());
    }
  }, [dispatch]);
  return (
      <Wrap>
        <List>
          {listProgram.map((item, index)=>
              (
                  <ListItem key={item.id}>
                    <Link to={`/programs/${item.id}`}>

                      <Program
                          title={item.title}
                          difficulty={item.complexity}
                          intensity={item.intensity}
                          coordinating={item.coordination}
                          description={item.description}
                          img={item.poster}
                      ></Program>
                    </Link>
                  </ListItem>
              )
          )}
        </List>
      </Wrap>
  );
};

export default ProgramsList;
