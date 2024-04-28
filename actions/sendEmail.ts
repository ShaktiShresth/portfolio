"use server";

import React from 'react';
import ContactFormEmail from '@/email/contact-form-email';
import { getErrorMessage, validateString } from '@/lib/utils';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    // Simple server-side validation
    if (!validateString(senderEmail, 500)) {
        return {
          error: "Invalid sender email!",
        };
      }
      if (!validateString(message, 5000)) {
        return {
          error: "Invalid message!",
        };
      }
    
    let data;
    try {
        data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'shaktisthaaa7@gmail.com',
            subject: 'Message from Nextjs Porfolio to contact you.',
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
            })
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
    }
    return {
        data,
    }
}

