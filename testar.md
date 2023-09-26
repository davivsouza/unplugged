
function checkIsHabitCompleted(habit: HabitDTO) {
  const isCompletedFilter = habit.habitLogs?.filter(habitlog => habitlog.dayOfWeek === Number(dayjs().day()))
  const uncompletedList: HabitDTO[] = [];
  const completedList: HabitLogs[] = []

  if (isCompletedFilter) {
    if (isCompletedFilter.length > 0) {
      completedList.push(isCompletedFilter[0])
      setCompletedHabits({
        title: 'Hábitos conclúidos de hoje',
        data: completedList
      })
    } else {
      uncompletedList.push(habit)
      setUncompletedHabits({
        title: 'Hábitos de hoje',
        data: uncompletedList
      })
    }
  }
}



// 9d099631-61b4-46e7-9e49-ac26aac83658