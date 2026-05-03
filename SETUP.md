# Dental Clinic Website - Setup Guide

## Project Overview

This is a lightweight, performance-optimized dental clinic website built with Next.js 16 and Tailwind CSS v4.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Forms**: React Hook Form v7.75.0
- **Font**: Inter (Google Fonts)
- **TypeScript**: Yes

## Features

✅ Lightweight and fast-loading
✅ Mobile-first responsive design
✅ SEO-optimized
✅ Minimal dependencies
✅ Clean, calm, and reassuring design
✅ Touch effects for mobile interactions
✅ Sticky navigation
✅ Floating WhatsApp button
✅ Mobile bottom action bar
✅ Smooth scrolling testimonial carousel
✅ Appointment booking form with validation

## Project Structure

```
dental-clinic/
├── app/
│   ├── components/
│   │   ├── TopBar.tsx              # Contact info bar
│   │   ├── Navbar.tsx              # Main navigation (sticky)
│   │   ├── Hero.tsx                # Hero section with clinic info
│   │   ├── Services.tsx            # Services grid
│   │   ├── ServiceCard.tsx         # Reusable service card
│   │   ├── About.tsx               # Team section
│   │   ├── DoctorCard.tsx          # Reusable doctor card
│   │   ├── WhyChooseUs.tsx         # Features section
│   │   ├── Testimonials.tsx        # Testimonial carousel
│   │   ├── TestimonialCard.tsx     # Reusable testimonial card
│   │   ├── AppointmentForm.tsx     # Booking form
│   │   ├── Contact.tsx             # Contact section with map
│   │   ├── Footer.tsx              # Footer
│   │   ├── FloatingWhatsApp.tsx    # Floating WhatsApp button
│   │   └── MobileBottomBar.tsx     # Mobile sticky bottom bar
│   ├── globals.css                 # Global styles and theme
│   ├── layout.tsx                  # Root layout
│   └── page.tsx                    # Main page
├── public/
├── package.json
└── tsconfig.json
```

## Installation & Setup

1. **Navigate to the project directory:**
   ```bash
   cd dental-clinic
   ```

2. **Install dependencies (if not already installed):**
   ```bash
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

## Customization Guide

### 1. Update Contact Information

Edit the following components with your clinic's details:

- `app/components/TopBar.tsx` - Phone, email, WhatsApp
- `app/components/Hero.tsx` - Address, phone, email, hours
- `app/components/Contact.tsx` - All contact details
- `app/components/FloatingWhatsApp.tsx` - WhatsApp link
- `app/components/MobileBottomBar.tsx` - Phone number

### 2. Update Clinic Name & Logo

- `app/components/Navbar.tsx` - Update clinic name
- `app/components/Footer.tsx` - Update clinic name
- `app/layout.tsx` - Update page title and description

### 3. Add Google Maps

Replace the map placeholder in `app/components/Contact.tsx`:

```tsx
// Replace this section with actual Google Maps iframe
<iframe
  src="YOUR_GOOGLE_MAPS_EMBED_URL"
  className="w-full h-full"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
/>
```

### 4. Update Doctor Information

Edit `app/components/About.tsx` - Replace doctor data with your team's information.

### 5. Update Services

Edit `app/components/Services.tsx` - Modify services array with your offerings.

### 6. Customize Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --primary: #0ea5e9;        /* Primary blue */
  --primary-light: #e0f2fe;  /* Light blue */
  --secondary: #10b981;      /* Green for WhatsApp */
  --accent: #f0f9ff;         /* Accent background */
}
```

### 7. Form Handling

The appointment form (`app/components/AppointmentForm.tsx`) currently logs data to console. To connect it to an API:

1. Create an API route: `app/api/appointments/route.ts`
2. Update the `onSubmit` function to send data to your backend
3. Example:

```tsx
const onSubmit = async (data: FormData) => {
  try {
    const response = await fetch('/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    // Handle response
  } catch (error) {
    // Handle error
  }
};
```

## Build for Production

```bash
pnpm build
```

## Deploy

This Next.js app can be deployed to:

- **Vercel** (Recommended): `vercel deploy`
- **Netlify**: Connect your Git repo
- **Free Tier Options**: Vercel Free, Netlify Free, Railway Free

## Performance Tips

- Images are loaded from Unsplash URLs - replace with optimized local images
- Use Next.js `<Image>` component for better optimization
- Enable image optimization in `next.config.ts` if needed
- Consider lazy loading for below-the-fold content

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available for customization.

## Support

For issues or questions, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Hook Form Documentation](https://react-hook-form.com)
