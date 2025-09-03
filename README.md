# Job Portal

A modern **Job Portal** web application built with **Next.js 15.5.0**, **Redux Toolkit**, **Axios**, **Tailwind CSS**, and **TypeScript**.  
It enables users to **search, filter, and explore job opportunities** with **real-time listings powered by the Adzuna Jobs API**, and provides secure **authentication with Firebase**.  
The UI is designed to be clean and fully responsive, inspired by a [Figma design system](https://www.figma.com/design/cdz6OKHCJypm1ff8TlvYWZ/Job-Portal-Figma-Template--Community-?node-id=25-5975).   

---

## 🚀 Features

- 🔐 **Authentication** – User registration & login with Firebase  
- 🔒 **Protected Job Redirects** – Only logged-in users can open the original Adzuna job posting link 
- 🔎 **Job Search & Filters** – Search jobs by keyword, category, and location  
- 🏢 **Top Companies** – Highlighted companies with open job listings  
- 📊 **Recent Jobs** – Displays the latest job postings dynamically  
- 🌐 **Responsive Design** – Fully responsive using TailwindCSS  
- ⚡ **State Management** – Powered by Redux Toolkit for predictable state handling  
- 🔗 **API Integration** – Adzuna Jobs API for fetching job data  
- 🎨 **Modern UI** – Based on Figma design system  

---

## 🛠️ Tech Stack

- [Next.js 15.5.0](https://nextjs.org/) – React framework for SSR & routing 
- [Adzuna Jobs API](https://developer.adzuna.com/overview) – Real-time job listings data 
- [Redux Toolkit](https://redux-toolkit.js.org/) – State management  
- [Axios](https://axios-http.com/) – HTTP client  
- [TailwindCSS](https://tailwindcss.com/) – Utility-first CSS framework  
- [TypeScript](https://www.typescriptlang.org/) – Type safety  
- [Firebase Authentication](https://firebase.google.com/docs/auth) – Secure login & registration  

---

## ⚙️ Installation & Setup

1. Clone the repository  
   ```bash
   git clone https://github.com/Sarathmithran/job-portal.git
   cd job-portal
   ```

2. Install dependencies  
   ```bash
   npm install
   ```

3. Add your Firebase config  
   - Create a `.env.local` file in the project root  
   - Add your Firebase credentials:  
     ```env
         NEXT_PUBLIC_ADZUNA_APP_ID=your_adzuna_app_id
         NEXT_PUBLIC_ADZUNA_APP_KEY=your_adzuna_app_key

         NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
         NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
         NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
         NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
         NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
         NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
         NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
     ```

4. Run development server  
   ```bash
   npm run dev
   ```

5. Open in browser → [http://localhost:3000](http://localhost:3000)  

---

## 🤝 Contributing

Contributions are welcome!  

1. Fork the repo  
2. Create a feature branch → `git checkout -b feature-name`  
3. Commit changes → `git commit -m "Added feature"`  
4. Push to branch → `git push origin feature-name`  
5. Open a Pull Request  

---

## 📜 License

This project is licensed under the **MIT License** – free to use and modify.  