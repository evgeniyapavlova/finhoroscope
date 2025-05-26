export const prerender = true;

export const load = ({ params: { sign } }) => {
	return { sign };
};
