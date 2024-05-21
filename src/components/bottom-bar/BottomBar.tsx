"use client";
import { useEffect, useState, ReactNode } from "react";
import { usePathname } from "next/navigation";
import BottomBarButton from "@/components/bottom-bar/BottomBarButton";
import { Tabs, TabsList, TabsContent } from "@/components/ui/tabs";

interface BottomBarProps {
    barMappings: { tooltip: string; icon: ReactNode; content: ReactNode }[];
}

export default function BottomBar({ barMappings }: BottomBarProps) {
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState<string>("");

    useEffect(() => {
		if (barMappings.length > 0) {
			setActiveTab(`${pathname}-0`); // Set the default active tab to the first item
		}
    }, [pathname, barMappings]);

    const numOfCols = barMappings.length;

    return (
		<Tabs
			value={activeTab}
			onValueChange={setActiveTab}
			className="rounded-none border-0 bg-transparent"
		>
			<div className="items-center pb-20">
			{barMappings.map(({ content }, index) => (
				<TabsContent key={index} value={`${pathname}-${index}`}>
				{content}
				</TabsContent>
			))}
			</div>

			{numOfCols > 0 && (
			<div className="frosted fixed bottom-0 left-1/2 z-50 flex h-auto w-11/12 min-w-[350px] shrink-0 -translate-x-1/2 transform items-center gap-3 pb-0 pt-4 sm:w-full md:w-11/12 lg:w-2/3 xl:w-1/2">
				<div className="w-full">
				<TabsList
					className="mx-auto grid h-full"
					style={{
					gridTemplateColumns: `repeat(${numOfCols}, minmax(0, 1fr))`,
					}}
				>
					{barMappings.map(({ tooltip, icon }, index) => (
					<BottomBarButton
						key={index}
						tooltip={tooltip}
						value={`${pathname}-${index}`}
						icon={icon}
						isActive={activeTab === `${pathname}-${index}`}
					/>
					))}
				</TabsList>
				</div>
			</div>
			)}
		</Tabs>
    );
}
