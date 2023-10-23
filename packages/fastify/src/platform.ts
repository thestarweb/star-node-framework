import Fastify, { FastifyInstance } from 'fastify';

abstract class IPlatform {
	constructor() {}
}

export class FastifyPlatform implements IPlatform {
	#fastify: FastifyInstance;
	constructor() {
		this.#fastify = Fastify({});
		this.#fastify.all('*', async (req, res) => {
			console.log(req);
			res.send('');
		});
	}
	public listen(port: number) {
		this.#fastify.listen({ port });
	}
}
