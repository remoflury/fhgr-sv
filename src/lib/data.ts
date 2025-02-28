import { page } from "$app/state";
import { PUBLIC_CUSTOM_KEY } from "$env/static/public";
import AccordionsTask from "./components/tasks/accordionsTask.svelte";
import AnimatedPath from "./components/tasks/animatedPath.svelte";
import BasicRouting from "./components/tasks/basicRouting.svelte";
import ConditionalClasses from "./components/tasks/conditionalClasses.svelte";
import CounterButtons from "./components/tasks/counterButtons.svelte";
import DynamicAccordions from "./components/tasks/dynamicAccordions.svelte";
import DynamicRouting from "./components/tasks/dynamicRouting.svelte";
import FormActions from "./components/tasks/formActions.svelte";
import UserSearch from "./components/tasks/userSearch.svelte";
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
    {
      points: 4,
      difficulty: "easy",
      title: "Basic Routing and Fetching, mit Layouts und Errors",
      description: `
       Erstelle eine neue Route /basic-routing. Erstelle eine Subroute /basic-routing/test.
       Setze deine Files so auf, dass du ein simples Menu in /basic-routing hast, welches automatisch in alles Subroutes (z.B. /basic-routing/test) vorkommt.
       Erstelle zudem in /basic-routing ein +page.server.ts, welches einen Inhalt (h1 und p) lädt und ans +page.svelte gibt.
       Stelle sicher, dass eine Error Seite aufgerufen wird, wenn /basic-routing/blabla aufgerufen wird.
       <br/>
       <br/>
       💡 <a href="https://svelte.dev/docs/kit/routing" target="_blank">Hier</a> findest du mehr Infos zum Routing von SvelteKit<br/>
      `,
      more: {
        title: EXAMPLE_TITLE,
        component: BasicRouting
      }
    },
    {
      points: 8,
      difficulty: "advanced",
      title: "Client Side Fetching mit Filtern (Params)",
      description: `
        Stell dir vor, du hast eine Datenbank API, auf die nicht jede*r zugreifen soll. Dazu gibt es sogenannte API-Keys, welche verifizieren, dass du die API lesen darfst.
        Damit der API Key nicht veröffentlich wird, muss der Request jeweils server-seitig ausgelesen werden. Kopiere diesen API Key: <em style="font-weight: bold">${PUBLIC_CUSTOM_KEY}</em> in ein .env-File im Root-Directory deines Projektes.
        Erstelle einen client-seitigen Fetch an einen eigenen <a href="https://svelte.dev/docs/kit/routing#server" target="_blank">custom api Endpoint</a>. Fetche von dort aus mithilfe von eines Headers "x-api-key": <api-key> einen fetch an ${page.url.origin}/api/users
        und stelle die Response im Frontend dar. Erstelle zusätzlich Filter mit URL Params für eine Suche (q). 
      `,
      more: {
        title: EXAMPLE_TITLE,
        component: UserSearch
      }
    },
  ] 
  
} 