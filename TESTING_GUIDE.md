# 🎯 Quick Start Guide - Testing Registration Flow

## How to Test Phase 1

### Step 1: Start the Development Server

```bash
npm run dev
```

### Step 2: Navigate to Signup Page

Open your browser and go to:

```
http://localhost:3000/signup
```

### Step 3: Test the Flow

#### 📧 Email Verification

1. Enter your email address
2. Click "Continue"
3. Wait for OTP to be sent (check console for OTP if in development)

#### 🔢 OTP Verification

1. Enter the 5-digit OTP received
2. Click "Continue"
3. Wait for verification

#### 📝 Registration Form

1. Fill in all required fields:
   - **Name**: Your full name
   - **Email**: (Pre-filled, read-only)
   - **Password**: At least 6 characters
   - **Confirm Password**: Must match password
   - **Phone**: Your phone number (e.g., +1234567890)
   - **Profession**: Your profession (e.g., Software Engineer)
   - **Education**: Your education level (e.g., BSc, MSc)
   - **Address**: Your address
   - **Device ID & Name**: Auto-filled (browser info)

2. Click "Complete Registration"

#### ✅ Success

- See success message with checkmark
- Automatic redirect to homepage after 1.5 seconds
- Check browser DevTools to verify:
  - Token stored in localStorage
  - User profile loaded

---

## 🔍 Debugging Tips

### Check Token Storage

1. Open DevTools (F12)
2. Go to "Application" tab
3. Click "Local Storage"
4. Look for `auth-storage` key
5. You should see token and user data

### Check Network Requests

1. Open DevTools (F12)
2. Go to "Network" tab
3. You should see these requests:
   - POST `/verifyEmail`
   - POST `/verifyOTP`
   - POST `/register`
   - GET `/myProfile`

### Check Console for Errors

1. Open DevTools (F12)
2. Go to "Console" tab
3. Look for any error messages

---

## 🎨 Expected Behavior

### ✅ Success Indicators

- Green success toasts appear
- Form progresses to next step
- No console errors
- Token stored in localStorage
- User data appears in store

### ❌ Error Indicators

- Red error toasts appear
- Form shows inline validation errors
- Network errors shown in toast
- Console shows error details

---

## 📱 Responsive Testing

Test on different screen sizes:

- **Desktop**: Full 2-column form layout
- **Mobile**: Single column, vertical stack
- **Tablet**: Adaptive layout

---

## 🔐 Test Data Example

Use this data for testing:

```json
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "Test123!",
  "conf_password": "Test123!",
  "phone": "+1234567890",
  "profession": "Software Developer",
  "education": "BSc Computer Science",
  "address": "123 Main St, City, Country"
}
```

---

## 🎯 What to Verify

- [ ] Email form submits successfully
- [ ] OTP input accepts 5 digits
- [ ] Registration form validates all fields
- [ ] Password and confirm password must match
- [ ] Token is stored after registration
- [ ] User profile is fetched automatically
- [ ] Success screen appears
- [ ] Redirect works after 1.5 seconds
- [ ] No TypeScript/console errors
- [ ] All toasts appear correctly

---

**Happy Testing! 🚀**
