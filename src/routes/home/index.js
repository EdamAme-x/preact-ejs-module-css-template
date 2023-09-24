import style from './style.module.css';
import { marked } from 'marked';

export default function Home() {

	const markdown = marked(`
## Hello everyone!
\`\`\`javascript
Router => "src/index.js"
Routes => "src/routes/"
TemplateEJS => "src/tamplate.ejs"
\`\`\`
`);

	return (
		<>
			<div class={style.home}>
				<h1> <span class={style.heart}>♥️</span> Preact Template</h1>
				<img src="/assets/Octocat.png" alt="Mona" class={style.octocat} />
				<p>This is the Home component.</p>
				<div dangerouslySetInnerHTML={{ __html: markdown }}></div>
			</div>
		</>
	);
}

function Resource(props) {
	return (
		<a href={props.link} class={style.resource}>
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}
