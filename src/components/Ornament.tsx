export function DiamondRule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden>
      <span className="gold-line flex-1" />
      <svg width="12" height="12" viewBox="0 0 12 12" className="text-gold">
        <path d="M6 0 L12 6 L6 12 L0 6 Z" fill="currentColor" opacity="0.9" />
      </svg>
      <span className="gold-line flex-1" />
    </div>
  );
}

export function CrestMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      fill="none"
      aria-hidden
    >
      <circle cx="40" cy="40" r="36" stroke="#c9a36a" strokeWidth="1" />
      <circle cx="40" cy="40" r="32" stroke="#c9a36a" strokeWidth="0.5" opacity="0.6" />
      <path
        d="M40 18 C28 28 26 42 40 58 C54 42 52 28 40 18 Z"
        stroke="#e0c48a"
        strokeWidth="1.2"
        fill="rgba(201,163,106,0.08)"
      />
      <path
        d="M40 26 C34 32 34 40 40 48 C46 40 46 32 40 26 Z"
        fill="#c9a36a"
        opacity="0.85"
      />
      <circle cx="40" cy="34" r="2" fill="#f3e6d0" />
    </svg>
  );
}

export function RoseKeyMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 190"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="A simple rose and key emblem"
    >
      <path
        d="M80 22 C67 11 49 21 45 34 C29 34 23 52 33 65 C29 82 47 94 62 91 C72 103 89 103 99 91 C115 94 131 82 127 66 C140 51 129 34 114 32 C108 17 92 13 80 22 Z"
        fill="currentColor"
        fillOpacity="0.04"
      />
      <path d="M45 34 C40 52 46 67 64 69 M114 32 C119 48 113 61 97 67" />
      <path d="M33 65 C45 64 57 76 62 91 M127 66 C111 65 103 77 99 91" />
      <path d="M64 56 C58 39 76 28 89 40 C103 45 96 65 82 66 C69 66 65 54 78 48 C88 43 94 51 88 57" />
      <path d="M62 69 C71 82 88 84 101 70 M80 22 C79 29 82 35 89 40" />
      <path d="M80 102 V173 M80 145 H100 V154 H91 V163 H105 V173 H80" />
      <path d="M74 112 H86 M74 118 H86" opacity="0.65" />
    </svg>
  );
}

export function CornerFlourishes() {
  return (
    <>
      <svg
        className="pointer-events-none absolute left-3 top-3 h-10 w-10 text-gold/50 sm:left-5 sm:top-5"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden
      >
        <path d="M1 39 V12 C1 4 4 1 12 1 H39" stroke="currentColor" strokeWidth="0.8" />
        <path d="M6 39 V16 C6 9 9 6 16 6 H39" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
      </svg>
      <svg
        className="pointer-events-none absolute right-3 top-3 h-10 w-10 text-gold/50 sm:right-5 sm:top-5"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden
      >
        <path d="M39 39 V12 C39 4 36 1 28 1 H1" stroke="currentColor" strokeWidth="0.8" />
        <path d="M34 39 V16 C34 9 31 6 24 6 H1" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
      </svg>
      <svg
        className="pointer-events-none absolute bottom-3 left-3 h-10 w-10 text-gold/50 sm:bottom-5 sm:left-5"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden
      >
        <path d="M1 1 V28 C1 36 4 39 12 39 H39" stroke="currentColor" strokeWidth="0.8" />
        <path d="M6 1 V24 C6 31 9 34 16 34 H39" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
      </svg>
      <svg
        className="pointer-events-none absolute bottom-3 right-3 h-10 w-10 text-gold/50 sm:bottom-5 sm:right-5"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden
      >
        <path d="M39 1 V28 C39 36 36 39 28 39 H1" stroke="currentColor" strokeWidth="0.8" />
        <path d="M34 1 V24 C34 31 31 34 24 34 H1" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
      </svg>
    </>
  );
}
