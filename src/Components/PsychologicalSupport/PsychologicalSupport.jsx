import {
    Wrap,
    Description,
    StyledLink,
    WrapLink
} from "./PsychologicalSupport.styled";

const PsychologicalSupport = () => {
    return (
        <Wrap>
            <Description>
                <StyledLink href="https://www.howareu.com/" target='_blank'>«Ти як?»</StyledLink> - всеукраїнська
                програма ментального здоров’я, ініційована Оленою Зеленською.
                📌 Мета кампанії – сприяти формуванню в суспільстві культури піклування про ментальне здоров'я,
                дати розуміння та показати інструменти, які допоможуть українцям дбати про свій внутрішній стан.
            </Description>
            <Description>
                У межах кампанії створено спеціальну сторінку програми <StyledLink href="https://www.howareu.com/"
                                                                                   target='_blank'>«Ти як?»</StyledLink>,
                де запропоновані контакти, посилання, поради, продукти, техніки та методики, які допоможуть піклуватися
                про ментальне здоров'я – своє та людей поруч.
                Дізнатися більше інформації про ментальне здоров’я можна також на сторінках у соціальних мережах:
                <WrapLink>
                    <StyledLink href="https://www.facebook.com/howareu.program" target='_blank'>Facebook</StyledLink>
                    <StyledLink href="https://www.instagram.com/howareu_program" target='_blank'>Instagram</StyledLink>
                    <StyledLink href="https://www.youtube.com/@howareu_program" target='_blank'>YouTube</StyledLink>
                    <StyledLink href="https://twitter.com/howareuprogram" target='_blank'>Twitter</StyledLink>
                    <StyledLink href="https://t.me/howareu_program" target='_blank'>Telegram</StyledLink>
                    <StyledLink href="https://www.tiktok.com/@howareu_program" target='_blank'>TikTok</StyledLink>
                    <StyledLink
                        href="https://invite.viber.com/?g2=AQAyHzQp6XJwmVCkkkXeWJVdLF8eAQa8Pzq3NYgcLWJGls3sN3tGibu5P%2BEH0rsb"
                        target='_blank'>Viber</StyledLink>
                </WrapLink>
            </Description>
            <Description>
                🫂 Якщо необхідна консультація психолога ⬇️⬇️⬇️⬇️ </Description>
            <Description> ☘️Реєструйтеся на безкоштовну психологічну допомогу, що проходить на базі КП "Обласний центр
                громадського здоров’я" ДОР" перейшовши за посиланням 👉 <StyledLink href="http://surl.li/jnsmv"
                                                                                   target='_blank'>http://surl.li/jnsmv</StyledLink>
            </Description>
        </Wrap>
    );
};


export default PsychologicalSupport;
