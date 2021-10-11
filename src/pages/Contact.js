import React from 'react'
import ContactForm from '../components/Forms/ContactForm/ContactForm'
import LocationIcon from '../components/Icons/LocationIcon'
import MailIcon from '../components/Icons/MailIcon'
import PhoneIcon from '../components/Icons/PhoneIcon'


const Contact = () => {
    return (
        <section className="py-40 dark:bg-coolGray-800 dark:text-coolGray-50">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x md:divide-blue-400">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Get in touch</h1>
			<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex items-center">
					<LocationIcon />
					<span>Fake address, 9999 City</span>
				</p>
				<p className="flex items-center">
					<PhoneIcon />
					<span>+989355908760</span>
				</p>
				<p className="flex items-center">
					<MailIcon/>
					<span>Sepanta_97@Yahoo.com</span>
				</p>
			</div>
		</div>
		{/* <form novalidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid focus:outline-none">
			<label className="block">
				<span className="mb-1">Full name</span>
				<input name='name' type="text" placeholder="Enter Your Name"  />
			</label>
			<label className="block">
				<span className="mb-1">Email address</span>
				<input type="email" name='email' placeholder="Enter Your Email" />
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea  rows="3"  ></textarea>
			</label>
			<button type="button" className="self-center px-8 py-3 text-lg bg-blue-400 rounded-lg resize-none focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-coolGray-900 focus:ring-violet-400 hover:ring-violet-400">Submit</button>
		</form> */}
		<ContactForm />
	</div>
</section>
    )
}

export default Contact
