
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/sections/Footer';
import { ThemeProvider } from './lib/theme';
import { AvenuePreviewPage } from './pages/AvenuePreviewPage';
import { ArticlePage } from './pages/ArticlePage';
import { AvenuesPage } from './pages/AvenuesPage';
import { BoardPage } from './pages/BoardPage';
import { BlogPage } from './pages/BlogPage';
import { ClubServicePage } from './pages/ClubServicePage';
import { ContactPage } from './pages/ContactPage';
import { GalleryPage } from './pages/GalleryPage';
import { HomePage } from './pages/HomePage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';

export function App() {
  return (
    <ThemeProvider>
      <div className="w-full overflow-x-hidden bg-white font-body text-ink transition-colors duration-300 dark:bg-ink dark:text-white">
        <ScrollToTop />
        <Loader />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/avenues" element={<AvenuesPage />} />
          <Route path="/avenues/club-service" element={<ClubServicePage />} />
          <Route path="/avenues/:slug" element={<AvenuePreviewPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/board" element={<BoardPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<ArticlePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>);

}