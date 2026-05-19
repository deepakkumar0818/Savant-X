'use client';

function IsoCube({
  x,
  y,
  size = 56,
  tone,
  blur = false,
}: {
  x: number;
  y: number;
  size?: number;
  tone: 'white' | 'indigo' | 'blue' | 'glass';
  blur?: boolean;
}) {
  const w = size;
  const h = size * 0.58;
  const d = size * 0.52;
  const top = `${x},${y + d * 0.5} ${x + w},${y} ${x + w + d},${y + d * 0.5} ${x + d},${y + d}`;

  const palette = {
    white: { left: '#f8fafc', right: '#e2e8f0', top: '#ffffff', stroke: '#cbd5e1' },
    indigo: { left: '#6366f1', right: '#4f46e5', top: '#818cf8', stroke: '#4338ca' },
    blue: { left: '#3b82f6', right: '#2563eb', top: '#60a5fa', stroke: '#1d4ed8' },
    glass: { left: 'rgba(255,255,255,0.35)', right: 'rgba(224,231,255,0.25)', top: 'rgba(255,255,255,0.6)', stroke: '#c7d2fe' },
  }[tone];

  return (
    <g style={blur ? { filter: 'blur(2px)', opacity: 0.88 } : undefined}>
      <polygon points={top} fill={palette.top} stroke={palette.stroke} strokeWidth="1" />
      <polygon
        points={`${x},${y + d * 0.5} ${x + d},${y + d} ${x + d},${y + d + h} ${x},${y + d * 0.5 + h}`}
        fill={palette.left}
        stroke={palette.stroke}
        strokeWidth="1"
      />
      <polygon
        points={`${x + d},${y + d} ${x + w + d},${y + d * 0.5} ${x + w + d},${y + d * 0.5 + h} ${x + d},${y + d + h}`}
        fill={palette.right}
        stroke={palette.stroke}
        strokeWidth="1"
      />
    </g>
  );
}

function CubeIcon({ cx, cy, type, light = false }: { cx: number; cy: number; type: 'db' | 'lock' | 'layers' | 'eye' | 'wave' | 'inf'; light?: boolean }) {
  const stroke = light ? '#fff' : '#4338ca';
  const sw = 1.5;
  switch (type) {
    case 'db':
      return (
        <g stroke={stroke} strokeWidth={sw} fill="none">
          <ellipse cx={cx} cy={cy - 4} rx="8" ry="3" />
          <path d={`M${cx - 8} ${cy - 4} v8 c0 1.7 3.6 3 8 3s8-1.3 8-3v-8`} />
        </g>
      );
    case 'lock':
      return (
        <g stroke={stroke} strokeWidth={sw} fill="none">
          <rect x={cx - 6} y={cy - 2} width="12" height="9" rx="1" />
          <path d={`M${cx - 4} ${cy - 2} V${cy - 6} a4 4 0 0 1 8 0 v4`} />
        </g>
      );
    case 'layers':
      return (
        <g stroke={stroke} strokeWidth={sw} fill="none">
          <path d={`M${cx} ${cy - 8} l10 5-10 5-10-5z`} />
          <path d={`M${cx} ${cy + 2} l10 5-10 5-10-5z`} opacity="0.7" />
        </g>
      );
    case 'eye':
      return (
        <g stroke={stroke} strokeWidth={sw} fill="none">
          <path d={`M${cx - 10} ${cy} q10-6 20 0 q-10 6-20 0`} />
          <circle cx={cx} cy={cy} r="2.5" fill={stroke} />
        </g>
      );
    case 'wave':
      return (
        <path d={`M${cx - 10} ${cy} q5-6 10 0 t10 0`} stroke={stroke} strokeWidth={sw} fill="none" />
      );
    case 'inf':
      return (
        <path
          d={`M${cx + 6} ${cy} a6 6 0 1 0-12 0 a6 6 0 0 1 12 0`}
          stroke={stroke}
          strokeWidth={sw}
          fill="none"
        />
      );
  }
}

export default function WorkHeroIsometric() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full text-indigo-300/55"
        viewBox="0 0 480 480"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        aria-hidden
      >
        <circle cx="280" cy="200" r="190" stroke="currentColor" strokeWidth="1" />
        <circle cx="320" cy="260" r="230" stroke="currentColor" strokeWidth="1" opacity="0.55" />
        <line x1="360" y1="8" x2="360" y2="472" stroke="#6366f1" strokeWidth="2.5" opacity="0.4" />
        <line x1="408" y1="48" x2="408" y2="432" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      </svg>

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 480 480"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        aria-hidden
      >
        <g transform="translate(-12, -8) scale(1.22)">
          <IsoCube x={130} y={125} size={74} tone="white" />
          <CubeIcon cx={195} cy={168} type="db" />
          <IsoCube x={198} y={108} size={62} tone="glass" blur />
          <CubeIcon cx={248} cy={148} type="layers" />
          <IsoCube x={248} y={158} size={78} tone="indigo" />
          <CubeIcon cx={310} cy={210} type="lock" light />
          <IsoCube x={172} y={198} size={66} tone="blue" />
          <CubeIcon cx={228} cy={248} type="eye" light />
          <IsoCube x={252} y={212} size={58} tone="white" />
          <IsoCube x={298} y={178} size={54} tone="glass" blur />
          <IsoCube x={212} y={58} size={34} tone="white" />
          <IsoCube x={228} y={328} size={38} tone="indigo" />
          <CubeIcon cx={258} cy={362} type="wave" light />
          <IsoCube x={352} y={238} size={36} tone="blue" />
          <CubeIcon cx={378} cy={268} type="inf" light />
        </g>
      </svg>
    </div>
  );
}
