import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import FAQ from './Faq';
import HowItWorks from './HowItWorks';
import HighlightedHistory from './Highlighted/HighlightedHistory';
import HighlightedLostFound from './Highlighted/HighlightedLostFound';

const PageWrapper = styled.div`
    max-width: 95rem;
    margin: 0 auto;
    padding-top: 1rem;
`;

export default function LandingPage() {
    return (
        <PageWrapper>
            <Header/>
            <main>
                <Hero/>
                <HowItWorks/>
                <HighlightedHistory/>
                <HighlightedLostFound/>
                <FAQ/>
                <Footer/>
            </main>
        </PageWrapper>
    );
}