import { page } from "$app/state";
import AccordionsTask from "./components/tasks/accordionsTask.svelte";
import AnimatedPath from "./components/tasks/animatedPath.svelte";
import ConditionalClasses from "./components/tasks/conditionalClasses.svelte";
import CounterButtons from "./components/tasks/counterButtons.svelte";
import DynamicAccordions from "./components/tasks/dynamicAccordions.svelte";
import DynamicRouting from "./components/tasks/dynamicRouting.svelte";
import FormActions from "./components/tasks/formActions.svelte";
import type { TaskProps } from "./types";

const EXAMPLE_TITLE = "Beispiel"

export const createTasks = (): TaskProps[] => {
  return [
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
      description: "Erstelle einen Komponenten deiner Wahl und füge reaktiv Klassen hinzu, um das Styling zu verändern.<br/> <br/>💡 Es gibt gaaaanz viele Möglichkeiten, wie das geschehen kann.",
      more: {
        title: EXAMPLE_TITLE,
        component: ConditionalClasses
      }
    },
    {
      points: 3,
      difficulty: "medium",
      title: "Transitions & Animierter SVG Pfad",
      description: "Erstelle ein SVG, das onclick auf einen Button erscheint. Dessen Pfad soll animiert sein.<br/> <br/>💡 <a href='https://lucide.dev' target='_blank'>Hier</a> findest du ganz viele geeignete SVGs zum kopieren.",
      more: {
        title: EXAMPLE_TITLE,
        component: AnimatedPath
      }
    },
    {
      points: 2,
      difficulty: "easy",
      title: "Accordions",
      description: "Erstelle mehrere Accordions / Collapsibles, wie diejenigen, welche diese Aufgaben darin sind. Benutze dafür Svelte's snippet() Funktion, um Inhalte dynamisch in den Komponent zu passen.",
      more: {
        title: EXAMPLE_TITLE,
        component: AccordionsTask
      }
    },
    {
      points: 4,
      difficulty: "medium",
      title: "Dynamic fetched Accordions",
      description: `Erstelle mehrere Accordions / Collapsibles, wie diejenigen, welche diese Aufgaben darin sind. Benutze dafür Svelte's snippet() Funktion, um Inhalte dynamisch in den Komponent zu passen. Hole dir den Inhalt dafür mittels fetch() von ${page.url.origin}/api/accordions. Verwende await Blöcke und zeige zuerst Skeleton Loaders an.`,
      more: {
        title: EXAMPLE_TITLE,
        component: DynamicAccordions
      }
    },
    {
      points: 6,
      difficulty: "advanced",
      title: "Form Actions in SvelteKit",
      description: `
        Implementiere ein Formular in SvelteKit, das via Action verarbeitet wird.
        Zeige an, wie Daten serverseitig verarbeitet (z.B. validiert) werden
        und wie man anschliessend eine Bestätigung oder Fehlermeldung in der Seite anzeigt.
        <br/>
        <br/>
        💡 Schaue dir in der Doku das Thema Form-Actions an.
      `,
      more: {
        title: EXAMPLE_TITLE,
        component: FormActions
      }
    },
    {
      points: 7,
      difficulty: "advanced",
      title: "Dynamic Routing & fetching",
      description: `
       Mit der <a href="https://dummyjson.com/docs/products" target="_blank">DummyJSON API</a> können Produkte gefetcht werden. Erstelle eine Übersichtsseite, auf der 10 Produkte angezeigt werden. Verlinke jede einzelnes Produkt auf eine dynamische Einzelseite (Dynamic Routing). Fetche den Inhalt jeweils serverseitig (+page.server.ts).
       <br/>
       <br/>
       💡 <a href="https://svelte.dev/docs/kit/routing" target="_blank">Hier</a> findest du mehr Infos zum Routing von SvelteKit<br/>
       💡 <a href="/data/types.ts" target="_blank" >Hier</a> kannst du die Types für die API Response herunterladen.
      `,
      more: {
        title: EXAMPLE_TITLE,
        component: DynamicRouting
      }
    },
  ] 
  
} 