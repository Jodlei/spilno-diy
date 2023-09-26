import PsychologicalSupport from "../../Components/PsychologicalSupport/PsychologicalSupport";
import Container from "../../Components/ui/Container/Container.styled";
import ProgramTopPanel from "../../Components/ProgramTopPanel/ProgramTopPanel.jsx";

const PsychologicalSupportPage = () => {
    const backLinkHref = location.state?.from ?? "/";
    return (
        <Container>
            <ProgramTopPanel BackTo={backLinkHref} />
            <PsychologicalSupport />

        </Container>
    );

};

export default PsychologicalSupportPage;
