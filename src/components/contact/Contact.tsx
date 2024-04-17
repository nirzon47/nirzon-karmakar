import Heading from '../ui/Heading'
import EmailArea from './EmailArea'
import Footer from './Footer'
import Resume from './Resume'
import SocialLinks from './SocialLinks'

export const Contact = () => {
	return (
		<div
			className=' md:mt-96 w-screen min-h-screen p-4 mt-24 md:p-8 lg:p-16'
			id='contact'
		>
			<Heading title={'Contact'} />
			<SocialLinks />
			<EmailArea />
			<Resume />
			<Footer />
		</div>
	)
}
