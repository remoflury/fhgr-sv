import AnimatedPath from "./components/tasks/animatedPath.svelte";
import ConditionalClasses from "./components/tasks/conditionalClasses.svelte";
import CounterButtons from "./components/tasks/counterButtons.svelte";
import type { TaskProps } from "./types";

const EXAMPLE_TITLE = "Beispiel"

export const tasks: TaskProps[] = [
  {
    points: 1,
    difficulty: "easy",
    title: "Counter Buttons",
    description: "Erstelle zwei Buttons, welche einen einfachen Counter steuern. Zeige nebenbei immer automatisch den verdoppelten Count an.",
    more: {
      title: EXAMPLE_TITLE,
      component: CounterButtons
    }
  },
  {
    points: 1,
    difficulty: "easy",
    title: "Conditional Classes",
    description: "Erstelle einen Komponenten deiner Wahl und füge reaktiv Klassen hinzu, um das Styling zu verändern.<br/>💡 Es gibt gaaaanz viele Möglichkeiten, wie das geschehen kann.",
    more: {
      title: EXAMPLE_TITLE,
      component: ConditionalClasses
    }
  },
  {
    points: 3,
    difficulty: "medium",
    title: "Transitions & Animierter SVG Pfad",
    description: "Erstelle ein SVG, das onclick auf einen Button erscheint. Dessen Pfad soll animiert sein.<br/>💡 <a href='https://lucide.dev' target='_blank'>Hier</a> findest du ganz viele geeignete SVGs zum kopieren.",
    more: {
      title: EXAMPLE_TITLE,
      component: AnimatedPath
    }
  }
] 
