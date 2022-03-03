import { Box, Text } from "@chakra-ui/react";

interface NavSectionProps {
	title: string;
	children: React.ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
	return (
		<Box>
			<Text fontWeight="bold" color="gray.400" fontSize="sm">
				{title}
			</Text>

			{children}
		</Box>
	);
}
