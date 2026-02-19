## ADDED Requirements

### Requirement: Contact form backend integration
The contact form SHALL be integrated with a backend service (EmailJS, Formspree, or Netlify Forms) that handles form submission and email delivery.

#### Scenario: User submits contact form
- **WHEN** a user fills out and submits the contact form
- **THEN** the form data is sent to the backend service and an email is delivered to the portfolio owner

### Requirement: Form submission success message
The contact form SHALL display a success message after successful form submission.

#### Scenario: Form submission succeeds
- **WHEN** a user successfully submits the contact form
- **THEN** a success message is displayed (e.g., "Thank you! Your message has been sent.")

### Requirement: Form submission error handling
The contact form SHALL display an error message if form submission fails.

#### Scenario: Form submission fails
- **WHEN** form submission fails (network error, service error, etc.)
- **THEN** an error message is displayed (e.g., "Sorry, there was an error. Please try again or contact me directly.")

### Requirement: Alternative contact methods
The contact section SHALL provide alternative ways to contact (direct email link) in addition to the form.

#### Scenario: User prefers direct email
- **WHEN** a user views the contact section
- **THEN** a direct email link is visible (e.g., "Prefer email? Contact me at [email]")

### Requirement: Optional scheduling link
The contact section SHALL support an optional link to schedule a call (e.g., Calendly) for recruiters if configured.

#### Scenario: Recruiter wants to schedule call
- **WHEN** a recruiter views the contact section and a scheduling link is configured
- **THEN** a "Schedule a call" link is displayed
