import UserLink from "./UserLink";

export type DataLink = {
	name: string,
	link: string,
};

export type UserData = {
	avatarUrl: string,
	name: string,
	city: string,
	country: string,
	description: string,

	links: DataLink[],
};

type Props = {
	user: UserData;
};

export default function SocialLinksProfile({ user }: Props) {
	
	return (<div className="social-links-profile">
		<img className="avatar" src={user.avatarUrl} alt={`avatar ${user.name}`} />
		<div className="text-white user">{user.name}</div>
		<div className="text-green location">{`${user.city}, ${user.country}`}</div>
		<div className="text-white description">{user.description}</div>

		<div className="user-links">
			{user.links.map(link => <UserLink key={`${link.name}`} dataLink={link} />)}
		</div>
	</div>);
}