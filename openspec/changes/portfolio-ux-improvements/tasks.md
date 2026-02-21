## 1. Content Updates (Foundation)

- [x] 1.1 Replace all placeholder GitHub URLs with real GitHub profile URL (TODO: Update config.ts)
- [x] 1.2 Replace all placeholder LinkedIn URLs with real LinkedIn profile URL (TODO: Update config.ts)
- [x] 1.3 Replace all placeholder email addresses (anton@example.com) with real email address (TODO: Update config.ts)
- [x] 1.4 Update Overview component profileLinks array with real URLs (using config.ts)
- [ ] 1.5 Verify no "TBD" or placeholder text remains in any component

## 2. Resume Download Functionality

- [ ] 2.1 Add resume PDF file to public/ directory (or document as required asset)
- [x] 2.2 Add "Download Resume" button to Header component
- [x] 2.3 Add "Download Resume" button to Overview component (hero section)
- [x] 2.4 Implement resume download handler that triggers PDF download
- [ ] 2.5 Test resume download from header and hero section

## 3. Hero Section Enhancements

- [x] 3.1 Update Overview component headline to be more specific and outcome-focused
- [x] 3.2 Add primary CTA button ("View My Resume" or "See My Work") to Overview component
- [x] 3.3 Add secondary CTA button ("Get In Touch" or "Contact Me") to Overview component
- [ ] 3.4 Replace photo placeholder with professional headshot image (add image asset)
- [x] 3.5 Add career goals one-liner statement to Overview component
- [x] 3.6 Style CTA buttons with high contrast for visibility
- [x] 3.7 Implement smooth scroll functionality for CTA buttons that link to sections

## 4. About Me Section

- [x] 4.1 Create new About.tsx component file
- [x] 4.2 Add personal narrative content (interests, passions, what drives you)
- [x] 4.3 Add career journey narrative (how you arrived at current expertise)
- [x] 4.4 Add role-seeking information (what roles/projects you're seeking)
- [x] 4.5 Add unique value proposition statement
- [x] 4.6 Add About component to App.tsx after Overview section
- [x] 4.7 Add "About" link to Header navigation
- [x] 4.8 Style About component to match site design

## 5. Projects Case Studies Transformation

- [x] 5.1 Update Projects component data structure to include: problem, process, outcome fields
- [x] 5.2 Add live demo URL field to project data structure
- [x] 5.3 Remove "Next Project" placeholder from projects array
- [x] 5.4 Write case study content for SoundHouseFun project (problem/process/outcome)
- [x] 5.5 Write case study content for Portfolio MVP project (problem/process/outcome)
- [ ] 5.6 Add project-specific screenshots/images (replace generic backgroundImage)
- [x] 5.7 Add "View Live Demo" button/link to each project card (if demo available)
- [x] 5.8 Add tech stack badges/icons to project cards
- [ ] 5.9 Add metrics/impact numbers to projects where available
- [x] 5.10 Update Projects component to display case study structure (expandable cards or modal)
- [x] 5.11 Style enhanced project cards with case study layout

## 6. Skills Section Enhancements

- [x] 6.1 Reorder skills array based on target roles (prioritize Frontend if targeting React roles)
- [x] 6.2 Add proficiency indicators (years of experience or Expert/Intermediate/Beginner) to Skills component
- [ ] 6.3 Add links from skills to relevant projects (if applicable)
- [x] 6.4 Ensure soft skills are included in Delivery card
- [x] 6.5 Style proficiency indicators appropriately

## 7. Contact Form Integration

- [x] 7.1 Choose contact form service (EmailJS, Formspree, or Netlify Forms) - configured in config.ts
- [ ] 7.2 Install/configure contact form service (add API keys to environment or config)
- [x] 7.3 Update Form component to integrate with chosen service
- [x] 7.4 Add form submission handler with service API call
- [x] 7.5 Add success message display after successful submission
- [x] 7.6 Add error message display for failed submissions
- [x] 7.7 Add loading state during form submission
- [x] 7.8 Add direct email link as alternative contact method ("Prefer email? Contact me at [email]")
- [ ] 7.9 Test form submission end-to-end (requires service setup)
- [ ] 7.10 Add optional Calendly link (if desired)

## 8. Footer Section

- [x] 8.1 Create new Footer.tsx component file
- [x] 8.2 Add social links (GitHub, LinkedIn) to Footer component
- [x] 8.3 Add resume download link to Footer component
- [x] 8.4 Add copyright notice with current year and name
- [x] 8.5 Add tech stack attribution ("Built with React & TypeScript")
- [x] 8.6 Add Footer component to App.tsx after Form component
- [x] 8.7 Style Footer component to match site design

## 9. Assets and Images

- [ ] 9.1 Obtain or create professional headshot image
- [ ] 9.2 Add headshot image to assets directory
- [ ] 9.3 Obtain or create project screenshots for SoundHouseFun
- [ ] 9.4 Obtain or create project screenshots for Portfolio MVP
- [ ] 9.5 Add project screenshots to assets directory
- [ ] 9.6 Verify all images load correctly and have proper alt text

## 10. Final Testing and Polish

- [ ] 10.1 Test all navigation links (header, footer, CTAs)
- [ ] 10.2 Test resume download from all locations (header, hero, footer)
- [ ] 10.3 Test contact form submission and error handling
- [ ] 10.4 Verify all external links open correctly
- [ ] 10.5 Test responsive design on mobile devices
- [ ] 10.6 Verify no placeholder content remains
- [ ] 10.7 Check accessibility (keyboard navigation, screen readers)
- [ ] 10.8 Review all content for typos and clarity
