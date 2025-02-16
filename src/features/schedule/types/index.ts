export interface ScheduleItem {
    date: string
    discipline: string
    lesson_time: string
    teacher: string
    room: string
    type: string
    group_name: string
    lesson_number: number
}

export interface ScheduleResult {
    week_number: number,
    schedule: Array<{date: string,lessons: Array<ScheduleItem>}>
}

export interface SearchResult {
    name: string,
    value: string,
    type: "group" | "room" | "teacher"
}
