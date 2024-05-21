"use client"
import { useEffect, useState, ReactNode, Suspense } from "react";
import { usePathname } from "next/navigation";
import BottomBarButton from "@/components/bottom-bar/BottomBarButton"
import {
	Tabs,
	TabsList,
	TabsContent,
  } from "@/components/ui/tabs";
  
interface BottomBarProps { barMappings : { tooltip: string; icon: ReactNode; content: ReactNode }[] }

export default function BottomBar({ barMappings }: BottomBarProps) {
	const pathname = usePathname();
	const [activeTab, setActiveTab] = useState<string>("");
  
	useEffect(() => {
	  if (typeof window !== "undefined") {
		setActiveTab(pathname);
	  }
	}, [pathname]);
  
	const currentIcons = barMappings;
	const numOfCols = currentIcons.length;
  
	return (
	  <Tabs value={activeTab} onValueChange={setActiveTab} className="bg-transparent border-0 rounded-none">
		<div className="pb-20 items-center ">
		  {currentIcons.map(({ content }, index) => (
			<TabsContent key={index} value={`${pathname}-${index}`}>
			  {content}
			</TabsContent>
		  ))}
		</div>
  
		{currentIcons.length > 0 && (
		  <div className="frosted fixed left-1/2 bottom-0 z-50 flex h-24 w-11/12 min-w-[350px] shrink-0 -translate-x-1/2 transform items-center gap-3 pb-0 pt-4 shadow-lg backdrop-blur-lg sm:w-full md:w-11/12 lg:w-2/3 xl:w-1/2">
			<div className="w-full">
			  <TabsList
				className="grid h-full mx-auto"
				style={{ gridTemplateColumns: `repeat(${numOfCols}, minmax(0, 1fr))` }}
			  >
				{currentIcons.map(({ tooltip, icon }, index) => (
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
  