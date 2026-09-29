import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { ExperienceEducation } from './components/ExperienceEducation';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';
import { Toast } from './components/Toast';

export function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen bg-[#F5ECDA] text-[#442D1C] selection:bg-[#84592B] selection:text-[#E8D1A7]">
      {/* Fixed Translucent Navigation */}
      <Navbar onResumeClick={() => setResumeOpen(true)} />

      {/* Main Sections */}
      <main>
        <Hero onResumeClick={() => setResumeOpen(true)} />
        <About />
        <Expertise />
        <Projects />
        <Achievements />
        <ExperienceEducation />
        <Contact onNotify={showNotification} />
      </main>

      {/* Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        onNotify={showNotification}
      />

      {/* Global Toast Notification */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
}

export default App;
