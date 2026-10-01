import './DnaHelix.css';

/* ============================================
   DnaHelix — decorative animated double helix
   Pure SVG + CSS, zero assets. Theme-aware via
   --color-primary (light/dark). Display only.
   ============================================ */

const W = 200;
const H = 460;
const MID = W / 2;
const AMP = 46;
const TURNS = 4;
const SAMPLES = 96;

const sinX = (y: number, phase: number) =>
  MID + AMP * Math.sin((y / H) * TURNS * Math.PI * 2 + phase);

function strandPath(phase: number): string {
  const pts: string[] = [];
  for (let i = 0; i <= SAMPLES; i++) {
    const y = (i / SAMPLES) * H;
    pts.push(`${i === 0 ? 'M' : 'L'}${sinX(y, phase).toFixed(1)} ${y.toFixed(1)}`);
  }
  return pts.join(' ');
}

/* Base-pair rungs — skip near crossing points where strands touch */
const RUNG_COUNT = 17;
const rungs = Array.from({ length: RUNG_COUNT - 1 }, (_, idx) => {
  const y = ((idx + 1) / RUNG_COUNT) * H;
  const x1 = sinX(y, 0);
  const x2 = sinX(y, Math.PI);
  return { y, x1, x2 };
}).filter((r) => Math.abs(r.x1 - r.x2) > 14);

/* Floating nucleotide dots around the helix */
const dots = [
  { cx: 26, cy: 70, r: 3.2, delay: '0s' },
  { cx: 176, cy: 150, r: 2.6, delay: '1.4s' },
  { cx: 18, cy: 300, r: 2.4, delay: '2.6s' },
  { cx: 184, cy: 390, r: 3, delay: '0.8s' },
];

export default function DnaHelix() {
  const strandA = strandPath(0);
  const strandB = strandPath(Math.PI);

  return (
    <div className="dna-helix" aria-hidden="true">
      <svg
        className="dna-svg"
        viewBox={`0 0 ${W} ${H}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base-pair rungs */}
        <g className="dna-rungs">
          {rungs.map((r, i) => (
            <line
              key={r.y}
              className="dna-rung"
              x1={r.x1.toFixed(1)}
              y1={r.y.toFixed(1)}
              x2={r.x2.toFixed(1)}
              y2={r.y.toFixed(1)}
              style={{ animationDelay: `${(i % 6) * 0.35}s` }}
            />
          ))}
        </g>

        {/* Two backbone strands */}
        <path className="dna-strand" d={strandA} />
        <path className="dna-strand" d={strandB} />
        <path className="dna-flow" d={strandA} />
        <path className="dna-flow dna-flow-b" d={strandB} />

        {/* Drifting nucleotide dots */}
        <g className="dna-dots">
          {dots.map((d) => (
            <circle
              key={`${d.cx}-${d.cy}`}
              className="dna-dot"
              cx={d.cx}
              cy={d.cy}
              r={d.r}
              style={{ animationDelay: d.delay }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
