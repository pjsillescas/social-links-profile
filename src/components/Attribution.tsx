type Props = {
	authorName: string,
	authorUrl: string,
};

export default function Attribution({ authorName, authorUrl }: Props) {
	return (<div className="attribution">
		Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
		Coded by <a href={authorUrl}>{authorName}</a>.
	  </div>
	);
}