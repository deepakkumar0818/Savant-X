'use client';

import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';

interface Location {
  id: string;
  name: string;
  address: string;
  timezone: string;
  icon: string;
}

const locations: Location[] = [
  {
    id: 'headquarters',
    name: 'HQ India',
    address: 'Panchanpur, Tekari, Gaya, Bihar, 824236, India',
    timezone: 'Asia/Kolkata',
    icon: 'india'
  },
  {
    id: 'bangalore',
    name: 'Bangalore Office',
    address: 'Whitefield, Bangalore, Karnataka, 560066, India',
    timezone: 'Asia/Kolkata',
    icon: 'india'
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad Office',
    address: 'Hitech City, Hyderabad, Telangana, 500081, India',
    timezone: 'Asia/Kolkata',
    icon: 'india'
  },
  {
    id: 'usa',
    name: 'United States',
    address: '1234 Technology Drive, Suite 500, San Francisco, CA 94105, USA',
    timezone: 'America/Los_Angeles',
    icon: 'usa'
  },
  {
    id: 'canada',
    name: 'Canada',
    address: '456 Innovation Boulevard, Suite 1200, Toronto, ON M5H 2N2, Canada',
    timezone: 'America/Toronto',
    icon: 'canada'
  },
  {
    id: 'uae',
    name: 'United Arab Emirates',
    address: 'Business Bay Tower, Floor 25, Office 2501, Dubai, UAE',
    timezone: 'Asia/Dubai',
    icon: 'uae'
  },
  {
    id: 'nepal',
    name: 'Nepal',
    address: 'Thamel, Kathmandu, Nepal',
    timezone: 'Asia/Kathmandu',
    icon: 'nepal'
  },
  {
    id: 'singapore',
    name: 'Singapore',
    address: 'One Marina Boulevard, Level 15, Singapore 018989',
    timezone: 'Asia/Singapore',
    icon: 'singapore'
  }
];

function getLocalTime(timezone: string): { hours: number; minutes: number; seconds: number; date: string; ampm: string } {
  const now = new Date();
  const timeFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  });
  
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
  
  const timeString = timeFormatter.format(now);
  const parts = timeString.split(' ');
  const ampm = parts[1] || '';
  const [hours, minutes, seconds] = parts[0].split(':').map(Number);
  
  const date = dateFormatter.format(now);
  
  return { hours: hours % 12 || 12, minutes, seconds, date, ampm };
}

function AnalogClock({ timezone }: { timezone: string }) {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState(() => {
    // Initialize with a default time to avoid hydration mismatch
    return { hours: 12, minutes: 0, seconds: 0, date: '', ampm: '' };
  });

  useEffect(() => {
    setMounted(true);
    // Set initial time
    setTime(getLocalTime(timezone));
    
    const interval = setInterval(() => {
      setTime(getLocalTime(timezone));
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  // Don't render clock until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="flex flex-col items-center space-y-2">
        <div className="relative w-20 h-20 mx-auto">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Clock face */}
            <circle cx="50" cy="50" r="45" fill="white" stroke="#e2e8f0" strokeWidth="2" />
            {/* Hour markers */}
            {[12, 3, 6, 9].map((num) => {
              const angle = (num * 30 - 90) * (Math.PI / 180);
              const x = 50 + 35 * Math.cos(angle);
              const y = 50 + 35 * Math.sin(angle);
              return (
                <text
                  key={num}
                  x={x}
                  y={y + 5}
                  textAnchor="middle"
                  fontSize="12"
                  fill="#1e293b"
                  fontWeight="bold"
                >
                  {num}
                </text>
              );
            })}
            {/* Center dot */}
            <circle cx="50" cy="50" r="3" fill="#1e293b" />
          </svg>
        </div>
        <div className="text-center">
          <div className="text-xs font-semibold text-slate-700 mb-1">&nbsp;</div>
          <div className="text-sm font-bold text-blue-600">&nbsp;</div>
        </div>
      </div>
    );
  }

  const hourAngle = (time.hours % 12) * 30 + time.minutes * 0.5;
  const minuteAngle = time.minutes * 6;
  const secondAngle = time.seconds * 6;

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="relative w-20 h-20 mx-auto">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Clock face */}
          <circle cx="50" cy="50" r="45" fill="white" stroke="#e2e8f0" strokeWidth="2" />
          {/* Hour markers */}
          {[12, 3, 6, 9].map((num) => {
            const angle = (num * 30 - 90) * (Math.PI / 180);
            const x = 50 + 35 * Math.cos(angle);
            const y = 50 + 35 * Math.sin(angle);
            return (
              <text
                key={num}
                x={x}
                y={y + 5}
                textAnchor="middle"
                fontSize="12"
                fill="#1e293b"
                fontWeight="bold"
              >
                {num}
              </text>
            );
          })}
          {/* Hour hand */}
          <line
            x1="50"
            y1="50"
            x2={50 + 20 * Math.cos((hourAngle - 90) * (Math.PI / 180))}
            y2={50 + 20 * Math.sin((hourAngle - 90) * (Math.PI / 180))}
            stroke="#1e293b"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Minute hand */}
          <line
            x1="50"
            y1="50"
            x2={50 + 28 * Math.cos((minuteAngle - 90) * (Math.PI / 180))}
            y2={50 + 28 * Math.sin((minuteAngle - 90) * (Math.PI / 180))}
            stroke="#1e293b"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Second hand */}
          <line
            x1="50"
            y1="50"
            x2={50 + 30 * Math.cos((secondAngle - 90) * (Math.PI / 180))}
            y2={50 + 30 * Math.sin((secondAngle - 90) * (Math.PI / 180))}
            stroke="#ef4444"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Center dot */}
          <circle cx="50" cy="50" r="3" fill="#1e293b" />
        </svg>
      </div>
      {/* Date and AM/PM */}
      <div className="text-center">
        <div className="text-xs font-semibold text-slate-700 mb-1">{time.date}</div>
        <div className="text-sm font-bold text-blue-600">{time.ampm}</div>
      </div>
    </div>
  );
}

function LocationIcon({ icon }: { icon: string }) {
  const icons: Record<string, ReactElement> = {
    india: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Taj Mahal style building */}
        <path d="M35 50 L50 30 L65 50 L60 70 L50 75 L40 70 Z" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="45" y="50" width="10" height="20" fill="none" stroke="#2563eb" strokeWidth="2" />
        {/* Side buildings */}
        <rect x="20" y="55" width="15" height="20" fill="none" stroke="#3b82f6" strokeWidth="2" />
        <rect x="65" y="55" width="15" height="20" fill="none" stroke="#3b82f6" strokeWidth="2" />
        <rect x="25" y="60" width="5" height="5" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
        <rect x="70" y="60" width="5" height="5" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
      </svg>
    ),
    usa: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Statue of Liberty */}
        <path d="M50 20 L45 60 L50 80 L55 60 Z" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="50" cy="35" r="4" fill="none" stroke="#2563eb" strokeWidth="2" />
        {/* Building */}
        <rect x="35" y="60" width="30" height="25" fill="none" stroke="#3b82f6" strokeWidth="2" />
        <rect x="40" y="65" width="6" height="6" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
        <rect x="50" y="65" width="6" height="6" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
        <rect x="60" y="65" width="6" height="6" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
      </svg>
    ),
    canada: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* CN Tower style */}
        <rect x="48" y="30" width="4" height="50" fill="none" stroke="#2563eb" strokeWidth="2.5" />
        <path d="M45 30 L50 20 L55 30" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="40" y="50" width="20" height="30" fill="none" stroke="#3b82f6" strokeWidth="2" />
        <rect x="42" y="55" width="5" height="5" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
        <rect x="53" y="55" width="5" height="5" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
      </svg>
    ),
    uae: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Burj Al Arab style */}
        <path d="M50 20 L45 80 L50 85 L55 80 Z" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="40" y="50" width="20" height="30" fill="none" stroke="#3b82f6" strokeWidth="2" />
        <rect x="42" y="55" width="5" height="5" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
        <rect x="53" y="55" width="5" height="5" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
        <rect x="42" y="65" width="5" height="5" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
        <rect x="53" y="65" width="5" height="5" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
      </svg>
    ),
    nepal: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Pagoda style */}
        <path d="M40 50 L50 30 L60 50 L55 70 L50 75 L45 70 Z" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="47" y="50" width="6" height="25" fill="none" stroke="#2563eb" strokeWidth="2" />
        <path d="M35 60 L50 45 L65 60" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    singapore: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Marina Bay Sands style */}
        <rect x="30" y="50" width="8" height="30" fill="none" stroke="#2563eb" strokeWidth="2" />
        <rect x="46" y="50" width="8" height="30" fill="none" stroke="#2563eb" strokeWidth="2" />
        <rect x="62" y="50" width="8" height="30" fill="none" stroke="#2563eb" strokeWidth="2" />
        <path d="M30 50 L46 40 L62 50" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="50" cy="35" r="6" fill="#3b82f6" />
      </svg>
    )
  };

  return <div className="w-16 h-16 mx-auto">{icons[icon] || icons.india}</div>;
}

export default function FooterLocations() {
  return (
    <div className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location) => (
            <div key={location.id} className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center space-y-4">
              {/* Icon */}
              <div className="mb-2">
                <LocationIcon icon={location.icon} />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-slate-900">{location.name}</h3>
              
              {/* Address */}
              <p className="text-sm text-slate-600 leading-relaxed px-2">
                {location.address}
              </p>
              
              {/* Clock */}
              <div className="mt-4">
                <AnalogClock timezone={location.timezone} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

