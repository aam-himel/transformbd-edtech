## Initial project structure

```
/transformbd-edtech/
├── app/
│   ├── (auth)/                      # Public auth routes
│   │   ├── login/                   # Login page
│   │   │   └── page.tsx
│   │   ├── signup/                  # Signup page
│   │   │   └── page.tsx
│   │   └── forgot-password/         # Optional: Forgot password
│   │       └── page.tsx
│   ├── (marketing)/                # Public marketing pages
│   │   ├── about/
│   │   ├── contact/
│   │   └── page.tsx                # Landing/home page
│   ├── (dashboard)/                # Protected course dashboard layout
│   │   ├── layout.tsx              # Dashboard layout (sidebar, etc.)
│   │   ├── course/                 # Main course structure
│   │   │   ├── page.tsx           # Overview page
│   │   │   ├── [lessonId]/         # Individual lesson player
│   │   │   │   └── page.tsx
│   │   │   └── quiz/               # Optional quiz section
│   │   │       └── [quizId]/page.tsx
│   │   ├── profile/
│   │   │   └── page.tsx
│   │   └── settings/
│   │       └── page.tsx
│   ├── api/                        # API route handlers if needed
│   │   └── auth/
│   │       └── route.ts
│   ├── layout.tsx                  # Root layout
│   └── page.tsx                    # Redirect or landing logic
├── components/
│   ├── ui/                         # Buttons, inputs, modals
│   ├── shared/                     # Navbar, footer, layout wrappers
│   ├── course/                     # Course player, progress bar, etc.
│   └── auth/                       # LoginForm, SignupForm, etc.
├── constants/                      # App-wide constants (routes, etc.)
├── hooks/                          # useAuth, useCourse, useProgress, etc.
├── lib/
│   ├── axios.ts                    # Axios instance
│   ├── auth.ts                     # Auth helper (token parsing, etc.)
│   └── videoPlayer.ts              # Player setup if needed
├── store/                          # Zustand or signal-based stores
├── types/                          # TypeScript types and interfaces
│   ├── auth.ts
│   ├── course.ts
│   └── user.ts
├── public/                         # Static assets (logos, images)
├── styles/
│   ├── globals.css
│   └── tailwind.config.ts
├── middleware.ts                   # Auth-based route protection
├── next.config.js
├── .env.local                      # Env vars
├── tsconfig.json
└── package.json

```