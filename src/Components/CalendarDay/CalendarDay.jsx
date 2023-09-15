import { useState, useEffect } from "react";
import { Wrap, DayOfWeekText, DayText } from "./CalendarDay.styled";
const CalendarDay = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Устанавливаем интервал для обновления даты каждый час
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 3600000); // 1 час = 3600000 миллисекунд

    // Очищаем интервал при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []);

  const daysOfWeek = ["Нд", "Пн", "Вт", "Cр", "Чт", "Пт", "Cб"];
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const date = currentDate.getDate();

  return (
    <Wrap>
      <DayOfWeekText> {dayOfWeek}</DayOfWeekText>
      <DayText> {date}</DayText>
    </Wrap>
  );
};

export default CalendarDay;
