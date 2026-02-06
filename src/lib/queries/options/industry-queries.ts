import { queryOptions } from "@tanstack/react-query";
import prisma from "../../prisma";

export const industriesListOptions = () => queryOptions({
	queryKey: ['industries'],
	queryFn: () => prisma.industry.findMany({
		select: { id: true, name: true },
		orderBy: { name: 'asc' }
	}),
})