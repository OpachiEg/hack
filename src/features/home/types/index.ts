export interface NewsInfo {
    id: number,
    title: string
    image_url: string,
    content: string
}


export interface VacanciesInfo {
    id: number; // ID_вакансии
    profession: string; // Профессия
    applicationDate: Date; // Дата заявки
    company: string; // Компания
    salary: number | string; // Зарплата (может быть числом или строкой, если есть дополнительные условия)
    requiredExperience: string; // Требуемый опыт работы
    employmentType: string; // Тип занятости
    schedule: string; // График
    workingHours: string; // Рабочие часы
    requirements: string; // Требования
    responsibilities: string; // Обязанности
    additionalInfo: string; // Доп. информация

    // Оставляем старые поля для совместимости, если они нужны
    title?: string;
    image?: string;
    text?: string;
}