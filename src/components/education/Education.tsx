import { AnimatePresence } from "motion/react";
import { useCallback, useRef, useState } from "react";
import CourseworkDialog from "./CourseworkDialog";
import { WindowIcon } from "../ui/Icons";
import "./Education.css";

const Education = () => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <section id="education" className="sec edu" aria-labelledby="education-title">
      <div className="split edu-split">
        <div>
          <p className="kicker edu-kicker">05 · Education</p>
          <h2 id="education-title" className="h2-small">
            Education
          </h2>
        </div>
        <div className="edu-row">
          <div className="edu-school">
            <p className="edu-school-name">Georgian College</p>
            <p className="edu-program">
              Computer Programming and Analysis · Advanced Diploma, Co-op · Barrie, Ontario
            </p>
          </div>
          <span className="edu-dates mono">2022 to 2025</span>
          <span className="edu-gpa">GPA 93.27</span>
          <button
            type="button"
            className="link-btn"
            ref={triggerRef}
            onClick={() => setIsOpen(true)}
            aria-haspopup="dialog"
            data-track="coursework"
          >
            <WindowIcon />
            View coursework
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && <CourseworkDialog onClose={close} triggerRef={triggerRef} />}
      </AnimatePresence>
    </section>
  );
};

export default Education;
