
import React, { FormEvent, useState } from 'react';
import { CheckCircle2 as CheckCircle2Icon, LoaderCircle as LoaderCircleIcon, Send as SendIcon } from 'lucide-react';

type FormState = {name: string;email: string;subject: string;message: string;};
type FormErrors = Partial<Record<keyof FormState, string>>;

export function ContactForm() {
  const [values, setValues] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!values.name.trim()) nextErrors.name = 'Please share your name.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = 'Enter a valid email address.';
    if (!values.subject.trim()) nextErrors.subject = 'Add a subject so we can help.';
    if (values.message.trim().length < 12) nextErrors.message = 'Tell us a little more (12 characters minimum).';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    window.setTimeout(() => setStatus('success'), 850);
  };

  if (status === 'success') return <div className="flex min-h-[480px] flex-col items-center justify-center rounded-5xl bg-crimson-500 p-8 text-center text-white shadow-soft"><CheckCircle2Icon className="h-14 w-14 text-gold" /><h2 className="mt-6 font-display text-3xl font-bold">Message received.</h2><p className="mt-3 max-w-sm leading-7 text-white/75">Thanks for reaching out. A member of our team will get back to you shortly.</p><button type="button" onClick={() => {setStatus('idle');setValues({ name: '', email: '', subject: '', message: '' });}} className="mt-8 rounded-full border border-white/25 px-5 py-3 text-sm font-bold transition hover:bg-white hover:text-crimson-500">Send another message</button></div>;

  const fieldClass = (field: keyof FormState) => `peer w-full rounded-2xl border bg-white px-4 pb-3 pt-6 text-sm text-ink outline-none transition placeholder:text-transparent focus:border-crimson-500 dark:bg-white/5 dark:text-white ${errors[field] ? 'border-red-400' : 'border-ink/10 dark:border-white/10'}`;
  const labelClass = 'pointer-events-none absolute left-4 top-3 text-xs font-bold uppercase tracking-[0.12em] text-ink/45 transition peer-focus:text-crimson-500 dark:text-white/45 dark:peer-focus:text-gold';

  return <form noValidate onSubmit={submit} className="rounded-5xl border border-white/70 bg-white/90 p-6 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-ink/85 md:p-9"><div className="grid gap-5 sm:grid-cols-2"><label className="relative"><input value={values.name} onChange={(event) => setValues({ ...values, name: event.target.value })} placeholder="Full name" className={fieldClass('name')} /><span className={labelClass}>Full name</span>{errors.name && <span className="mt-1 block text-xs text-red-500">{errors.name}</span>}</label><label className="relative"><input type="email" value={values.email} onChange={(event) => setValues({ ...values, email: event.target.value })} placeholder="Email address" className={fieldClass('email')} /><span className={labelClass}>Email address</span>{errors.email && <span className="mt-1 block text-xs text-red-500">{errors.email}</span>}</label></div><label className="relative mt-5 block"><input value={values.subject} onChange={(event) => setValues({ ...values, subject: event.target.value })} placeholder="Subject" className={fieldClass('subject')} /><span className={labelClass}>Subject</span>{errors.subject && <span className="mt-1 block text-xs text-red-500">{errors.subject}</span>}</label><label className="relative mt-5 block"><textarea value={values.message} onChange={(event) => setValues({ ...values, message: event.target.value })} placeholder="Message" rows={5} className={`${fieldClass('message')} resize-none`} /><span className={labelClass}>Message</span>{errors.message && <span className="mt-1 block text-xs text-red-500">{errors.message}</span>}</label><button disabled={status === 'sending'} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-crimson-500 px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-crimson-700 disabled:cursor-wait disabled:opacity-70 dark:bg-gold dark:text-ink dark:hover:bg-gold-light">{status === 'sending' ? <><LoaderCircleIcon className="h-4 w-4 animate-spin" /> Sending message</> : <><SendIcon className="h-4 w-4" /> Send message</>}</button></form>;
}