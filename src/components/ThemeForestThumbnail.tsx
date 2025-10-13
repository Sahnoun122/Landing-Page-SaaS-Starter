
import { LucideLayoutDashboard, LucideUsers, LucideDollarSign } from "lucide-react";

export default function ThemeForestThumbnail() {
	// Aucun rendu dynamique, tout est statique pour SSR
	return (
		<div className="relative w-[1200px] h-[900px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 via-violet-100 to-indigo-200 border border-gray-200 shadow-2xl flex flex-col">
			{/* Grid background */}
			<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.03)1px,transparent 1px),linear-gradient(rgba(0,0,0,0.03)1px,transparent 1px)] bg-[size:40px_40px] pointer-events-none" />
			{/* Logo & Title */}
			<div className="flex items-center gap-4 px-12 pt-10">
				<div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-500 to-violet-500 flex items-center justify-center shadow-lg">
					<span className="text-white text-2xl font-bold">S</span>
				</div>
				<div>
					<h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
						<span className="text-blue-600">Tailwind CSS</span> SaaS Landing Page Starter
					</h1>
					<p className="text-lg text-gray-500 mt-2">Multipurpose, Modern & Professional</p>
				</div>
			</div>
			{/* Features List */}
			<div className="absolute left-12 top-44 flex flex-col gap-4 z-10">
				<div className="flex items-center gap-2 text-lg font-semibold text-gray-700">
					<span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">40+ Pages</span>
					<span className="ml-2">Ready to use</span>
				</div>
				<div className="flex items-center gap-2 text-lg font-semibold text-gray-700">
					<span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full">120+ Sections</span>
					<span className="ml-2">Modular & Flexible</span>
				</div>
				<div className="flex items-center gap-2 text-lg font-semibold text-gray-700">
					<span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">Startup Ready</span>
					<span className="ml-2">Built for SaaS & Agencies</span>
				</div>
			</div>
			{/* Mockup Cards */}
			<div className="absolute right-10 top-36 flex gap-8 z-10">
				{/* Dashboard */}
				<div className="w-[320px] h-[200px] rounded-xl bg-white/80 shadow-lg border border-gray-200 flex flex-col items-start p-6 rotate-[-6deg]">
					<LucideLayoutDashboard className="w-8 h-8 text-blue-600 mb-2" />
					<span className="text-lg font-bold text-gray-800">Dashboard</span>
					<span className="text-sm text-gray-500 mt-1">Analytics, KPIs, Activity</span>
				</div>
				{/* Team */}
				<div className="w-[320px] h-[200px] rounded-xl bg-white/80 shadow-lg border border-gray-200 flex flex-col items-start p-6 rotate-[4deg]">
					<LucideUsers className="w-8 h-8 text-violet-600 mb-2" />
					<span className="text-lg font-bold text-gray-800">Team</span>
					<span className="text-sm text-gray-500 mt-1">Members, Roles, Permissions</span>
				</div>
				{/* Pricing */}
				<div className="w-[320px] h-[200px] rounded-xl bg-white/80 shadow-lg border border-gray-200 flex flex-col items-start p-6 rotate-[-2deg]">
					<LucideDollarSign className="w-8 h-8 text-indigo-600 mb-2" />
					<span className="text-lg font-bold text-gray-800">Pricing</span>
					<span className="text-sm text-gray-500 mt-1">Plans, Comparison, CTA</span>
				</div>
			</div>
			{/* Badges */}
			<div className="absolute left-12 bottom-16 flex gap-4">
				<span className="px-4 py-2 rounded-full bg-blue-500 text-white font-bold shadow">Tailwind CSS 4</span>
				<span className="px-4 py-2 rounded-full bg-gray-900 text-white font-bold shadow">Next.js 14</span>
				<span className="px-4 py-2 rounded-full bg-violet-500 text-white font-bold shadow">TypeScript</span>
			</div>
			{/* Glow effects */}
			<div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute left-0 top-0 w-80 h-80 bg-violet-400/20 rounded-full blur-3xl pointer-events-none" />
		</div>
	);
}
