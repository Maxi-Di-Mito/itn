import React, { Component ,PropTypes } from 'react';
import ContactSectionView from './ContactSectionView.jsx'
import $ from 'jquery';


const sendMail = (form) => {
    return new Promise((resolve, reject)=>{
        $.ajax({
            url: '/sendMail',
            data: $(form).serialize(),
            dataType: 'json',
            type: 'post',
            success: (data)=> {
                console.log(JSON.stringify(data));
                resolve(data);
            },
            error:(jq)=>{
                reject(jq);
            }
        });
    })

};

const ContactSection = () => (

        <ContactSectionView sendMail={sendMail}/>
)



export default ContactSection;