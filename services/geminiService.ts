import { GoogleGenAI, Type } from '@google/genai';
import { SYLLABUS_DATA, ABET_DATA } from '../constants';
import type { StructuredSyllabus, AbetDataRow } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });
const model = 'gemini-2.5-flash';

export const fetchSyllabusForCourse = async (courseCode: string, courseName: string): Promise<StructuredSyllabus | null> => {
  if (!API_KEY) {
    console.error("Gemini API key is not configured.");
    return null;
  }
  
  const prompt = `
    You are an expert data processor. You will be given a large text file containing syllabus information for multiple university courses.
    Your task is to find the syllabus for the course named "${courseName}" with code "${courseCode}" and parse it into a structured JSON object.

    The syllabus block starts with "Course_Code: ${courseCode}" and ends just before the next "Course_Code:" or at the end of the file.

    Please extract the following fields:
    1.  "course_code": The course code (e.g., "${courseCode}").
    2.  "course_name": The course name (e.g., "${courseName}").
    3.  "short_scope": The text from the "Short_Scope" field.
    4.  "clos": An array of objects for Course Learning Outcomes. Each object should have "id" (e.g., "CLO1"), "description", and "so_mapping" (e.g., "SO1"). The description is the text between the ID and the SO mapping.
    5.  "assessment_structure": The text from the "Assessment Structure" field.
    6.  "weekly_schedule": An array of objects for the 15-week schedule. Each object should have "week" (e.g., "Week1") and "description" (the text following the week identifier and '—').

    Return ONLY the JSON object. Do not include any commentary or markdown formatting.

    Here is the source text:
    ---
    ${SYLLABUS_DATA}
    ---
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            course_code: { type: Type.STRING },
            course_name: { type: Type.STRING },
            short_scope: { type: Type.STRING },
            clos: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  description: { type: Type.STRING },
                  so_mapping: { type: Type.STRING },
                }
              }
            },
            assessment_structure: { type: Type.STRING },
            weekly_schedule: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  week: { type: Type.STRING },
                  description: { type: Type.STRING },
                }
              }
            }
          }
        },
      },
    });
    
    const jsonString = response.text.trim();
    return JSON.parse(jsonString) as StructuredSyllabus;
  } catch (error) {
    console.error("Error fetching syllabus from Gemini:", error);
    return null;
  }
};

export const fetchAbetDataForCourse = async (courseName: string): Promise<AbetDataRow[]> => {
  if (!API_KEY) {
    console.error("Gemini API key is not configured.");
    return [];
  }

  const prompt = `
    You are an expert data processor.
    You will be given a large TSV (tab-separated value) text file of course ABET data.
    Your task is to extract all rows corresponding to the course with the exact name "${courseName}".
    Return the data as a JSON array of objects. Each object should represent a row, and its keys must exactly match the headers from the first line of the provided text.

    The headers are: Course_Code, Course_Name, CLO_Number, CLO_Description, ABET_SO_Mapping, Assessment_Type, Problem_Statement, Rubric_Criterion_1, Rubric_Criterion_2, Rubric_Criterion_3, Rubric_Level_4, Rubric_Level_3, Rubric_Level_2, Rubric_Level_1.

    Return ONLY the JSON array. Do not include any commentary or markdown formatting.

    Here is the source text:
    ---
    ${ABET_DATA}
    ---
  `;

  try {
    const response = await ai.models.generateContent({
      model: model, // Using Flash for faster extraction
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              Course_Code: { type: Type.STRING },
              Course_Name: { type: Type.STRING },
              CLO_Number: { type: Type.STRING },
              CLO_Description: { type: Type.STRING },
              ABET_SO_Mapping: { type: Type.STRING },
              Assessment_Type: { type: Type.STRING },
              Problem_Statement: { type: Type.STRING },
              Rubric_Criterion_1: { type: Type.STRING },
              Rubric_Criterion_2: { type: Type.STRING },
              Rubric_Criterion_3: { type: Type.STRING },
              Rubric_Level_4: { type: Type.STRING },
              Rubric_Level_3: { type: Type.STRING },
              Rubric_Level_2: { type: Type.STRING },
              Rubric_Level_1: { type: Type.STRING },
            },
            required: ['Course_Code', 'Course_Name', 'CLO_Number', 'CLO_Description', 'ABET_SO_Mapping', 'Assessment_Type', 'Problem_Statement', 'Rubric_Criterion_1', 'Rubric_Criterion_2', 'Rubric_Criterion_3', 'Rubric_Level_4', 'Rubric_Level_3', 'Rubric_Level_2', 'Rubric_Level_1'],
          }
        },
      },
    });

    const jsonString = response.text.trim();
    return JSON.parse(jsonString);

  } catch (error) {
    console.error("Error fetching and structuring ABET data from Gemini:", error);
    return [];
  }
};
