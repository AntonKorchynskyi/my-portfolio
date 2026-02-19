## ADDED Requirements

### Requirement: Resume download in header
The header navigation SHALL include a prominent "Download Resume" or "Resume" button that downloads the resume PDF when clicked.

#### Scenario: User clicks resume button in header
- **WHEN** a user clicks the resume download button in the header
- **THEN** the resume PDF file is downloaded to their device

### Requirement: Resume download in hero section
The hero section SHALL include a resume download button or link that is easily accessible.

#### Scenario: User clicks resume button in hero
- **WHEN** a user clicks the resume download button in the hero section
- **THEN** the resume PDF file is downloaded to their device

### Requirement: Resume download in footer
The footer SHALL include a resume download link for persistent access throughout the site.

#### Scenario: User clicks resume link in footer
- **WHEN** a user clicks the resume download link in the footer
- **THEN** the resume PDF file is downloaded to their device

### Requirement: Resume PDF availability
The resume PDF file SHALL be stored in a location accessible via direct URL (e.g., public/ directory) for download functionality.

#### Scenario: Resume download is triggered
- **WHEN** any resume download action is triggered
- **THEN** the resume PDF file is accessible and downloads successfully
