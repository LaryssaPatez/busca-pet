import { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { FiMinus } from "react-icons/fi";
import { FAQs } from "../../utils/constants";
import { FAQAnswer, FAQContainer, FAQHeader, FAQItem, FAQTitle, ImageContainer, SectionWrapper } from "./Faq.style";

const FAQComponent = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <SectionWrapper>
            <FAQContainer>
                <FAQTitle>FAQ <span>(Perguntas frequentes)</span></FAQTitle>
                {FAQs.map((faq, index) => (
                    <FAQItem key={index}>
                        <FAQHeader onClick={() => toggleFAQ(index)}>
                            <h3>{faq.question}</h3>
                            <div>{openFAQ === index ? <FiMinus /> : <LuPlus />}</div>
                        </FAQHeader>
                        {openFAQ === index && (<FAQAnswer>{faq.answer}</FAQAnswer>)}
                    </FAQItem>
                ))}
            </FAQContainer>

            <ImageContainer>
                <img src="faq_cat.png" alt="Curious cat" />
            </ImageContainer>
        </SectionWrapper>
    );
};

export default FAQComponent;