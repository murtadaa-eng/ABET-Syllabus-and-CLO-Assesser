import React, { useState, useCallback, ChangeEvent } from 'react';
import { fetchSyllabusForCourse } from '../services/geminiService';
import { downloadAsExcel } from '../utils/fileUtils';
import Spinner from './Spinner';
import type { Course, StructuredSyllabus } from '../types';

interface SyllabusPageProps {
  courses: Course[];
}

const SyllabusPage: React.FC<SyllabusPageProps> = ({ courses }) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [syllabus, setSyllabus] = useState<StructuredSyllabus | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCourseChange = useCallback(async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const courseCode = event.target.value;
    if (!courseCode) {
      setSelectedCourse(null);
      setSyllabus(null);
      setError('');
      return;
    }

    const course = courses.find(c => c.code === courseCode) || null;
    setSelectedCourse(course);
    
    if (course) {
      setIsLoading(true);
      setError('');
      setSyllabus(null);
      try {
        const content = await fetchSyllabusForCourse(course.code, course.name);
        setSyllabus(content);
      } catch (err) {
        setError('Failed to fetch and parse syllabus data. Please try again.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
  }, [courses]);
  
  const handleTextChange = (field: keyof StructuredSyllabus, value: string) => {
    if (!syllabus) return;
    setSyllabus({ ...syllabus, [field]: value });
  };

  const handleCloChange = (index: number, field: 'description' | 'so_mapping', value: string) => {
    if (!syllabus) return;
    const newClos = [...syllabus.clos];
    newClos[index] = { ...newClos[index], [field]: value };
    setSyllabus({ ...syllabus, clos: newClos });
  };

  const handleWeekChange = (index: number, value: string) => {
    if (!syllabus) return;
    const newSchedule = [...syllabus.weekly_schedule];
    newSchedule[index] = { ...newSchedule[index], description: value };
    setSyllabus({ ...syllabus, weekly_schedule: newSchedule });
  };

  const handleDownload = () => {
    if (!syllabus) return;
    
    let tableHtml = `<table border="1">
        <tr class="header-row"><td colspan="3">${syllabus.course_name} (${syllabus.course_code})</td></tr>
        
        <tr class="subheader-row"><td>Course Code</td><td colspan="2">${syllabus.course_code}</td></tr>
        <tr><td></td><td colspan="2">${syllabus.course_code}</td></tr>
        
        <tr class="subheader-row"><td>Course Name</td><td colspan="2">${syllabus.course_name}</td></tr>
        <tr><td></td><td colspan="2">${syllabus.course_name}</td></tr>
        
        <tr class="subheader-row"><td>Short Description</td><td colspan="2">${syllabus.short_scope}</td></tr>
        <tr><td></td><td colspan="2">${syllabus.short_scope}</td></tr>

        <tr class="subheader-row"><td>Assessment Structure</td><td colspan="2">${syllabus.assessment_structure}</td></tr>
        <tr><td></td><td colspan="2">${syllabus.assessment_structure}</td></tr>

        <tr class="header-row"><td colspan="3">Course Learning Outcomes (CLOs)</td></tr>
        <tr class="subheader-row"><td>CLO</td><td>Description</td><td>SO Mapping</td></tr>
        ${syllabus.clos.map(clo => `
            <tr>
                <td>${clo.id}</td>
                <td>${clo.description}</td>
                <td>${clo.so_mapping}</td>
            </tr>
        `).join('')}

        <tr class="header-row"><td colspan="3">Weekly Schedule</td></tr>
        <tr class="subheader-row"><td>Week</td><td colspan="2">Description</td></tr>
        ${syllabus.weekly_schedule.map(week => `
            <tr>
                <td>${week.week}</td>
                <td colspan="2">${week.description}</td>
            </tr>
        `).join('')}
    </table>`;
    
    downloadAsExcel(tableHtml, `${syllabus.course_code}_Syllabus`);
  };
  
  const renderTextarea = (value: string, onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void, placeholder: string, rows = 2) => (
      <textarea
          value={value}
          onChange={onChange}
          className="w-full bg-gray-700/50 text-gray-200 resize-y border border-gray-600 rounded-md focus:ring-1 focus:ring-indigo-500 p-2 text-sm"
          placeholder={placeholder}
          rows={rows}
      />
  );

  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-md h-full flex flex-col">
       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <div className='flex-grow'>
          <label htmlFor="course-select" className="block text-sm font-medium text-gray-300 mb-2">
            Select a Course
          </label>
          <select
            id="course-select"
            onChange={handleCourseChange}
            className="w-full bg-gray-700 border border-gray-600 text-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
            defaultValue=""
          >
            <option value="">-- Please choose a course --</option>
            {courses.map(course => (
              <option key={course.code} value={course.code}>
                {course.name} ({course.code})
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleDownload}
          disabled={!syllabus || isLoading}
          className="self-end w-full sm:w-auto px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-green-500 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
        >
          Download as Excel
        </button>
      </div>
      <div className="flex-grow bg-gray-900/50 p-4 rounded-md border border-gray-600 overflow-auto relative">
        {isLoading && <div className="absolute inset-0 flex items-center justify-center bg-gray-800/80 z-10"><Spinner /></div>}
        {error && <div className="text-red-400 p-4">{error}</div>}
        {!isLoading && !error && !syllabus && <div className="text-gray-500 text-center flex items-center justify-center h-full">Select a course to view its syllabus.</div>}
        {syllabus && (
          <table className="w-full text-sm">
            <tbody className='divide-y divide-gray-700'>
              <tr className='align-top'><td className="font-semibold text-gray-300 p-2 w-48">Course Code</td><td className='p-2' colSpan={2}>{syllabus.course_code}</td></tr>
              <tr className='align-top'><td className="font-semibold text-gray-300 p-2">Course Name</td><td className='p-2' colSpan={2}>{syllabus.course_name}</td></tr>
              <tr className='align-top'><td className="font-semibold text-gray-300 p-2">Short Description</td><td className='p-2' colSpan={2}>{renderTextarea(syllabus.short_scope, (e) => handleTextChange('short_scope', e.target.value), 'Short Scope', 3)}</td></tr>
              <tr className='align-top'><td className="font-semibold text-gray-300 p-2">Assessment</td><td className='p-2' colSpan={2}>{renderTextarea(syllabus.assessment_structure, (e) => handleTextChange('assessment_structure', e.target.value), 'Assessment Structure')}</td></tr>
              
              <tr className='align-top'>
                <td className="font-semibold text-gray-300 p-2 pt-4" colSpan={3}>Course Learning Outcomes (CLOs)</td>
              </tr>
              {syllabus.clos.map((clo, index) => (
                <tr key={index} className="align-top">
                  <td className="p-2 text-gray-400">{clo.id}</td>
                  <td className='p-2 w-2/3'>{renderTextarea(clo.description, (e) => handleCloChange(index, 'description', e.target.value), `CLO ${index + 1} Description`, 3)}</td>
                  <td className='p-2'>{renderTextarea(clo.so_mapping, (e) => handleCloChange(index, 'so_mapping', e.target.value), 'SO Mapping', 3)}</td>
                </tr>
              ))}
              
              <tr className='align-top'>
                 <td className="font-semibold text-gray-300 p-2 pt-4" colSpan={3}>Weekly Schedule</td>
              </tr>
              {syllabus.weekly_schedule.map((week, index) => (
                 <tr key={index} className="align-top">
                    <td className="p-2 text-gray-400">{week.week}</td>
                    <td className='p-2' colSpan={2}>{renderTextarea(week.description, (e) => handleWeekChange(index, e.target.value), 'Week description', 2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default SyllabusPage;
