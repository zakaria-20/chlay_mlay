frontend:
# Migration Guide: Vite to Next.js

This document outlines the complete migration process from our existing Vite React project to Next.js with proper file organization and routing structure.

## 📋 Migration Overview

We are migrating from Vite to Next.js to leverage server-side rendering, better SEO, and improved performance. This migration involves restructuring components, implementing proper layouts, and organizing page-specific sections.

## 🗂️ New Project Structure

```
src/
├── components/
│   ├── layout/           # Layout components (Header, Footer, etc.)
│   ├── ui/              # Reusable UI components
│   └── [page-name]/     # Page-specific components
├── pages/
│   ├── _app.tsx         # Main layout wrapper
│   ├── _document.tsx    # HTML document structure
│   ├── index.tsx        # Home page
│   └── [routes]/        # All page routes with sub-routes
├── features/
│   └── [page-name]/     # Page sections and features
├── styles/
│   └── globals.css
└── public/
    └── [assets]
```

## 🚀 Migration Steps

### Step 1: Component Reorganization

#### 1.1 Move Layout Components
- **Source**: `src/components/global/Header` and `src/components/global/Footer`
- **Destination**: `src/components/layout/`
- **Action**: Move Header and Footer components to the layout folder

```bash
# Example structure after move:
src/components/layout/
├── Header.tsx
├── Footer.tsx
└── Navbar.tsx
```

#### 1.2 Relocate General Components
- **Source**: All components in `src/components/` (except `company/` folder, Header, and Footer)
- **Destination**: `src/components/layout/`
- **Action**: Move all remaining global components to layout folder

#### 1.3 Handle Company Components
- **Source**: `src/components/company/`
- **Destination**: Create `src/components/company/` in the new structure
- **Action**: Keep company-specific components in their dedicated folder

### Step 2: Main Layout Implementation

#### 2.1 Create _app.tsx
- **Location**: `src/pages/_app.tsx`
- **Purpose**: Implement the main layout wrapper for all pages
- **Content**: Move the MainLayout logic from Vite project

```typescript
// Example _app.tsx structure:
import type { AppProps } from 'next/app'
import MainLayout from '@/components/layout/MainLayout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
```

#### 2.2 Create MainLayout Component
- **Location**: `src/components/layout/MainLayout.tsx`
- **Purpose**: Wrap all pages with consistent header, footer, and navigation
- **Content**: Port the existing layout logic from Vite

### Step 3: Features and Page Sections

#### 3.1 Create Features Structure
- **Purpose**: Organize page-specific sections and features
- **Structure**: Each page gets its own folder in features

```bash
src/features/
├── home/           # Home page sections
│   ├── HeroSection.tsx
│   ├── FeaturesSection.tsx
│   └── TestimonialsSection.tsx
├── about/          # About page sections
│   ├── TeamSection.tsx
│   └── MissionSection.tsx
├── products/       # Products page sections
│   ├── ProductGrid.tsx
│   └── FilterSection.tsx
└── contact/        # Contact page sections
    ├── ContactForm.tsx
    └── MapSection.tsx
```

#### 3.2 Migration Process for Features
1. **Identify**: Find all page-specific sections in the Vite project
2. **Create Folders**: Make a folder for each page in `src/features/`
3. **Move Sections**: Transfer page sections to their respective feature folders
4. **Update Imports**: Update import statements in the new structure

#### 3.3 Handle Page Components
- **Condition**: If any component folders exist within page directories
- **Action**: Create a folder inside `src/components/` with the same name as the page
- **Example**: If `src/pages/products/` contains components, create `src/components/products/`

### Step 4: Sub-Routes Implementation

#### 4.1 Nested Page Structure
- **Rule**: All sub-routes must be placed inside their main route folder
- **Example Structure**:

```bash
src/pages/
├── company/
│   ├── index.tsx          # /company
│   ├── about-us.tsx       # /company/about-us
│   ├── team.tsx           # /company/team
│   ├── careers.tsx        # /company/careers
│   └── contact.tsx        # /company/contact
├── products/
│   ├── index.tsx          # /products
│   ├── [category].tsx     # /products/electronics
│   └── [category]/
│       └── [product].tsx  # /products/electronics/laptop
└── services/
    ├── index.tsx          # /services
    ├── consulting.tsx     # /services/consulting
    └── support.tsx        # /services/support
```

#### 4.2 Dynamic Routes
- **Use Case**: Product categories, blog posts, user profiles
- **Naming Convention**: Use square brackets `[param].tsx`
- **Example**: `[category].tsx`, `[slug].tsx`, `[id].tsx`

## ✅ Migration Checklist

### Pre-Migration Setup
- [ ] Create new Next.js project
- [ ] Install required dependencies
- [ ] Set up TypeScript configuration
- [ ] Configure Tailwind CSS (if used)

### Component Migration
- [ ] Move Header and Footer to `src/components/layout/`
- [ ] Move general components to `src/components/layout/`
- [ ] Keep company components in `src/components/company/`
- [ ] Create page-specific component folders as needed

### Layout Implementation
- [ ] Create `src/pages/_app.tsx` with MainLayout
- [ ] Implement `src/components/layout/MainLayout.tsx`
- [ ] Test layout rendering on all pages

### Features Migration
- [ ] Create feature folders for each page
- [ ] Move page sections to respective feature folders
- [ ] Update all import statements
- [ ] Test page-specific features

### Routing Setup
- [ ] Create main page routes
- [ ] Implement sub-routes in nested folders
- [ ] Set up dynamic routes where needed
- [ ] Test all route navigation

### Final Testing
- [ ] Test all pages render correctly
- [ ] Verify navigation between routes
- [ ] Check responsive design
- [ ] Validate SEO meta tags
- [ ] Test dynamic routes functionality

## 📚 Important Notes

### Import Path Updates
- Update all import statements to use the new folder structure
- Use Next.js path aliases for cleaner imports (`@/components`, `@/features`)

### CSS and Styling
- Move global styles to `src/styles/globals.css`
- Update CSS import statements
- Ensure Tailwind CSS classes work properly

### Assets
- Move all static assets to `public/` folder
- Update asset references in components

### Environment Variables
- Create `.env.local` for environment variables
- Update API endpoints and configuration

## 🔧 Troubleshooting

### Common Issues
1. **Import Errors**: Check file paths and update imports
2. **Layout Not Rendering**: Verify _app.tsx implementation
3. **Routes Not Working**: Check file naming and folder structure
4. **CSS Not Loading**: Verify CSS import in _app.tsx

### Testing Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📞 Support

If you encounter any issues during migration:
1. Check the migration checklist
2. Verify file and folder naming conventions
3. Test each step individually
4. Consult Next.js documentation for routing issues

## 🌿 Git Workflow and Branch Management

### Branch Creation Process

#### Step 1: Create Branch from Jira Task
```bash
# Before starting any work, create a new branch
# Branch naming convention: [task-type]/[JIRA-TICKET-ID]-[brief-description]

# Examples:
git checkout -b feature/MIG-001-component-reorganization
git checkout -b feature/MIG-002-layout-implementation
git checkout -b feature/MIG-003-features-migration
git checkout -b bugfix/MIG-004-routing-issues
```

#### Step 2: Work on Your Task
- Complete the assigned migration task
- Test your changes locally
- Ensure all code follows project standards

#### Step 3: Commit Your Changes
```bash
# Stage your changes
git add .

# Commit with descriptive message
git commit -m "MIG-001: Reorganize components - move Header/Footer to layout folder"

# For multiple commits, use clear messages:
git commit -m "MIG-001: Move general components to layout directory"
git commit -m "MIG-001: Update import paths after component reorganization"
```

#### Step 4: Push to GitHub
```bash
# Push your branch to GitHub (first time)
git push -u origin feature/MIG-001-component-reorganization

# For subsequent pushes to the same branch
git push origin feature/MIG-001-component-reorganization
```

#### Step 5: Create Pull Request on GitHub
1. **Go to GitHub Repository**
2. **Click "Compare & Pull Request"** (appears after pushing)
3. **Fill out PR Template:**

```markdown
## 📋 Jira Task
**Task ID**: MIG-001
**Task Title**: Component Reorganization
**Task URL**: [Link to Jira task]

## 🔄 Changes Made
- [ ] Moved Header and Footer to `src/components/layout/`
- [ ] Relocated general components to layout folder
- [ ] Kept company components in dedicated folder
- [ ] Updated all import statements

## ✅ Testing Done
- [ ] All components render correctly
- [ ] No broken imports
- [ ] Layout displays properly
- [ ] Responsive design maintained

## 📷 Screenshots
[Add screenshots if UI changes are involved]

## 🔍 Review Notes
- Please check import path updates
- Verify component folder structure
- Test on different screen sizes
```

4. **Assign Reviewers** (Team Lead)
5. **Add Labels** (enhancement, migration, etc.)
6. **Link to Jira Task** (if GitHub-Jira integration is set up)

### Branch Naming Conventions

```bash
# Feature branches (new functionality)
feature/MIG-[number]-[description]
feature/MIG-001-component-reorganization
feature/MIG-002-layout-implementation

# Bug fixes
bugfix/MIG-[number]-[description] 
bugfix/MIG-010-routing-fix

# Hotfixes (critical issues)
hotfix/MIG-[number]-[description]
hotfix/MIG-020-production-bug

# Chore/maintenance tasks
chore/MIG-[number]-[description]
chore/MIG-030-update-dependencies
```

### PR Review Process

#### For Developers (PR Creator):
1. **Self-Review**: Review your own code before submitting
2. **Add Description**: Clear explanation of changes
3. **Link Jira Task**: Reference the original task
4. **Request Review**: Assign team lead as reviewer
5. **Respond to Feedback**: Address review comments promptly

#### For Team Lead (Reviewer):
1. **Review within 24 hours** during work days
2. **Check Code Quality**: Architecture, maintainability, standards
3. **Verify Task Completion**: Ensure Jira requirements are met
4. **Test Locally** (if needed): Pull branch and test changes
5. **Provide Feedback**: Constructive comments and suggestions
6. **Approve or Request Changes**: Clear decision with explanation

### Workflow Example

```bash
# Developer workflow for MIG-001 task:

# 1. Start from main branch
git checkout main
git pull origin main

# 2. Create task branch
git checkout -b feature/MIG-001-component-reorganization

# 3. Work on the task
# ... make changes ...

# 4. Commit changes
git add .
git commit -m "MIG-001: Move Header and Footer to layout folder"

# 5. Continue working and committing
git add .
git commit -m "MIG-001: Update import statements for moved components"

# 6. Push to GitHub
git push -u origin feature/MIG-001-component-reorganization

# 7. Create PR on GitHub
# 8. Wait for review and address feedback
# 9. After approval, branch gets merged
```

### Task Assignment Strategy


```

### Important Git Rules

1. **Never push directly to main/develop branch**
2. **Always create PR for code review**
3. **Keep commits atomic and focused**
4. **Use descriptive commit messages with Jira ticket ID**
5. **Pull latest changes before creating new branch**

### PR Merge Process

#### After PR Approval:
1. **Ensure all checks pass** (CI/CD, tests)
2. **Rebase if needed** to keep clean history
3. **Merge using "Squash and merge"** (recommended)
4. **Delete feature branch** after merge
5. **Update Jira task status** to "Done"
6. **Pull latest main branch** for next task

---

**Team Members**: Assign specific sections to each developer for parallel work
**Branch Management**: Each task should have its own feature branch with proper PR workflow