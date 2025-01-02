import './App.css'
import Attribution from './components/Attribution'
import SocialLinksProfile from './components/SocialLinksProfile'
import type { UserData } from './components/SocialLinksProfile'

function App() {
		const user: UserData = {
			avatarUrl: "/public/images/avatar-jessica.jpeg",
			name: "Jessica Randall",
			city: "London",
			country: "United Kingdom",
			description: "Front-end developer and avid reader.",
	
			links: [
				{
					name: "GitHub",
					link: "https://google.com/search?q=github",
				},
				{
					name: "Frontend Mentor",
					link: "https://google.com/search?q=frontendmentor",
				},
				{
					name: "LinkedIn",
					link: "https://google.com/search?q=linkedin",
				},
				{
					name: "Twitter",
					link: "https://google.com/search?q=twitter",
				},
				{
					name: "Instagram",
					link: "https://google.com/search?q=instagram",
				},
			],
		};
	

  return (
    <>
     <SocialLinksProfile user={user} />
  
	<Attribution authorName="Pedro" authorUrl="http://pedro.com" />
    </>
  )
}

export default App
