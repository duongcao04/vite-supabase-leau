import { queryOptions } from "@tanstack/react-query";
import prisma from "../../prisma";

export const brandsListOptions = () => queryOptions({
	queryKey: ['brands'],
	queryFn: () => prisma.brand.findMany({
		select: { id: true, name: true },
		orderBy: { name: 'asc' }
	}),
})