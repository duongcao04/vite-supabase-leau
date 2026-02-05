import { Footer, Header } from '@/components'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_public')({
	component: PublicLayout,
})

function PublicLayout() {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}
