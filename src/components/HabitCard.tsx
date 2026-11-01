import type { Habit } from "../types";

interface HabitCardProps {
    habit: Habit,
}

function HabitCard({ habit }: HabitCardProps) {
    return (
        <article>
            <span>{habit.icon} </span>
            <h2> {habit.name} </h2>
            <p> {habit.description} </p>
        </article>
    )
}

export default HabitCard