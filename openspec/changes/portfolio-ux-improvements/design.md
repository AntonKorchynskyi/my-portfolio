## Context

The portfolio is a React + TypeScript + Vite application with a component-based architecture. Current components include Header, Overview, Skills, WorkExp, Projects, Education, and Form. The site uses CSS modules (App.css, index.css) for styling. All components are functional React components with TypeScript.

Current state:
- Basic information architecture with anchor-based navigation
- Placeholder content (URLs, email addresses, project images)
- Static project cards linking to GitHub repos only
- Contact form with no backend integration
- No resume download functionality
- Overview section serves as hero but lacks CTAs and professional imagery

The change focuses on UX/content enhancements rather than architectural changes. Most modifications will be:
- Component content updates (text, links, images)
- New component sections (About Me, Footer)
- Enhanced existing components (Projects → case studies, Overview → hero with CTAs)
- External service integration (contact form backend)

## Goals / Non-Goals

**Goals:**
- Transform portfolio into compelling narrative that demonstrates problem-solving and impact
- Provide clear pathways for recruiters to contact and access resume
- Showcase projects as case studies with problem/process/outcome structure
- Fix all placeholder content and ensure production-ready state
- Integrate contact form with functional backend
- Add professional polish (headshot, project screenshots, footer)

**Non-Goals:**
- Major architectural refactoring (keeping React + TypeScript + Vite stack)
- Performance optimization (unless UX-breaking)
- CSS framework changes or major styling overhaul
- Adding new major dependencies beyond contact form service
- Backend server implementation (using third-party form service)

## Decisions

**1. Contact Form Backend Service**
- **Decision**: Use EmailJS or Formspree (free tier) for form submission
- **Rationale**: No backend server needed, simple integration, handles spam protection
- **Alternatives Considered**:
  - Netlify Forms: Requires Netlify hosting
  - Custom backend: Overkill for portfolio site
  - Email-only link: Less convenient for users

**2. Resume Storage**
- **Decision**: Store resume PDF in `public/` directory for direct download links
- **Rationale**: Simple, no external dependencies, works with static hosting
- **Alternatives Considered**:
  - Cloud storage (S3/Azure Blob): Unnecessary complexity
  - External link: Less control over file

**3. Project Case Study Structure**
- **Decision**: Enhance existing Projects component with expandable cards or modal for case study details
- **Rationale**: Maintains current grid layout while adding depth, progressive disclosure pattern
- **Alternatives Considered**:
  - Separate case study pages: More complex routing
  - Inline expansion: Could make page too long

**4. About Me Section Placement**
- **Decision**: Create new About component, place after Overview/Hero section
- **Rationale**: Logical flow (Hero → About → Skills → Projects), maintains separation of concerns
- **Alternatives Considered**:
  - Expand Overview: Would make Overview too long
  - Place at end: Less discoverable

**5. Footer Implementation**
- **Decision**: Create new Footer component, add to App.tsx after Form
- **Rationale**: Standard web pattern, provides persistent access to social links and resume
- **Alternatives Considered**:
  - Sticky footer: May not be necessary for single-page layout

**6. Skills Prioritization**
- **Decision**: Reorder skills array based on target roles, add visual indicators (optional badges/icons)
- **Rationale**: Helps recruiters quickly see relevant skills, visual indicators improve scannability
- **Alternatives Considered**:
  - Separate "Core Skills" section: Adds complexity
  - Proficiency bars: May be subjective

**7. Image Assets**
- **Decision**: Store images in `src/assets/` or `public/` directory
- **Rationale**: Standard React/Vite pattern, supports both import and direct URL access
- **Alternatives Considered**:
  - CDN: Unnecessary for portfolio site
  - Base64 encoding: Increases bundle size

## Risks / Trade-offs

**[Risk] Contact form service dependency** → Mitigation: Choose reliable service (EmailJS/Formspree), document fallback to direct email link

**[Risk] Missing image assets** → Mitigation: Use placeholder images initially, document required assets in tasks

**[Risk] Resume PDF not available** → Mitigation: Create placeholder or document as required asset, add to tasks

**[Risk] Placeholder URLs still present** → Mitigation: Add validation/todos to ensure all URLs updated, use environment variables for easy updates

**[Risk] Case studies may make page longer** → Mitigation: Use progressive disclosure (expandable cards or modals), ensure mobile responsiveness

**[Risk] External form service may have rate limits** → Mitigation: Use free tier initially, monitor usage, provide email fallback

## Migration Plan

**Phase 1: Content Updates**
1. Update all placeholder URLs and email addresses
2. Add resume PDF to public directory
3. Update component content (text, links)

**Phase 2: Component Enhancements**
1. Enhance Overview component (CTAs, headshot)
2. Transform Projects component (case studies)
3. Create About component
4. Create Footer component
5. Enhance Skills component (reordering, indicators)

**Phase 3: Integration**
1. Integrate contact form with backend service
2. Add success/error messaging
3. Test form submission

**Phase 4: Assets**
1. Add professional headshot
2. Add project screenshots
3. Verify all images load correctly

**Rollback Strategy**: Git revert if issues arise. All changes are additive/enhancement, no breaking changes expected.

## Open Questions

1. Which contact form service to use? (EmailJS vs Formspree - recommend EmailJS for simplicity)
2. Should project case studies use modals or expandable cards? (Recommend expandable cards for better UX)
3. What target roles should skills be prioritized for? (Need user input - default to Full-Stack Developer)
4. Should we add dark mode toggle? (Nice-to-have, can be deferred)
