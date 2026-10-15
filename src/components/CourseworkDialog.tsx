import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import type { MouseEvent, RefObject } from "react";
import { CloseIcon } from "./Icons";
import "./CourseworkDialog.css";

interface Course {
  code: string;
  name: string;
  grade: number;
}

const rawCoursework: Course[] = [
  { code: "COMP 1002", name: "HTML, CSS, & JS Fundamentals", grade: 93 },
  { code: "COMP 1030", name: "Programming Fundamentals", grade: 99 },
  { code: "COMP 1035", name: "Networking Essentials", grade: 96 },
  { code: "COMP 1045", name: "Internet of Things: Arduino", grade: 95 },
  { code: "MATH 1003", name: "Math for the Computer Industry", grade: 81 },
  { code: "COMP 1006", name: "Intro to Web Programming using PHP", grade: 100 },
  { code: "COMP 1008", name: "Intro Object Oriented Programming: Java", grade: 95 },
  { code: "COMP 1054", name: "Interface Design Using CSS", grade: 94 },
  { code: "COMP 1112", name: "Document Automation Python", grade: 98 },
  { code: "COMP 2003", name: "Relational Database", grade: 86 },
  { code: "COMP 1011", name: "Advanced Object Oriented Programming: Java", grade: 94 },
  { code: "COMP 1073", name: "Client-Side JavaScript", grade: 95 },
  { code: "COMP 2084", name: "Server-Side Scripting: ASP.NET", grade: 100 },
  { code: "COMP 2139", name: "Cloud Computing Services", grade: 96 },
  { code: "COMP 2018", name: "Linux System Administration", grade: 93 },
  { code: "COMP 2068", name: "JavaScript Frameworks", grade: 98 },
  { code: "COMP 2125", name: "Mobile Development using Swift", grade: 91 },
  { code: "MGMT 2008", name: "Project Management for IT", grade: 95 },
  { code: "COMP 1046", name: "Windows System Administration", grade: 98 },
  { code: "COMP 2099", name: "Introduction to Data Analytics", grade: 95 },
  { code: "COMP 3000", name: "Systems Project 1", grade: 98 },
  { code: "COMP 3002", name: "Advanced Databases", grade: 89 },
  { code: "COMP 3033", name: "Web Frameworks and APIs", grade: 100 },
  { code: "COMP 3037", name: "Introduction to AI", grade: 91 },
  { code: "COMP 2140", name: "Systems Analysis Project Management", grade: 95 },
  { code: "COMP 3006", name: "Systems Project 2", grade: 100 },
  { code: "COMP 3023", name: "Game and Simulation Programming", grade: 96 },
  { code: "COMP 3025", name: "Mobile and Pervasive Computing", grade: 94 },
  { code: "COMP 3026", name: "Application Security Programming", grade: 91 },
  { code: "MGMT 2001", name: "Principles of Management", grade: 88 },
];

// Highest grade first, then by course code.
const coursework = [...rawCoursework].sort(
  (a, b) => b.grade - a.grade || a.code.localeCompare(b.code),
);

interface CourseworkDialogProps {
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
}

// Rendered only while open (inside AnimatePresence), so mounting is opening.
const CourseworkDialog = ({ onClose, triggerRef }: CourseworkDialogProps) => {
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const trigger = triggerRef.current;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    // Focus cycles between the close button and the scrollable course list.
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const first = closeRef.current;
      const last = listRef.current;
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
      trigger?.focus();
    };
  }, [onClose, triggerRef]);

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <motion.div
      className="cw-overlay"
      onClick={handleBackdropClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="cw-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cw-title"
        aria-describedby="cw-desc"
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.26, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <div className="cw-head">
          <div className="cw-head-text">
            <p className="kicker">Georgian College</p>
            <h2 id="cw-title" className="cw-title">
              Relevant coursework
            </h2>
            <p id="cw-desc" className="cw-desc">
              Computer Programming and Analysis · {coursework.length} courses · GPA 93.27
            </p>
          </div>
          <button
            type="button"
            className="icon-btn"
            ref={closeRef}
            onClick={onClose}
            aria-label="Close coursework dialog"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="cw-scroll" role="region" aria-label="Course list" tabIndex={0} ref={listRef}>
          <div role="table" aria-labelledby="cw-title" className="cw-table">
            <div role="rowgroup" className="cw-table-head">
              <div role="row" className="cw-row">
                <span role="columnheader" className="mono">
                  Code
                </span>
                <span role="columnheader" className="mono">
                  Course
                </span>
                <span role="columnheader" className="mono cw-grade">
                  Grade
                </span>
              </div>
            </div>
            <div role="rowgroup">
              {coursework.map((course) => (
                <div role="row" className="cw-row" key={course.code}>
                  <span role="cell" className="mono cw-code">
                    {course.code}
                  </span>
                  <span role="cell">{course.name}</span>
                  <span
                    role="cell"
                    className={`mono cw-grade${course.grade === 100 ? " is-top" : ""}`}
                  >
                    {course.grade}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CourseworkDialog;
