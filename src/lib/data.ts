import { page } from '$app/state';
import { PUBLIC_CUSTOM_KEY } from '$env/static/public';
import AccordionsTask from './components/tasks/accordionsTask.svelte';
import AnimatedPath from './components/tasks/animatedPath.svelte';
import BasicRouting from './components/tasks/basicRouting.svelte';
import BindingTask from './components/tasks/bindingTask.svelte';
import ConditionalClasses from './components/tasks/conditionalClasses.svelte';
import CounterButtons from './components/tasks/counterButtons.svelte';
import DynamicAccordions from './components/tasks/dynamicAccordions.svelte';
import DynamicRouting from './components/tasks/dynamicRouting.svelte';
// import EffectTask from "./components/tasks/effectTask.svelte";
import FormActions from './components/tasks/formActions.svelte';
import InputBinding from './components/tasks/inputBinding.svelte';
import MousePositionTask from './components/tasks/mousePositionTask.svelte';
import PageTransitionTask from './components/tasks/pageTransitionTask.svelte';
import StoreTask from './components/tasks/storeTask.svelte';
import UserSearch from './components/tasks/userSearch.svelte';
import type { TaskProps } from './types';

const EXAMPLE_TITLE = 'Beispiel';

export const createTasks = (): TaskProps[] => {
	return [
		{
			points: 1,
			difficulty: {
				level: 1,
				label: 'easy'
			},
			title: 'Counter Buttons',
			description:
				'Erstelle zwei Buttons, welche einen einfachen Counter steuern. Zeige nebenbei immer automatisch den verdoppelten Count an.',
			more: {
				title: EXAMPLE_TITLE,
				component: CounterButtons
			}
		},
		{
			points: 1,
			difficulty: {
				level: 1,
				label: 'easy'
			},
			title: 'Conditional Classes',
			description:
				'Erstelle einen Komponenten deiner Wahl und füge reaktiv Klassen hinzu, um das Styling zu verändern.<br/> <br/>💡 Es gibt gaaaanz viele Möglichkeiten, wie das geschehen kann.',
			more: {
				title: EXAMPLE_TITLE,
				component: ConditionalClasses
			}
		},
		{
			points: 1,
			difficulty: {
				level: 1,
				label: 'easy'
			},
			title: 'Bindings & Reactivity',
			description: `
        Erstelle einen input field und zeige dessen Inhalt direkt als Titel an. Erstelle nebenbei eine Anzeige, die automatisch die aktuelle Anzahl der "e" rausgibt.
        <br/>
        <br/>
        📄 <a href='https://svelte.dev/docs/svelte/bind#Function-bindings' target='_blank'>Hier</a> gehts zur entsprechenden Doku.
      `,
			more: {
				title: EXAMPLE_TITLE,
				component: InputBinding
			}
		},
		{
			points: 2,
			difficulty: {
				level: 1,
				label: 'easy'
			},
			title: 'Bindings & Reactivity 2',
			description: `Erstelle ein Input Field, welche ein Element animiert (Farbe, Width, etc.). Nutze dafür bindings.
        <br/>
        <br/>
        📄 <a href='https://svelte.dev/docs/svelte/bind#Function-bindings' target='_blank'>Hier</a> gehts zur entsprechenden Doku.`,
			more: {
				title: EXAMPLE_TITLE,
				component: BindingTask
			}
		},
		{
			points: 3,
			difficulty: {
				level: 2,
				label: 'medium'
			},
			title: 'Transitions & Animierter SVG Pfad',
			description: `Erstelle ein SVG, das onclick auf einen Button erscheint. Dessen Pfad soll animiert sein.<br/> 
      <br/>💡 <a href='https://lucide.dev' target='_blank'>Hier</a> findest du ganz viele geeignete SVGs zum kopieren. 
      <br/> 📄 <a href='https://svelte.dev/docs/svelte/svelte-transition#draw' target='_blank'>Hier</a> gehts zur entsprechenden Doku.`,
			more: {
				title: EXAMPLE_TITLE,
				component: AnimatedPath
			}
		},
		{
			points: 2,
			difficulty: {
				level: 1,
				label: 'easy'
			},
			title: 'Accordions',
			description: `
        Erstelle mehrere Accordions / Collapsibes, wie diejenigen, welche diese Aufgaben darin sind. Benutze dafür Svelte's snippet() Funktion, um Inhalte dynamisch in den Komponent zu geben.
        <br/> 📄 <a href='https://svelte.dev/docs/svelte/svelte#Snippet' target='_blank'>Hier</a> gehts zur Snippet-Doku.
        `,

			more: {
				title: EXAMPLE_TITLE,
				component: AccordionsTask
			}
		},
		{
			points: 4,
			difficulty: {
				level: 2,
				label: 'medium'
			},
			title: 'Dynamic fetched Accordions',
			description: `Erstelle mehrere Accordions / Collapsibles, wie diejenigen, welche diese Aufgaben darin sind. Benutze dafür Svelte's snippet() Funktion, um Inhalte dynamisch in den Komponent zu geben. Hole dir den Inhalt dafür mittels fetch() von ${page.url.origin}/api/accordions. Verwende await Blöcke und zeige zuerst Skeleton Loaders an.
        <br/>
        <br/>
         💡 Wenn du die vorherige Aufgabe gemacht hast, kannst du den Komponenten einfach wiederverwenden.
         <br/> 📄 <a href='https://svelte.dev/docs/svelte/svelte#Snippet' target='_blank'>Hier</a> gehts zur Snippet-Doku.
      `,
			more: {
				title: EXAMPLE_TITLE,
				component: DynamicAccordions
			}
		},
		{
			points: 6,
			difficulty: {
				level: 3,
				label: 'advanced'
			},
			title: 'Form Actions in SvelteKit',
			description: `
        Implementiere ein Formular in SvelteKit, das via Action verarbeitet wird.
        Zeige an, wie Daten serverseitig verarbeitet (z.B. validiert) werden
        und wie man anschliessend eine Bestätigung oder Fehlermeldung in der Seite anzeigt.
        <br/>
        <br/>
         <br/> 📄 Schaue dir in der <a href='https://svelte.dev/docs/kit/form-actions' target='_blank'>Doku</a> das Thema Form-Actions an.
      `,
			more: {
				title: EXAMPLE_TITLE,
				component: FormActions
			}
		},
		{
			points: 7,
			difficulty: {
				level: 3,
				label: 'advanced'
			},
			title: 'Dynamic Routing & fetching',
			description: `
       Mit der <a href="https://dummyjson.com/docs/products" target="_blank">DummyJSON API</a> können Produkte gefetcht werden. Erstelle eine Übersichtsseite, auf der 10 Produkte angezeigt werden. Verlinke jede einzelnes Produkt auf eine dynamische Einzelseite (Dynamic Routing). Fetche den Inhalt jeweils serverseitig (+page.server.ts).
       <br/>
       <br/>
        📄 <a href="https://svelte.dev/docs/kit/routing" target="_blank">Hier</a> findest du mehr Infos zum Routing von SvelteKit<br/>
       💡 <a href="/data/types.ts" target="_blank" >Hier</a> kannst du die Types für die API Response herunterladen.
      `,
			more: {
				title: EXAMPLE_TITLE,
				component: DynamicRouting
			}
		},
		{
			points: 4,
			difficulty: {
				level: 1,
				label: 'easy'
			},
			title: 'Basic Routing and Fetching, mit Layouts und Errors',
			description: `
       Erstelle eine neue Route /basic-routing. Erstelle eine Subroute /basic-routing.
       Setze deine Files so auf, dass du ein simples Menu in /basic-routing hast, welches automatisch in alles Subroutes (z.B. /basic-routing/test) vorkommt.
       Erstelle zudem in /basic-routing ein +page.server.ts, welches einen Inhalt (h1 und p) lädt und ans +page.svelte gibt.
       Stelle sicher, dass eine Error Seite aufgerufen wird, wenn /basic-routing/blabla aufgerufen wird.
       <br/>
       <br/>
        📄 <a href="https://svelte.dev/docs/kit/routing" target="_blank">Hier</a> findest du mehr Infos zum Routing von SvelteKit<br/>
      `,
			more: {
				title: EXAMPLE_TITLE,
				component: BasicRouting
			}
		},
		{
			points: 8,
			difficulty: {
				level: 3,
				label: 'advanced'
			},
			title: 'Client Side Fetching mit Filtern (Params)',
			description: `
        Stell dir vor, du hast eine Datenbank API, auf die nicht jede*r zugreifen soll. Dazu gibt es sogenannte API-Keys, welche verifizieren, dass du die API lesen darfst.
        Damit der API Key nicht veröffentlich wird, muss der Request jeweils server-seitig ausgelesen werden. Kopiere diesen API Key: <em style="font-weight: bold">${PUBLIC_CUSTOM_KEY}</em> in ein .env-File im Root-Directory deines Projektes.
        Erstelle einen client-seitigen Fetch an einen eigenen <a href="https://svelte.dev/docs/kit/routing#server" target="_blank">custom api Endpoint</a>.
        Fetche von dort aus ${page.url.origin}/api/users und authentifiziere dich mittels eines "x-api-key": <API KEY> in den Headers.
        Stelle die Response im Frontent dar und erstelle einen zusätzlichen Filter mit URL Parametern für eine Suche (q).
        <br/>
        <br/>
       💡 <a href="/data/userTypes.ts" target="_blank" >Hier</a> kannst du die Types für die API Response herunterladen.
      `,
			more: {
				title: EXAMPLE_TITLE,
				component: UserSearch
			}
		},
		{
			points: 2,
			difficulty: {
				level: 1,
				label: 'easy'
			},
			title: 'Stores',
			description: `
        Erstelle einen Writable Store, welcher über mehrere Seiten hinweg den Wert beibehält. Stores sind Variabeln, die global erhältlich sind. Sie gehen bei einem Page Reload verloren.
        Kreiere dafür Subroutes, um die Verwendung des Stores zu simulieren.
        <br/>
        <br/>
         📄 <a href="https://svelte.dev/docs/svelte/svelte-store" target="_blank">Hier</a> findest du mehr zu Stores.<br/>
      `,
			more: {
				title: EXAMPLE_TITLE,
				component: StoreTask
			}
		},
		// {
		//   points: 2,
		//   difficulty: {
		// level: 1,
		// label: "easy"},
		//   title: "$effects",
		//   description: `
		//     Erstelle einen Komponenten mit einem Button, welcher on click die Hintergrundfarbe des Body ändert. Nutze dazu $effect.
		//   `,
		//   more: {
		//     title: EXAMPLE_TITLE,
		//     component: EffectTask
		//   }
		// },
		{
			points: 4,
			difficulty: {
				level: 2,
				label: 'medium'
			},
			title: 'Page Transitions',
			description: `
        Erstelle eine neue Route /page-transition mit einem +layout.svelte & +page.svelte. Erstelle danach Subroutes /page-transition/[slug] oder einfach mehrere Einzelsubroutes. 
        Erfasse im Layout ein Menu, damit du zwischen den Seiten hin und her wechseln kannst. Implementiere eine Page Transition zwischen den Seiten.
        <br/>
        <br/>
         📄 <a href="https://svelte.dev/docs/svelte/svelte-transition" target="_blank">Hier</a> findest du generelle Infos zu Transitions.<br/>
        💡 Möglicherweise ist ein der <a href="https://svelte.dev/docs/svelte/key" target="_blank" >Key Tag</a> hilfreich.
      `,
			more: {
				title: EXAMPLE_TITLE,
				component: PageTransitionTask
			}
		},
		{
			points: 3,
			difficulty: {
				level: 1,
				label: 'easy'
			},
			title: 'Maus-Position',
			description: `
       Zeige Maus-Position in Realtime an und erstelle Interaktionen basierend auf deren Werte.
        <br/>
        <br/>
       💡 <a href="https://svelte.dev/docs/svelte/svelte-window" target="_blank" >svelte:body</a> könnte dir helfen.
       
      `,
			more: {
				title: EXAMPLE_TITLE,
				component: MousePositionTask
			}
		}
	];
};
