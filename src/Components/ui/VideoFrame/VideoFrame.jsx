import { VideoContainer } from "./VideoFrame.styled";
import PropTypes from "prop-types";

const VideoFrame = ({ src }) => {
  return (
    <VideoContainer>
      <iframe
        width="100%"
        height="250px"
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </VideoContainer>
  );
};

VideoFrame.propTypes = {
  src: PropTypes.string.isRequired,
};

export default VideoFrame;
