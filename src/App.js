import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import Home from './sections/Home';
import History from './sections/History';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Accomplishments from './sections/Accomplishments';
import Hobbies from './sections/Hobbies';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  margin-top: 60px;
`;

const Section = styled.section`
  padding: 20px 20px 80px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function App() {
  return (
    <ThemeProvider>
      <AppContainer>
        <Navbar />
        <MainContent>
          <Section id="home">
            <Home />
          </Section>
          <Section id="history">
            <History />
          </Section>
          <Section id="skills">
            <Skills />
          </Section>
          <Section id="projects">
            <Projects />
          </Section>
          <Section id="accomplishments">
            <Accomplishments />
          </Section>
          <Section id="hobbies">
            <Hobbies />
          </Section>
        </MainContent>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
