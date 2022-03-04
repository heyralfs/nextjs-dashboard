import { Stack } from "@chakra-ui/react";
import {
	RiContactsLine,
	RiDashboardLine,
	RiGitMergeLine,
	RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
	return (
		<Stack spacing="12" align="flex-start">
			<NavSection title="GERAL">
				<Stack spacing="4" mt="8" align="stretch">
					<NavLink icon={RiDashboardLine}>Dashobard</NavLink>
					<NavLink icon={RiContactsLine}>Usuários</NavLink>
				</Stack>
			</NavSection>

			<NavSection title="AUTOMAÇÃO">
				<Stack spacing="4" mt="8" align="stretch">
					<NavLink icon={RiInputMethodLine}>Formulários</NavLink>
					<NavLink icon={RiGitMergeLine}>Automação</NavLink>
				</Stack>
			</NavSection>
		</Stack>
	);
}
