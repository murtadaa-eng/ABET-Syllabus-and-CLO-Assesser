export interface User {
  username: string;
  fullName: string;
}

export enum Page {
  Syllabus = 'Syllabus',
  ABET = 'ABET',
}

export interface Course {
  code: string;
  name: string;
}

// For Syllabus Page
export interface SyllabusCLO {
  id: string;
  description: string;
  so_mapping: string;
}

export interface SyllabusWeek {
  week: string;
  description: string;
}

export interface StructuredSyllabus {
  course_code: string;
  course_name: string;
  short_scope: string;
  clos: SyllabusCLO[];
  assessment_structure: string;
  weekly_schedule: SyllabusWeek[];
}

// For ABET Page
export interface AbetDataRow {
  Course_Code: string;
  Course_Name: string;
  CLO_Number: string;
  CLO_Description: string;
  ABET_SO_Mapping: string;
  Assessment_Type: string;
  Problem_Statement: string;
  Rubric_Criterion_1: string;
  Rubric_Criterion_2: string;
  Rubric_Criterion_3: string;
  Rubric_Level_4: string;
  Rubric_Level_3: string;
  Rubric_Level_2: string;
  Rubric_Level_1: string;
}
