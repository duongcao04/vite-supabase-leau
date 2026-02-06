import { queryOptions } from "@tanstack/react-query"
import prisma from "../../prisma"

export const categoriesListOptions = () => queryOptions({
	queryKey: ['categories'],
	queryFn: () => prisma.category.findMany({
		where: { parentId: null },
		include: { children: { select: { id: true, name: true } } },
		orderBy: { name: 'asc' }
	}),
})