import { useEffect, useMemo, useRef, useState } from "react";

type CourseworkSort = "grade" | "code";

interface Coursework {
  code: string;
  name: string;
  grade: number | null;
}

const rawCoursework: Coursework[] = [
  { code: "COMP 1002", name: "HTML, CSS, & JS Fundamentals", grade: 93 },
  { code: "COMP 1030", name: "Programming Fundamentals", grade: 99 },
  { code: "COMP 1035", name: "Networking Essentials", grade: 96 },
  { code: "COMP 1045", name: "Internet of Things - Arduino", grade: 95 },
  { code: "MATH 1003", name: "Math for the Computer Industry", grade: 81 },
  { code: "COMP 1006", name: "Intro to Web Programming using PHP", grade: 100 },
  {
    code: "COMP 1008",
    name: "Intro Object Oriented Programming - Java",
    grade: 95,
  },
  { code: "COMP 1054", name: "Interface Design Using CSS", grade: 94 },
  { code: "COMP 1112", name: "Document Automation Python", grade: 98 },
  { code: "COMP 2003", name: "Relational Database", grade: 86 },
  {
    code: "COMP 1011",
    name: "Advanced Object Oriented Programming - Java",
    grade: 94,
  },
  { code: "COMP 1073", name: "Client-Side JavaScript", grade: 95 },
  { code: "COMP 2084", name: "Server-Side Scripting - ASP.NET", grade: 100 },
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

interface EducationCourseworkModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

const EducationCourseworkModal = ({
  isOpen,
  onClose,
  triggerRef,
}: EducationCourseworkModalProps) => {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<CourseworkSort>("grade");

  const filteredCourses = useMemo(() => {
    const query = search.trim().toLowerCase();
    let courses = rawCoursework;
    if (query) {
      courses = courses.filter(
        (c) =>
          c.code.toLowerCase().includes(query) ||
          c.name.toLowerCase().includes(query),
      );
    }
    const sorted = [...courses].sort((a, b) => {
      if (sortBy === "grade") {
        const gradeA = typeof a.grade === "number" ? a.grade : -1;
        const gradeB = typeof b.grade === "number" ? b.grade : -1;
        if (gradeA !== gradeB) {
          return gradeB - gradeA;
        }
      }
      return a.code.localeCompare(b.code);
    });
    return sorted;
  }, [search, sortBy]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const dialog = dialogRef.current;
    if (!dialog) return;

    const focusableSelectors =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusable = Array.from(
      dialog.querySelectorAll<HTMLElement>(focusableSelectors),
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      } else if (event.key === "Tab") {
        if (focusable.length === 0) return;
        if (event.shiftKey) {
          if (document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          }
        } else if (document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (triggerRef.current) {
        triggerRef.current.focus();
      }
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="edu-modal-overlay"
      onClick={handleOverlayClick}
      role="presentation"
    >
      <div
        className="edu-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="edu-modal-title"
        ref={dialogRef}
      >
        <header className="edu-modal-header">
          <h2 id="edu-modal-title">Relevant Coursework</h2>
          <button
            type="button"
            className="edu-button edu-modal-close"
            onClick={onClose}
            aria-label="Close coursework dialog"
          >
            ×
          </button>
        </header>
        <div className="edu-modal-body">
          <div className="edu-modal-controls">
            <label className="edu-field">
              <span className="edu-field-label">Search courses</span>
              <input
                type="text"
                className="edu-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Filter by code or course name"
              />
            </label>
            <div className="edu-sort">
              <span className="edu-field-label">Sort by</span>
              <div className="edu-sort-buttons">
                <button
                  type="button"
                  className={`edu-button edu-button--subtle ${
                    sortBy === "grade" ? "edu-button--active" : ""
                  }`}
                  onClick={() => setSortBy("grade")}
                >
                  Grade
                </button>
                <button
                  type="button"
                  className={`edu-button edu-button--subtle ${
                    sortBy === "code" ? "edu-button--active" : ""
                  }`}
                  onClick={() => setSortBy("code")}
                >
                  Code
                </button>
              </div>
            </div>
          </div>

          <div className="edu-table-wrapper">
            <table className="edu-table">
              <thead>
                <tr>
                  <th scope="col">Code</th>
                  <th scope="col">Course</th>
                  <th scope="col">Grade</th>
                </tr>
              </thead>
              <tbody>
                {filteredCourses.map((course) => (
                  <tr key={course.code + course.name}>
                    <td>{course.code}</td>
                    <td>{course.name}</td>
                    <td>
                      {typeof course.grade === "number"
                        ? `${course.grade}%`
                        : "In progress"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const courseworkButtonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className="section" id="education">
      <p className="section-kicker">Education</p>
      <h2>Academic Background</h2>
      <article className="card edu-card">
        <div className="edu-card-layout">
          <div className="edu-card-left">
            <h3 className="edu-school">Georgian College</h3>
            <p className="edu-program">
              Computer Programming and Analysis · Advanced Diploma · Barrie,
              Ontario · Co-op
            </p>
            <p className="edu-meta"></p>
          </div>
          <div className="edu-card-right">
            <span className="edu-gpa-pill">GPA 93.27</span>
            <span className="edu-dates">2022 – 2025</span>
          </div>
        </div>
        <div className="edu-card-footer">
          <button
            type="button"
            className="edu-button"
            onClick={() => setIsModalOpen(true)}
            ref={courseworkButtonRef}
          >
            <span>View coursework</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </svg>
          </button>
        </div>
      </article>

      <EducationCourseworkModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        triggerRef={courseworkButtonRef}
      />
    </section>
  );
};

export default Education;
