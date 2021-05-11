// bootstrap 4 breakpoints
export const xl = { start: 1200 } as const;
export const lg = { start: 992, end: xl.start - 1 } as const;
export const md = { start: 768, end: lg.start - 1 } as const;
export const sm = { start: 576, end: md.start - 1 } as const;
export const xs = { end: sm.start - 1 } as const;
