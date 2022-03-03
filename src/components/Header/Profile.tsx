import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
	showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
	return (
		<Flex align="center">
			{showProfileData && (
				<Box mr="4" textAlign="right">
					<Text>Ralf Oliveira</Text>
					<Text color="gray.300" fontSize="sm">
						ralfoliveira@gmail.com
					</Text>
				</Box>
			)}

			<Avatar
				size="md"
				name="Ralf Olvieira"
				src="https://github.com/heyralfs.png"
			/>
		</Flex>
	);
}
