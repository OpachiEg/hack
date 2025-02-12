export interface ScheduleItem {
    id: number,
    groupName: string,
    semester: string,
    startAt: string,
    endAt: string,
    discipline: string,
    teacher: string,
    audience: string,
    type: string,
    num: number
}

export interface ScheduleWeekDay {
    date: Date,
    dayOfWeek: string
}
