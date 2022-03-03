import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
	return (
		<Flex align="center">
			<Box mr="4" textAlign="right">
				<Text>Ralf Oliveira</Text>
				<Text color="gray.300" fontSize="sm">
					ralfoliveira@gmail.com
				</Text>
			</Box>

			<Avatar
				size="md"
				name="Ralf Olvieira"
				src="https://github.com/heyralfs.png"
			/>
		</Flex>
	);
}
