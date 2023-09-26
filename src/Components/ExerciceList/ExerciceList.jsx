import PropTypes from "prop-types";
import ExerciceItem from "./ExersciceItem/ExersciceItem";
import Modal from "../ui/Modal/Modal";
import { List } from "./ExerciceList.styled";
import { useState } from "react";
import NoticeOfCompletion from "../NoticeOfCompletion/NoticeOfCompletion";

const ExerciceList = ({ exercices, programId }) => {
  const [congratulationsModal, setCongratulationsModal] = useState(false);
  const [noticeId, setNoticeId] = useState(null);

  const toggleCongratulationsModal = (id) => {
    setCongratulationsModal(!congratulationsModal);
    setNoticeId(id);
  };

  return (
    <>
      <List>
        {exercices.map(({ id, title, video, description, repetitionCount }) => (
          <ExerciceItem
            key={id}
            id={id}
            title={title}
            video={video}
            description={description}
            repetitionCount={repetitionCount}
            programId={programId}
            exerciceId={id}
            toggleModal={toggleCongratulationsModal}
          />
        ))}
      </List>

      {congratulationsModal && (
        <Modal toggleModal={toggleCongratulationsModal}>
          <NoticeOfCompletion id={noticeId} />
        </Modal>
      )}
    </>
  );
};

ExerciceList.propTypes = {
  exercices: PropTypes.array.isRequired,
  programId: PropTypes.string.isRequired,
};

export default ExerciceList;
