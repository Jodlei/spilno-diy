import styled from "styled-components";

const VideoContainer = styled.div`
  width: 100%;
  max-width: 800px; 
  margin: 0 auto; 
`;

const Video = styled.video`
  width: 100%;
  height: auto; 
`;

const VideoYouTubeComponent = ({src}) => {
    return (
        <VideoContainer>
            <iframe
                width="100%"
                height="auto"
                src={src}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
        </VideoContainer>
    );
};
export default VideoYouTubeComponent;
