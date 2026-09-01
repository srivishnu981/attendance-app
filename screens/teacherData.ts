// teacherData.ts
// Mock data for now — later this would come from your real backend/database.

export interface ClassInfo {
  id: string;
  subject: string;
  roomId: string;
}

export interface TeacherInfo {
  code: string;
  name: string;
  classes: ClassInfo[];
}

export const TEACHERS: TeacherInfo[] = [
  {
    code: 'T101',
    name: 'Prof. Sharma',
    classes: [
      { id: 'c1', subject: 'CS301 - Data Structures', roomId: 'Room-204' },
      { id: 'c2', subject: 'CS305 - Operating Systems', roomId: 'Room-108' },
    ],
  },
  {
    code: 'T102',
    name: 'Prof. Rao',
    classes: [
      { id: 'c3', subject: 'CS210 - Discrete Math', roomId: 'Room-301' },
    ],
  },
];

export function findTeacherByCode(code: string): TeacherInfo | undefined {
  return TEACHERS.find((t) => t.code.toUpperCase() === code.trim().toUpperCase());
}