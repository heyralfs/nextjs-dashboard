import { createServer, Factory, Model } from "miragejs";
import faker from "faker";

type User = {
	name: string;
	email: string;
	created_at: string;
};

export function makeServer() {
	const server = createServer({
		models: {
			user: Model.extend<Partial<User>>({}),
		},

		factories: {
			user: Factory.extend({
				name(i: number) {
					return `User ${i + 1}`;
				},
				email() {
					return faker.internet.email().toLowerCase();
				},
				createdAt() {
					return faker.date.recent(10);
				},
			}),
		},

		seeds(server) {
			server.createList("user", 200); // creates 200 users based on "user factory"
		},

		routes() {
			this.namespace = "api";
			this.timing = 750; // delay in milliseconds

			// mirageJS shorthands (see documentation):
			this.get("/users");
			this.post("/users");

			this.namespace = "";
			this.passthrough();
		},
	});

	return server;
}
