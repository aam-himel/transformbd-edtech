## Initial project structure

```
/transformbd-edtech/
my-app/
├── .env.local                          # Environment variables
├── .env.example                        # Environment variables template
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── components.json                     # shadcn/ui config
├── README.md
│
├── public/
│   ├── auth/
│   │   └── auth1.jpg                  # Auth page background image
│   ├── logo.svg                       # App logo
│   ├── google.svg                     # Google icon
│   └── favicon.ico
│
├── src/
│   ├── app/                           # App Router (Next.js 13+)
│   │   ├── globals.css                # Global styles
│   │   ├── layout.tsx                 # Root layout
│   │   ├── page.tsx                   # Home page
│   │   ├── loading.tsx                # Global loading UI
│   │   ├── error.tsx                  # Global error UI
│   │   ├── not-found.tsx              # 404 page
│   │   │
│   │   ├── auth/                      # Auth pages
│   │   │   ├── signup/
│   │   │   │   └── page.tsx           # Sign up page
│   │   │   ├── login/
│   │   │   │   └── page.tsx           # Login page
│   │   │   ├── forgot-password/
│   │   │   │   └── page.tsx           # Forgot password page
│   │   │   └── layout.tsx             # Auth layout
│   │   │
│   │   ├── dashboard/                 # Protected dashboard pages
│   │   │   ├── page.tsx
│   │   │   ├── profile/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   │
│   │   └── api/                       # API routes (if using Next.js API)
│   │       ├── auth/
│   │       │   ├── signup/
│   │       │   │   └── route.ts
│   │       │   ├── login/
│   │       │   │   └── route.ts
│   │       │   ├── verify-otp/
│   │       │   │   └── route.ts
│   │       │   └── resend-otp/
│   │       │       └── route.ts
│   │       └── health/
│   │           └── route.ts
│   │
│   ├── components/                    # Reusable components
│   │   ├── ui/                        # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── input-otp.tsx
│   │   │   └── index.ts               # Barrel exports
│   │   │
│   │   ├── auth/                      # Auth-specific components
│   │   │   ├── SignUpPage.tsx         # Main signup component
│   │   │   ├── EmailSignUpForm.tsx    # Email form component
│   │   │   ├── OTPForm.tsx            # OTP verification form
│   │   │   ├── CompleteSignupForm.tsx # Complete signup form
│   │   │   ├── LoginForm.tsx          # Login form
│   │   │   └── AuthLayout.tsx         # Auth pages layout
│   │   │
│   │   ├── common/                    # Common components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── LoadingSpinner.tsx
│   │   │   ├── ErrorBoundary.tsx
│   │   │   └── SEO.tsx
│   │   │
│   │   └── dashboard/                 # Dashboard components
│   │       ├── Sidebar.tsx
│   │       ├── Navbar.tsx
│   │       └── DashboardLayout.tsx
│   │
│   ├── lib/                           # Utility libraries
│   │   ├── utils.ts                   # General utilities
│   │   ├── constants.ts               # App constants
│   │   ├── validations.ts             # Zod schemas
│   │   ├── auth.ts                    # Auth utilities
│   │   ├── api.ts                     # API client configuration
│   │   ├── query-client.ts            # TanStack Query client
│   │   └── cn.ts                      # Class name utility (shadcn)
│   │
│   ├── store/                         # Zustand stores
│   │   ├── authStore.ts               # Authentication store
│   │   ├── userStore.ts               # User data store
│   │   ├── uiStore.ts                 # UI state store
│   │   └── index.ts                   # Store exports
│   │
│   ├── api/                           # API layer
│   │   ├── client.ts                  # Base API client
│   │   ├── auth/
│   │   │   ├── authApi.ts             # Auth API functions
│   │   │   ├── types.ts               # Auth API types
│   │   │   └── queries.ts             # TanStack Query hooks
│   │   ├── user/
│   │   │   ├── userApi.ts
│   │   │   ├── types.ts
│   │   │   └── queries.ts
│   │   └── index.ts                   # API exports
│   │
│   ├── hooks/                         # Custom React hooks
│   │   ├── useAuth.ts                 # Authentication hook
│   │   ├── useLocalStorage.ts         # Local storage hook
│   │   ├── useDebounce.ts             # Debounce hook
│   │   ├── useTimer.ts                # Timer hook (for OTP)
│   │   └── index.ts                   # Hook exports
│   │
│   ├── providers/                     # Context providers
│   │   ├── QueryProvider.tsx          # TanStack Query provider
│   │   ├── AuthProvider.tsx           # Auth context provider
│   │   ├── ThemeProvider.tsx          # Theme provider
│   │   └── AppProviders.tsx           # Combined providers
│   │
│   ├── middleware.ts                  # Next.js middleware (auth)
│   │
│   └── types/                         # TypeScript type definitions
│       ├── auth.ts                    # Auth-related types
│       ├── user.ts                    # User-related types
│       ├── api.ts                     # API response types
│       └── global.ts                  # Global type definitions
│
├── docs/                              # Documentation
│   ├── SETUP.md                       # Setup instructions
│   ├── API.md                         # API documentation
│   └── DEPLOYMENT.md                  # Deployment guide
│
└── tests/                             # Test files
    ├── __mocks__/                     # Test mocks
    ├── components/                    # Component tests
    ├── pages/                         # Page tests
    ├── api/                           # API tests
    └── setup.ts                       # Test setup
```
