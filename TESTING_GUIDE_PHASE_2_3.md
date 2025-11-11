# 🎯 Quick Testing Guide - Login & Profile Features

## 🚀 Test Phase 2 & 3 Implementation

### **Prerequisites**

```bash
npm run dev
# Server should be running on http://localhost:3000
```

---

## Test 1: Login Flow ✅

### Steps:

1. Navigate to: `http://localhost:3000/login`
2. Enter credentials:
   ```
   Email: test1@gmail.com
   Password: aam.himel
   ```
3. Click "Sign In"

### Expected Results:

- ✅ Loading spinner appears
- ✅ Success toast: "Login successful!"
- ✅ Another toast: "Profile fetched successfully" (or similar)
- ✅ Redirect to homepage after ~1 second
- ✅ Navbar shows profile dropdown (avatar + name)
- ✅ No errors in console

---

## Test 2: Profile Dropdown ✅

### Steps (after logging in):

1. Look at the top-right corner of navbar
2. You should see:
   - Avatar circle with initials
   - Your name next to it (desktop only)
3. Click on the avatar

### Expected Results:

- ✅ Dropdown menu appears
- ✅ Shows your name and role
- ✅ Has "Profile" option
- ✅ Has "Settings" option
- ✅ Has "Logout" option (red color)
- ✅ Clicking outside closes dropdown

---

## Test 3: Token Persistence ✅

### Steps:

1. Login successfully (from Test 1)
2. Observe navbar shows profile dropdown
3. Press F5 (or Cmd+R on Mac) to refresh page
4. Wait for page to reload

### Expected Results:

- ✅ Page reloads
- ✅ Profile dropdown STILL appears (no re-login needed)
- ✅ User name still visible
- ✅ No flash of "Join Us" button
- ✅ User stays authenticated

### Verify in DevTools:

1. Open DevTools (F12)
2. Go to "Application" tab
3. Click "Local Storage" → `http://localhost:3000`
4. Find `auth-storage` key
5. You should see JSON with:
   ```json
   {
     "state": {
       "token": "...",
       "user": { ... },
       "isAuthenticated": true
     }
   }
   ```

---

## Test 4: Logout Flow ✅

### Steps:

1. While logged in, click profile dropdown
2. Click "Logout" button (red)

### Expected Results:

- ✅ Success toast: "Logged out successfully"
- ✅ Profile dropdown disappears
- ✅ "Join Us" button appears in navbar
- ✅ localStorage `auth-storage` is cleared (check DevTools)
- ✅ Stays on current page (doesn't redirect unless you're on a protected page)

---

## Test 5: Login Validation ✅

### Test Invalid Email:

1. Go to `/login`
2. Enter: `notanemail`
3. Try to submit

**Expected:** Validation error appears: "Invalid email address"

### Test Empty Password:

1. Enter valid email
2. Leave password empty
3. Try to submit

**Expected:** Validation error: "Password is required"

### Test Wrong Credentials:

1. Enter: `wrong@email.com`
2. Password: `wrongpassword`
3. Submit

**Expected:** Error toast with API message

---

## Test 6: Navigation After Login ✅

### Steps:

1. Login successfully
2. Profile dropdown appears
3. Click "Profile" from dropdown
4. Should navigate to `/profile`
5. Go back, click dropdown again
6. Click "Settings"
7. Should navigate to `/settings`

**Note:** These pages might not be built yet, but navigation should work.

---

## Test 7: Protected Route Behavior (Future) 🔮

### Steps:

1. Make sure you're logged OUT
2. Try to visit `/profile` or `/settings`
3. Observe behavior

**Expected (when implemented):**

- Redirect to `/login`
- Or show "Login required" message

---

## Test 8: Auto-Logout on 401 ✅

### How to Test:

1. Login successfully
2. Open DevTools → Application → Local Storage
3. Manually change the token to something invalid like: `"invalid-token"`
4. Try to navigate or refresh page
5. System should detect invalid token and logout

**Expected:**

- Auto-redirect to `/login`
- Error toast about session expiration
- Profile dropdown disappears

---

## 🐛 Common Issues & Solutions

### Issue: Profile dropdown doesn't appear after login

**Solution:**

- Check browser console for errors
- Verify token is stored in localStorage
- Check Network tab for `/myProfile` request
- Ensure no CORS errors

### Issue: "Session expired" on every refresh

**Solution:**

- Check if localStorage is enabled
- Verify zustand persist is working
- Check browser privacy settings

### Issue: Login button stays loading forever

**Solution:**

- Check Network tab for API response
- Verify API endpoint is correct
- Check CORS settings
- Check API is running

### Issue: Token not attaching to requests

**Solution:**

- Verify axios interceptor is set up
- Check localStorage has token
- Ensure using the correct axios instance

---

## 📊 Checklist Summary

Copy this checklist and mark as you test:

```
[ ] Login with valid credentials works
[ ] Success toasts appear
[ ] Profile dropdown appears after login
[ ] Avatar shows correct initials
[ ] User name displays correctly
[ ] Token persists after page refresh
[ ] User stays logged in after refresh
[ ] Logout clears all data
[ ] "Join Us" button reappears after logout
[ ] Login form validation works
[ ] Invalid credentials show error
[ ] Network errors handled gracefully
[ ] No console errors during normal flow
[ ] localStorage contains auth data
[ ] Profile/Settings links work
```

---

## 🎯 Expected Flow Diagram

```
┌─────────────┐
│  /login     │
└──────┬──────┘
       │
       ▼
┌─────────────────┐
│ Enter Email/Pwd │
└──────┬──────────┘
       │
       ▼
┌─────────────┐     ┌──────────┐
│ API: Login  │────▶│  Token   │
└──────┬──────┘     └────┬─────┘
       │                 │
       ▼                 ▼
┌─────────────────┐ ┌──────────┐
│ Fetch Profile   │ │  Store   │
└──────┬──────────┘ └────┬─────┘
       │                 │
       ▼                 ▼
┌─────────────────────────┐
│   Redirect to Home      │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Profile Dropdown Shows │
└─────────────────────────┘
```

---

## 💡 Pro Tips

1. **Keep DevTools Open**: Monitor Network and Console tabs during testing
2. **Clear Cache**: If things seem broken, clear cache and localStorage
3. **Test in Incognito**: Verify fresh user experience
4. **Test Different Browsers**: Chrome, Firefox, Safari
5. **Test Mobile**: Responsive design should work on mobile

---

## 🎉 Success Indicators

You'll know everything is working when:

- ✅ You can login without errors
- ✅ Profile dropdown appears immediately after login
- ✅ Page refresh doesn't log you out
- ✅ Logout works and clears everything
- ✅ No console errors during any step
- ✅ All toasts appear at the right time
- ✅ Navigation feels smooth and fast

---

**Happy Testing! 🚀**
