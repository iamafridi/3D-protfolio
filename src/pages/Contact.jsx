import React, { useRef, useState } from 'react'
import { Form } from 'react-router-dom'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value})
   };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Afridi",
        from_email: form.email,
        to_email: 'contact@afridiakabarifty',
        message: form.message
      },
      
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    ).then (()=>{
      setIsLoading(false);

      setForm({ name: '', email: '', message: '' })
    }).catch((error)=>{
      setIsLoading(false)
      console.log(error);
    })
   };

  const handleFocus = () => { };
  const handleBlur = () => { };


  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Let's Connect</h1>
        <form
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14'>
          <label className='text-black-500 font-semibold'>

            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='Your Name Here'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>

            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='Your Email Here'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>

            Your Message
            <textarea

              name='message'
              rows={4}
              className='textarea'
              placeholder='Let me know how can I help you'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type='submit'
            className='btn '
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

    </section>
  )
}

export default Contact