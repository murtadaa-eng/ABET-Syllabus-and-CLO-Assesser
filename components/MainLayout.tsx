import React, { useState } from 'react';
import SyllabusPage from './SyllabusPage';
import AbetDataPage from './AbetDataPage';
import { Page, User } from '../types';
import { COURSES } from '../constants';

interface MainLayoutProps {
  user: User;
  onLogout: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ user, onLogout }) => {
  const [activePage, setActivePage] = useState<Page>(Page.Syllabus);

  const sortedCourses = [...COURSES].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-bold text-white">UOM Portal</h1>
              <nav className="flex space-x-4">
                <button
                  onClick={() => setActivePage(Page.Syllabus)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activePage === Page.Syllabus
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  Syllabus
                </button>
                <button
                  onClick={() => setActivePage(Page.ABET)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activePage === Page.ABET
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  ABET Data
                </button>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Welcome, {user.fullName}</span>
              <button
                onClick={onLogout}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-red-600 hover:text-white transition-colors border border-red-500/50"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <div className="bg-gray-800 py-3 border-b border-gray-700">
        <p className="text-center text-md font-semibold text-gray-300">
            Department of Civil Engineering, College of Engineering, University of Misan
        </p>
      </div>

      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        {activePage === Page.Syllabus && <SyllabusPage courses={sortedCourses} />}
        {activePage === Page.ABET && <AbetDataPage courses={sortedCourses} />}
      </main>

      <footer className="bg-gray-800/50 border-t border-gray-700 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-gray-500">
          <p>@Murtada Abass | All rights reserved | This website was created by Murtada Abass | November 2025</p>
          <p>For help contact: <a href="mailto:murtadaa@uomisan.edu.iq" className="text-indigo-400 hover:underline">murtadaa@uomisan.edu.iq</a></p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;