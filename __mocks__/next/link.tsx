// Prevent act() error logs from Link
// TODO: clean up when fixed: https://github.com/vercel/next.js/pull/20169
const Link = (props: { children: unknown }): unknown => props.children;

export default Link;
