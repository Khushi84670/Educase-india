## Educase India – PopX Mobile UI

This repository contains a small React + Vite project that recreates the PopX mobile flow from an Adobe XD design.  
The mobile interface is rendered inside a centered phone frame, with four screens (Landing, Signup, Login, Profile) connected via a stepper-style slider and React Router navigation.

### Project structure

- `popx-mobile-ui/` – Vite + React source code for the PopX mobile UI
  - `src/` – React components, pages, and global styles
  - `src/pages/` – Landing, Signup, Login, and Profile screens
  - `src/components/` – Reusable layout, form, and button components

### Getting started

1. **Clone the repo**

```bash
git clone https://github.com/Khushi84670/Educase-india.git
cd Educase-india/popx-mobile-ui
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the dev server**

```bash
npm run dev
```

Open the URL printed in the terminal (usually `http://localhost:5173`) to view the UI.

### Deploy on Vercel

1. Import this repo in [Vercel](https://vercel.com) (New Project → Import Git).
2. In **Settings → General**, set **Root Directory** to `popx-mobile-ui` (required).
3. Leave **Build Command** as `npm run build` and **Output Directory** as `dist`.
4. Deploy; Vercel will auto-deploy on every push to `main`.

### Live demo

Live demo link: `https://educase-india-self-sigma.vercel.app/`

### License

You can use this project as a reference or starting point for similar UI tasks and interviews.

