import { DataLink } from "./SocialLinksProfile";

type Props = {
	dataLink: DataLink,
};

export default function UserLink({ dataLink }: Props) {
	return (<a target="_blank" href={dataLink.link} className="user-link text-white">{dataLink.name}</a>);
}