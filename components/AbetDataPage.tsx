import React, { useState, useCallback, ChangeEvent } from 'react';
import { fetchAbetDataForCourse } from '../services/geminiService';
import { downloadAsExcel } from '../utils/fileUtils';
import Spinner from './Spinner';
import type { Course, AbetDataRow } from '../types';

interface AbetDataPageProps {
  courses: Course[];
}

const AbetDataPage: React.FC<AbetDataPageProps> = ({ courses }) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [abetData, setAbetData] = useState<AbetDataRow[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCourseChange = useCallback(async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const courseCode = event.target.value;
    if (!courseCode) {
      setSelectedCourse(null);
      setAbetData([]);
      setError('');
      return;
    }

    const course = courses.find(c => c.code === courseCode) || null;
    setSelectedCourse(course);

    if (course) {
      setIsLoading(true);
      setError('');
      setAbetData([]);
      try {
        const data = await fetchAbetDataForCourse(course.name);
        setAbetData(data);
      } catch (err) {
        setError('Failed to fetch and structure ABET data. Please try again.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
  }, [courses]);

  const handleDataChange = (rowIndex: number, field: keyof AbetDataRow, value: string) => {
    const newData = [...abetData];
    newData[rowIndex] = { ...newData[rowIndex], [field]: value };
    setAbetData(newData);
  };
  
  const handleDownload = () => {
    if (!selectedCourse || abetData.length === 0) return;

    const headers = Object.keys(abetData[0]).map(key => key.replace(/_/g, ' '));
    
    let tableHtml = `
      <table border="1">
        <thead>
          <tr class="header-row">
            ${headers.map(h => `<th>${h}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${abetData.map(row => `
            <tr class="data-row">
              ${Object.values(row).map(cell => `<td>${cell}</td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>`;

    downloadAsExcel(tableHtml, `${selectedCourse.code}_ABET_Data`);
  };
  
  const renderTextarea = (value: string, onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void, rows = 5) => (
    <textarea
      value={value}
      onChange={onChange}
      className="w-full h-full bg-gray-700/50 text-gray-200 resize-y border border-gray-600 rounded-md focus:ring-1 focus:ring-indigo-500 p-2 text-xs"
      rows={rows}
    />
  );

  const tableHeaders = abetData.length > 0 ? Object.keys(abetData[0]) : [];

  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-md h-full flex flex-col">
       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <div className="flex-grow">
          <label htmlFor="course-select-abet" className="block text-sm font-medium text-gray-300 mb-2">
            Select a Course
          </label>
          <select
            id="course-select-abet"
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
          disabled={!selectedCourse || abetData.length === 0 || isLoading}
          className="self-end w-full sm:w-auto px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-green-500 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
        >
          Download as Excel
        </button>
      </div>
      <div className="flex-grow overflow-auto relative bg-gray-900/50 p-1 rounded-md border border-gray-600">
        {isLoading && <div className="absolute inset-0 flex items-center justify-center bg-gray-800/80 z-20"><Spinner /></div>}
        {error && <div className="text-red-400 p-4">{error}</div>}
        {!isLoading && !error && abetData.length === 0 && <div className="text-gray-500 text-center flex items-center justify-center h-full">Select a course to view its ABET data.</div>}
        
        {abetData.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full min-w-max text-sm whitespace-nowrap">
              <thead className="bg-gray-700 sticky top-0 z-10">
                <tr>
                  {tableHeaders.map(key => (
                    <th key={key} className="p-3 text-left font-semibold text-gray-300 capitalize">
                      {key.replace(/_/g, ' ')}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {abetData.map((row, rowIndex) => (
                  <tr key={rowIndex} className="bg-gray-800/50 hover:bg-gray-700/50">
                    {tableHeaders.map(key => (
                      <td key={key} className="p-1 align-top" style={{ minWidth: '250px', verticalAlign: 'top' }}>
                        {renderTextarea(
                          row[key as keyof AbetDataRow],
                          (e) => handleDataChange(rowIndex, key as keyof AbetDataRow, e.target.value)
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AbetDataPage;
