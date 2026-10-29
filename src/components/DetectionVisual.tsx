// Stylised "labeling session" for the hero: abstract field scene with boxes that draw in,
// echoing the Smart Labeler's resolve / defer triage.

const boxes = [
  { x: 52, y: 150, w: 128, h: 96, label: 'deer · 0.94', state: 'resolved', delay: 0.3 },
  { x: 214, y: 112, w: 92, h: 72, label: 'deer · 0.88', state: 'resolved', delay: 0.9 },
  { x: 300, y: 214, w: 74, h: 58, label: 'deferred → human', state: 'deferred', delay: 1.5 },
];

const DetectionVisual = () => (
  <figure className="relative overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/20">
    <div className="flex items-center justify-between border-b border-line px-4 py-2.5 font-mono text-[11px] text-muted">
      <span className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-accent" />
        smart-labeler / batch 05
      </span>
      <span className="hidden sm:inline">SAM3 · OWLv2 · DINOv3</span>
    </div>

    <svg viewBox="0 0 420 320" className="block w-full" role="img" aria-label="Illustration of an image being auto-labeled with bounding boxes">
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="var(--line)" strokeWidth="0.6" />
        </pattern>
        <linearGradient id="scan" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="var(--accent)" stopOpacity="0" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="420" height="320" fill="url(#grid)" />

      {/* Terrain */}
      <path d="M0 250 C 80 225, 150 262, 230 240 S 360 228, 420 246 V320 H0Z" fill="var(--surface-2)" />
      <path d="M0 280 C 100 268, 190 292, 300 276 S 400 270, 420 280 V320 H0Z" fill="var(--line)" opacity="0.6" />

      {/* Subjects, drawn as simple silhouettes */}
      <g fill="var(--muted)" opacity="0.55">
        <ellipse cx="116" cy="204" rx="44" ry="22" />
        <circle cx="160" cy="176" r="13" />
        <rect x="88" y="214" width="6" height="28" rx="2" />
        <rect x="134" y="214" width="6" height="28" rx="2" />
        <ellipse cx="258" cy="152" rx="30" ry="15" />
        <circle cx="287" cy="132" r="9" />
        <rect x="240" y="160" width="4" height="20" rx="2" />
        <rect x="268" y="160" width="4" height="20" rx="2" />
        <ellipse cx="336" cy="246" rx="24" ry="14" />
      </g>

      <rect className="scan-line" x="0" y="0" width="420" height="20" fill="url(#scan)" />

      {boxes.map((b) => {
        const color = b.state === 'deferred' ? '#f5b84a' : 'var(--accent)';
        return (
          <g key={b.label}>
            <rect
              className="det-box"
              style={{ animationDelay: `${b.delay}s` }}
              x={b.x}
              y={b.y}
              width={b.w}
              height={b.h}
              rx="3"
              fill="none"
              stroke={color}
              strokeWidth="2"
              strokeDasharray={b.state === 'deferred' ? '6 4' : undefined}
            />
            <g className="det-label" style={{ animationDelay: `${b.delay + 0.8}s` }}>
              <rect x={b.x} y={b.y - 18} width={b.label.length * 6.4 + 12} height="16" rx="2" fill={color} />
              <text x={b.x + 6} y={b.y - 6.5} fontSize="10" fontFamily="JetBrains Mono, monospace" fill="#0a0d12">
                {b.label}
              </text>
            </g>
          </g>
        );
      })}
    </svg>

    <figcaption className="grid grid-cols-3 border-t border-line font-mono text-[11px]">
      <span className="border-r border-line px-4 py-2.5 text-muted">
        resolved <span className="text-accent">2</span>
      </span>
      <span className="border-r border-line px-4 py-2.5 text-muted">
        cleared <span className="text-fg">0</span>
      </span>
      <span className="px-4 py-2.5 text-muted">
        deferred <span className="text-[#f5b84a]">1</span>
      </span>
    </figcaption>
  </figure>
);

export default DetectionVisual;
