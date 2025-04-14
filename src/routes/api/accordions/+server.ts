import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const accordions = [
	{
		id: crypto.randomUUID(),
		title: 'Ameisen – Die Schlaflosen',
		content:
			'Wusstest du, dass Ameisen niemals schlafen? Sie machen zwar Pausen, aber einen richtigen Tiefschlaf kennen sie nicht.<br><small>Quelle: ChatGPT</small>'
	},
	{
		id: crypto.randomUUID(),
		title: 'Koalas – Meister des Schlafens',
		content:
			'Koalas schlafen bis zu 22 Stunden am Tag. Das ist mehr als die meisten anderen Saeugetiere!<br><small>Quelle: ChatGPT</small>'
	},
	{
		id: crypto.randomUUID(),
		title: 'Fledermäuse – Einzigartige Flieger',
		content:
			'Die Fledermaus ist das einzige Saeugetier, das wirklich fliegen kann. Andere gleiten hoechstens, doch Fledermaeuse schlagen tatsaechlich mit ihren Fluegeln.<br><small>Quelle: ChatGPT</small>'
	},
	{
		id: crypto.randomUUID(),
		title: 'Wale – Wasserbedarf aus dem Meer',
		content:
			'Die Wale haben kein Trinkbeduerfnis wie wir. Sie beziehen ihren Wasserbedarf hauptsaechlich aus der Nahrung und Meerwasser!<br><small>Quelle: ChatGPT</small>'
	},
	{
		id: crypto.randomUUID(),
		title: 'Kakerlaken – Ueberleben ohne Kopf',
		content:
			'Kakerlaken koennen bis zu einer Woche ohne Kopf ueberleben, weil sie durch Koerperloecher atmen. Erst der Hunger treibt sie irgendwann ins Jenseits.<br><small>Quelle: ChatGPT</small>'
	},
	{
		id: crypto.randomUUID(),
		title: 'Weltraum – Traenen als Kugeln',
		content:
			'Im Weltraum kann niemand weinen, weil die Traenen nicht runterkullern, sondern sich zu Kugeln sammeln.<br><small>Quelle: ChatGPT</small>'
	}
];

export const GET: RequestHandler = async () => {
	return json({ accordions: accordions });
};
