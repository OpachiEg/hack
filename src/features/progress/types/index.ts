export interface ProgressInfo {
    id: number,
    semester_number: number,
    cycle: string,
    lectures_hours: number,
    practice_hours: number,
    lab_hours: number,
    self_study_hours: number,
    credit_units: number,
    exam: number,
    credit: boolean,
    diff_credit: number,
    graphic_work: number,
    course_work: number,
    course_project: number,
    essay: number,
    report: number,
    comment: string,
    student: ProgressStudentInfo,
    discipline: ProgressDisciplineInfo
}

export interface ProgressStudentInfo {
    full_name: string
    group: ProgressGroupInfo
}

export interface ProgressGroupInfo {
    name: string
}

export interface ProgressDisciplineInfo {
    name: string
}