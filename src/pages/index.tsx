import { Button, Flex } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function SignIn() {
	return (
		<Flex w="100vw" h="100vh" align="center" justify="center">
			<Flex
				as="form"
				w="100%"
				maxWidth={360}
				bg="gray.800"
				p={8}
				borderRadius={8}
				flexDir="column"
				gap={4}
			>
				<Input type="email" name="email" label="E-mail" />
				<Input type="password" name="password" label="Senha" />

				<Button type="submit" colorScheme="pink" size="lg" mt={2}>
					Entrar
				</Button>
			</Flex>
		</Flex>
	);
}
