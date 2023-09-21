import React, { useState, useEffect } from "react";
import Program from "../Program/Program";
import { Link } from "react-router-dom";
import { Wrap, List, ListItem } from "./ProgramsList.styled";
import {getFitnessProgram} from "../../store/actions/fitness_programs.js";
import { connect } from "react-redux";

const ProgramsList = ({dataFitnessProgram, isLoadingFitnessProgram, getFitnessProgram }) => {
  React.useEffect(()=> {

    if(!dataFitnessProgram.length) {
      getFitnessProgram()
    }

  }, [])
  return (
    <Wrap>
      <List>
        {dataFitnessProgram.map((item, index)=>
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

function mapStateToProps({fitnessProgram}) {
  return {
    dataFitnessProgram: fitnessProgram.list,
    isLoadingFitnessProgram: fitnessProgram.isLoading,
  };
}

const mapDispatchToProps = {
  getFitnessProgram: getFitnessProgram,

};

export default connect(mapStateToProps, mapDispatchToProps)(ProgramsList);
