import React from 'react';
import {TbBell} from "react-icons/tb";
import "./index.css";
import { useState } from 'react';
import { VacanciesInfo } from '../../../home/types';
import VacanciesItem from '../vacanciesItem/VacanciesItem';

const Vacancies = () => {

    const [vacancies, setVacancies] = useState<Array<VacanciesInfo>>([
        {
            id: 1,
            profession: "Специалист 1 разряда (бухгалтер)",
            applicationDate: new Date("2023-09-01"),
            company: "ТУ Росимущества в Республике Башкортостан",
            salary: "50000 руб.",
            requiredExperience: "От 1 года",
            employmentType: "Полная занятость",
            schedule: "Пятидневка",
            workingHours: "9:00 - 18:00",
            requirements: "Высшее образование, опыт работы в бухгалтерии",
            responsibilities: "Ведение бухгалтерского учета, составление отчетности",
            additionalInfo: "Офис находится в центре города, корпоративные мероприятия",
            title: "Специалист 1 разряда (бухгалтер) в отдел финансового обеспечения, делопроизводства и кадров",
            image: "https://eventbooking.ru/file-manager/file?path=albums%2Falbum%2Fbd%2Fbd0ca3100d578f6da6f188dcd94a964d5e36fb13e054b.jpg",
            text: "ТУ Росимущества в Республике Башкортостан"
        },
        {
            id: 2,
            profession: "Программист",
            applicationDate: new Date("2023-09-15"),
            company: "ФГБОУ ВО Уфимский университет науки и технологий",
            salary: "80000 руб.",
            requiredExperience: "От 3 лет",
            employmentType: "Полная занятость",
            schedule: "Гибкий график",
            workingHours: "10:00 - 19:00",
            requirements: "Высшее техническое образование, знание JavaScript, React",
            responsibilities: "Разработка и поддержка веб-приложений, написание тестов",
            additionalInfo: "Проекты с использованием передовых технологий, обучение и развитие",
            title: "День открытых дверей",
            image: "https://eventbooking.ru/file-manager/file?path=albums%2Falbum%2Fbd%2Fbd0ca3100d578f6da6f188dcd94a964d5e36fb13e054b.jpg",
            text: "ФГБОУ ВО Уфимский университет науки и технологий (Уфимский университет науки и технологий, УУНиТ; Уфимский университет[2]) — высшее учебное заведение в городе Уфа, созданное в 2022 в результате объединения (слияния) классического Башкирского государственного университета — старейшего вуза Башкортостана, основанного в 1909, и Уфимского государственного авиационного технического университета, основанного в 1932, входившего в ТОП-100 лучших вузов России до 2022 и занимавший 25-е место среди российских вузов в рейтинге лучших вузов мира в 2021"
        },
        {
            id: 3,
            profession: "Менеджер по продажам",
            applicationDate: new Date("2023-10-01"),
            company: "Компания Продаж",
            salary: "60000 руб.",
            requiredExperience: "От 2 лет",
            employmentType: "Полная занятость",
            schedule: "Пятидневка",
            workingHours: "9:00 - 18:00",
            requirements: "Высшее образование, опыт работы в продажах",
            responsibilities: "Поиск новых клиентов, проведение переговоров, заключение сделок",
            additionalInfo: "Командная работа, регулярные тренинги",
            title: "Менеджер по продажам в отделе B2B",
            image: "https://eventbooking.ru/file-manager/file?path=albums%2Falbum%2Fbd%2Fbd0ca3100d578f6da6f188dcd94a964d5e36fb13e054b.jpg",
            text: "Компания Продаж - лидер рынка в области B2B продаж"
        },
        {
            id: 4,
            profession: "Дизайнер UX/UI",
            applicationDate: new Date("2023-10-15"),
            company: "Студия Дизайна",
            salary: "75000 руб.",
            requiredExperience: "От 1 года",
            employmentType: "Полная занятость",
            schedule: "Гибкий график",
            workingHours: "10:00 - 19:00",
            requirements: "Высшее образование в области дизайна, знание Figma, Sketch",
            responsibilities: "Создание прототипов, дизайн интерфейсов, взаимодействие с командой разработчиков",
            additionalInfo: "Проекты с использованием современных технологий, творческая атмосфера",
            title: "UX/UI Дизайнер в студии веб-дизайна",
            image: "https://eventbooking.ru/file-manager/file?path=albums%2Falbum%2Fbd%2Fbd0ca3100d578f6da6f188dcd94a964d5e36fb13e054b.jpg",
            text: "Студия Дизайна - команда профессионалов, создающих уникальные цифровые продукты"
        },
        {
            id: 5,
            profession: "Инженер по автоматизации",
            applicationDate: new Date("2023-11-01"),
            company: "Автоматизация Плюс",
            salary: "90000 руб.",
            requiredExperience: "От 4 лет",
            employmentType: "Полная занятость",
            schedule: "Пятидневка",
            workingHours: "8:00 - 17:00",
            requirements: "Высшее техническое образование, опыт работы с системами автоматизации",
            responsibilities: "Разработка и внедрение систем автоматизации, техническая поддержка",
            additionalInfo: "Проекты в различных отраслях, возможность карьерного роста",
            title: "Инженер по автоматизации в Автоматизация Плюс",
            image: "https://eventbooking.ru/file-manager/file?path=albums%2Falbum%2Fbd%2Fbd0ca3100d578f6da6f188dcd94a964d5e36fb13e054b.jpg",
            text: "Автоматизация Плюс - компания, предоставляющая решения для повышения эффективности бизнес-процессов"
        }
    ]);

   return (
        <div className="carrer-vacancies">
            <h4 className="a-slide-y">Вакансии</h4>
            <div className="vacancies-container">
                {vacancies.map((v) => (
                    <VacanciesItem key={v.id} item={v} />
                ))}
            </div>
        </div>
    );
};

export default Vacancies;