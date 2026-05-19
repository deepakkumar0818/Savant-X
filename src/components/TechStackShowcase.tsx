'use client';

import { useState, useMemo } from 'react';

const softwareTechnologies = [
  { name: 'React', icon: '/images/icons/react1.png' },
  { name: 'Next.js', icon: '/images/icons/nextjs.png' },
  { name: 'TypeScript', icon: '/images/icons/ts1.jpeg' },
  { name: 'Node.js', icon: '/images/icons/nodejs1.png' },
  { name: 'Python', icon: '/images/icons/python1.png' },
  { name: 'AWS', icon: '/images/icons/aws1.png' },
  { name: 'Docker', icon: '/images/icons/docker.png' },
  { name: 'MongoDB', icon: '/images/icons/mongodb.png' },
  { name: 'PostgreSQL', icon: '/images/icons/postgresql.png' },
  { name: 'Redis', icon: '/images/icons/redis.png' },
  { name: 'GraphQL', icon: '/images/icons/Graphql1.png' },
  { name: 'Kubernetes', icon: '/images/icons/kubernatives.png' },
  { name: 'FreeRTOS', icon: '/images/icons/freeRtos.jpeg' },
  { name: 'Git', icon: '/images/icons/github.png' },
  { name: 'TensorFlow', icon: '/images/icons/tensorFlow.jpeg' },
  { name: 'PyTorch', icon: '/images/icons/pytorch.png' },
  { name: 'GenAI', icon: '/images/icons/genai.png' },
  { name: 'Langchain', icon: '/images/icons/langchain.png' },
];

const hardwareTechnologies = [
  { name: 'ESP32', icon: '/images/icons/esp32_1.jpeg' },
  { name: 'Arduino', icon: '/images/icons/ardunio1.png' },
  { name: 'STM32', icon: '/images/icons/stm32.jpeg' },
  { name: 'Raspberry Pi', icon: '/images/icons/raspberrypi.jpeg' },
  { name: 'PIC / AVR', icon: '/images/icons/AVR.png' },
  { name: 'Zephyr RTOS', icon: '/images/icons/Zephyr.jpeg' },
  { name: 'AWS IoT Core', icon: '/images/icons/AwsIot.jpeg' },
  { name: 'Google Cloud IoT', icon: '/images/icons/googleCloud.png' },
  { name: 'KiCAD', icon: '/images/icons/kicad1.png' },
  { name: 'DipTrace', icon: '/images/icons/Diptrace.jpeg' },
  { name: 'SolidWorks', icon: '/images/icons/SolidWorks.png' },
];

function MarqueeRow({ items, durationClass }: { items: { name: string; icon: string }[]; durationClass?: 'slow' }) {
  const doubled = useMemo(() => [...items, ...items], [items]);
  return (
    <div className="relative overflow-hidden py-3">
      <div className={`flex w-max gap-10 sm:gap-14 ${durationClass === 'slow' ? 'animate-marquee-slow' : 'animate-marquee'}`}>
        {doubled.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="group flex w-[100px] shrink-0 flex-col items-center gap-2 text-center sm:w-[112px]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/80 shadow-inner transition duration-300 group-hover:border-indigo-500/50 group-hover:shadow-[0_0_24px_rgba(99,102,241,0.25)] sm:h-14 sm:w-14">
              <img
                src={tech.icon}
                alt=""
                className="max-h-9 max-w-9 object-contain opacity-90 transition duration-300 group-hover:opacity-100 sm:max-h-10 sm:max-w-10"
              />
            </div>
            <span className="text-xs font-medium text-slate-400 transition group-hover:text-slate-200">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStackShowcase() {
  const [expanded, setExpanded] = useState(false);
  const soft = expanded ? softwareTechnologies : softwareTechnologies.slice(0, 12);
  const hard = expanded ? hardwareTechnologies : hardwareTechnologies.slice(0, 8);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-14 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:px-8 lg:px-10 lg:py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59,130,246,0.35), transparent), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(139,92,246,0.2), transparent)',
        }}
      />
      <div className="relative mx-auto max-w-7xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300/90">Technology stack</p>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
          Tools we ship in production
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Cloud, data, firmware, and design—aligned sizing and motion so the grid reads as one system.
        </p>
      </div>

      <div className="relative mx-auto mt-12 max-w-7xl space-y-2">
        <p className="text-center text-xs font-medium uppercase tracking-wider text-slate-500">Software &amp; cloud</p>
        <MarqueeRow items={soft} />
        <p className="pt-4 text-center text-xs font-medium uppercase tracking-wider text-slate-500">Hardware &amp; design</p>
        <MarqueeRow items={hard} durationClass="slow" />
      </div>

      <div className="relative mt-10 flex justify-center">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="rounded-full border border-slate-600 bg-slate-900/80 px-6 py-2.5 text-sm font-medium text-slate-200 shadow-lg transition hover:border-indigo-500/50 hover:text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]"
        >
          {expanded ? 'Show fewer' : 'Show all technologies'}
        </button>
      </div>
    </section>
  );
}
