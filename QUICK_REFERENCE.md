# Quick Reference - Common Customizations

## 🔧 Most Common Tasks

### 1. Change Clinic Name
**File**: `app/components/Navbar.tsx` (line ~15)
```tsx
<span className="text-xl font-semibold text-gray-800">YOUR CLINIC NAME</span>
```

**File**: `app/components/Footer.tsx` (line ~11)
```tsx
<span className="text-xl font-semibold">YOUR CLINIC NAME</span>
```

**File**: `app/layout.tsx` (line 10)
```tsx
title: "YOUR CLINIC NAME - Professional Dental Care",
```

---

### 2. Update Phone Number
Search and replace `+1 (234) 567-890` and `1234567890` in:
- `app/components/TopBar.tsx`
- `app/components/Hero.tsx`
- `app/components/Contact.tsx`
- `app/components/FloatingWhatsApp.tsx`
- `app/components/MobileBottomBar.tsx`
- `app/components/Footer.tsx`

---

### 3. Update Email
Search and replace `info@dentalclinic.com` in:
- `app/components/TopBar.tsx`
- `app/components/Hero.tsx`
- `app/components/Contact.tsx`
- `app/components/Footer.tsx`

---

### 4. Update Address
**File**: `app/components/Hero.tsx` (line ~23)
**File**: `app/components/Contact.tsx` (line ~34)
**File**: `app/components/Footer.tsx` (line ~37)

Replace:
```
123 Dental Street
Healthcare City, HC 12345
United States
```

---

### 5. Update Working Hours
**File**: `app/components/Hero.tsx` (line ~47)
**File**: `app/components/Contact.tsx` (line ~77)

```tsx
<p>Monday - Friday: 9:00 AM - 7:00 PM</p>
<p>Saturday: 9:00 AM - 5:00 PM</p>
<p>Sunday: Closed</p>
```

---

### 6. Change Colors
**File**: `app/globals.css`

```css
:root {
  --primary: #0ea5e9;        /* Main blue - buttons, accents */
  --primary-light: #e0f2fe;  /* Light blue - backgrounds */
  --secondary: #10b981;      /* Green - WhatsApp */
  --accent: #f0f9ff;         /* Very light blue - sections */
}
```

Popular alternatives:
```css
/* Professional Blue */
--primary: #2563eb;
--primary-light: #dbeafe;

/* Medical Green */
--primary: #059669;
--primary-light: #d1fae5;

/* Trustworthy Navy */
--primary: #1e40af;
--primary-light: #dbeafe;
```

---

### 7. Update Services
**File**: `app/components/Services.tsx` (line ~5)

```tsx
const services = [
  {
    icon: <Smile className="w-6 h-6" />,
    title: 'YOUR SERVICE',
    description: 'Your service description here.',
  },
  // Add more services...
];
```

Available icons from Lucide React:
- `Smile`, `Sparkles`, `Shield`, `Scissors`
- `Heart`, `Star`, `Zap`, `Activity`
- `Award`, `CheckCircle`, `Target`

---

### 8. Update Doctor Team
**File**: `app/components/About.tsx` (line ~4)

```tsx
const doctors = [
  {
    name: 'Dr. Your Name',
    specialization: 'General Dentistry',
    image: 'https://your-image-url.jpg',
    experience: '15+ years experience',
  },
  // Add more doctors...
];
```

**Pro Tip**: Upload images to `public/images/` folder:
```tsx
image: '/images/doctor1.jpg',
```

---

### 9. Connect Appointment Form
**File**: `app/components/AppointmentForm.tsx` (line ~22)

Replace the `onSubmit` function:

```tsx
const onSubmit = async (data: FormData) => {
  try {
    const response = await fetch('/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    if (response.ok) {
      setIsSubmitted(true);
      reset();
    } else {
      // Handle error
      alert('Failed to submit. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
  }
};
```

**Then create**: `app/api/appointments/route.ts`
```tsx
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Send to your backend/database/email service
  // Example: await sendEmail(data);
  
  return NextResponse.json({ success: true });
}
```

---

### 10. Add Google Maps
**File**: `app/components/Contact.tsx` (line ~23)

Replace the placeholder div with:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
  className="w-full h-full"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

**How to get embed URL:**
1. Go to Google Maps
2. Search your address
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL

---

### 11. Update Testimonials
**File**: `app/components/Testimonials.tsx` (line ~10)

```tsx
const testimonials = [
  {
    name: 'Patient Name',
    review: 'Your patient review text here...',
    rating: 5,
  },
  // Add more testimonials...
];
```

---

### 12. Change Font
**File**: `app/layout.tsx`

Replace Inter with Poppins:
```tsx
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
```

Then update `app/globals.css`:
```css
--font-sans: var(--font-poppins);
```

---

### 13. Add Logo Image
**File**: `app/components/Navbar.tsx` (line ~20)

Replace the SVG icon with:
```tsx
import Image from 'next/image';

<Image
  src="/images/logo.png"
  alt="Clinic Logo"
  width={40}
  height={40}
/>
<span className="text-xl font-semibold">Your Clinic</span>
```

Add logo to: `public/images/logo.png`

---

### 14. Customize Button Text
**Navbar CTA**: `app/components/Navbar.tsx` (line ~38)
```tsx
Book Appointment → YOUR TEXT
```

**Mobile Bottom Bar**: `app/components/MobileBottomBar.tsx` (line ~10)
```tsx
Call Now → YOUR TEXT
Book → YOUR TEXT
```

---

### 15. SEO Optimization
**File**: `app/layout.tsx` (line 10)

```tsx
export const metadata: Metadata = {
  title: "YOUR CLINIC - Professional Dental Care in CITY",
  description: "Expert dental services including cleanings, whitening, orthodontics, and emergency care in CITY. Book your appointment today!",
  keywords: "dentist, dental clinic, teeth cleaning, orthodontics, CITY dentist",
  openGraph: {
    title: "YOUR CLINIC",
    description: "Professional dental care in CITY",
    url: "https://yourwebsite.com",
    siteName: "YOUR CLINIC",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
```

---

## 🎯 Component File Quick Reference

| Component | Purpose | Line to Edit |
|-----------|---------|--------------|
| TopBar | Contact info | 11, 20, 31 |
| Navbar | Logo & menu | 15, 27 |
| Hero | Clinic info & image | 12, 23, 36, 47, 66 |
| Services | Service grid | 5-40 |
| About | Team section | 4-20 |
| AppointmentForm | Booking form | 22 (form handler) |
| Contact | Contact details | 34, 52, 62, 72 |
| Footer | Footer content | 11, 37 |

---

## 🚀 Testing Checklist

Before deploying:
- [ ] All links work (internal & external)
- [ ] Phone numbers dial correctly
- [ ] Email links open mail client
- [ ] WhatsApp opens correctly
- [ ] Form validation works
- [ ] Mobile menu toggles
- [ ] Responsive on all screen sizes
- [ ] Images load properly
- [ ] No console errors
- [ ] Fast page load (< 3 seconds)

---

## 🆘 Common Issues

**Issue**: Colors not changing
**Fix**: Clear browser cache or hard reload (Ctrl+Shift+R)

**Issue**: Images not showing
**Fix**: Check image URLs or use Next.js Image component

**Issue**: Form not submitting
**Fix**: Check browser console for errors, ensure API route exists

**Issue**: Build fails
**Fix**: Run `pnpm install` again, check for TypeScript errors

---

**Need more help?** Check SETUP.md or DEPLOYMENT.md
