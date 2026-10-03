
import React, { useState } from 'react';
import { ChevronDown as ChevronDownIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const questions = [
['How can I volunteer?', 'Explore a project that speaks to you, then contact the relevant avenue director or send us a message here.'],
['How can I collaborate on a project?', 'We welcome thoughtful project ideas, skills-based support and community collaborations that align with our avenues of service.'],
['Where are meetings held?', 'Most club meetings are held on campus at UCSC, with selected sessions available online.'],
['How can organisations collaborate with us?', 'We welcome values-aligned partners for community initiatives, mentoring and creative collaborations.']];


export function FaqList() {
  const [open, setOpen] = useState(0);
  return <div className="divide-y divide-ink/10 rounded-4xl border border-ink/10 bg-white/70 px-6 dark:divide-white/10 dark:border-white/10 dark:bg-white/5 md:px-8">{questions.map(([question, answer], index) => <div key={question}><button type="button" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index} className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-lg font-bold"><span>{question}</span><ChevronDownIcon className={`h-5 w-5 shrink-0 text-navy-500 transition-transform dark:text-gold ${open === index ? 'rotate-180' : ''}`} /></button><AnimatePresence initial={false}>{open === index && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><p className="max-w-2xl pb-6 text-sm leading-7 text-ink/60 dark:text-white/60">{answer}</p></motion.div>}</AnimatePresence></div>)}</div>;
}