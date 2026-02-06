import prisma from '@/lib/prisma';
import { queryOptions } from '@tanstack/react-query';

/**
 * TanStack Query options for the RBX product list
 */
export const productOptions = {
	all: () => ['products', 'rbx-series'] as const,
	listOptions: () => queryOptions({
		queryKey: [...productOptions.all(), 'options'],
		queryFn: async () => await prisma.product.findMany(),
		// Technical specifications are static; cache for 24 hours
		staleTime: 1000 * 60 * 60 * 24,
	}),
};