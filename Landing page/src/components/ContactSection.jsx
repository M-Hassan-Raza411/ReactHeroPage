import React from 'react'
import Form from './Form'
import { MailPlus , Phone} from 'lucide-react';
import { Toaster } from 'sonner';

const ContactSection = () => {
    return (
        <>
    <Toaster position='top-right' richColors   
              toastOptions={{
            duration: 3000,
            className: 'custom-toast',
        }}
    />
        <div id='contact' className='contactsection'>
            <div className="left">
                <h2 className='contactheading'>Get In Touch</h2>
                <p className="contactdesc">Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible!</p>

                <div className="contacts">

                    <div className="contact">
                        <MailPlus  className='contacticon'/>
                        <p className="contacttext">mhassanraza896@gmail.com</p>
                    </div>

                    <div className="contact">
                        <Phone className='contacticon'/>
                        <p className="contacttext">+92 3162399371</p>
                    </div>

                </div>

            </div>
            <div className="right">
                <Form />
            </div>
        </div>
        </>
    )
}

export default ContactSection
