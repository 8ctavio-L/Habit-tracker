import { useState } from "react"
import type { Habit } from "./types"
import HabitCard from "./components/HabitCard"


const initialHabits: Habit[] = [
  {
    id: '1',
    name: 'Curso TripleTen',
    description: 'Estudiar al menos una hora al día.',
    color: '#c4f135',
    completedDates: ['2026-10-29', '2026-10-30'],
    icon: '📚',
    size: 'large',
  },
  {
    id: '2',
    name: 'Salir a correr',
    description: 'salir a correr 30 minutos',
    color: '#6392e7',
    completedDates: ['2026-10-29', '2026-10-30'],
    icon: '📚',
    size: 'medium',
  },
  {
    id: '3',
    name: 'Clases Extras',
    description: 'Estudiar al menos una hora al día.',
    color: '#e7bd63',
    completedDates: ['2026-10-29', '2026-10-30'],
    icon: '📚',
    size: 'medium',
  },

]


function App() {
  const [habits,] = useState<Habit[]>(initialHabits)


  return (
    <main>
      <h1>Habit Tracker</h1>
      <section>
        {habits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </section>
    </main>
  )
}

export default App