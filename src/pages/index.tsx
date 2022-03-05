import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../components/Form/Input";

type SignInFormData = {
	email: string;
	password: string;
};

const SignInFormSchema = yup.object().shape({
	email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
	password: yup.string().required("Senha obrigatória"),
});

export default function SignIn() {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(SignInFormSchema),
	});

	const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
		console.log(values);
	};

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
				onSubmit={handleSubmit(handleSignIn)}
			>
				<Stack spacing="4">
					<Input
						type="email"
						name="email"
						label="E-mail"
						error={formState.errors.email}
						{...register("email")}
					/>
					<Input
						type="password"
						name="password"
						label="Senha"
						error={formState.errors.password}
						{...register("password")}
					/>
				</Stack>

				<Button
					type="submit"
					colorScheme="pink"
					size="lg"
					mt="6"
					isLoading={formState.isSubmitting}
				>
					Entrar
				</Button>
			</Flex>
		</Flex>
	);
}
