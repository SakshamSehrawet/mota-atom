"use client";
import { useEffect, useState, ReactNode } from "react";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  BookmarkIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface BottomBarButtonProps {
  value: string;
  tooltip: string;
  icon: ReactNode;
  isActive: boolean;
}
function BottomBarButton({ tooltip, value, icon, isActive }: BottomBarButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <TabsTrigger
            value={value}
            className={`inline-flex flex-col items-center bg-transparent rounded-none justify-center m-0 p-4 ${
              isActive
                ? "bg-primary dark:bg-primary mr-2 ml-2 pr-0 pl-0"
                : "hover:bg-secondary dark:hover:bg-secondary"
            } group`}
          >
            <div
              className={`w-5 h-5 ${
                isActive
                  ? "text-white dark:text-black"
                  : ""
              }`}
            >
              {icon}
            </div>
          </TabsTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

const iconMappings: { [key: string]: { tooltip: string; icon: ReactNode; content: ReactNode }[] } = {
  "/": [],
  "/weight": [
    { tooltip: "Home", icon: <HomeIcon />, content: <div>Home Content</div> },
    { tooltip: "Bookmark", icon: <BookmarkIcon />, content: <div>Bookmark Content</div> },
  ],
  "/contests": [
    { tooltip: "Search", icon: <SearchIcon />, content: <div>Search Content</div> },
    { tooltip: "Settings", icon: <SettingsIcon />, content: <div>Settings Content</div> },
    { tooltip: "Home", icon: <HomeIcon />, content: <div>Home Content</div> },
    { tooltip: "Settings", icon: <SettingsIcon />, content: <div>Settings Content</div> },
    { tooltip: "Home", icon: <HomeIcon />, content: <div>Home Content</div> },
  ],
  "/dashboard": [
    { tooltip: "Bookmark", icon: <BookmarkIcon />, content: <div>Bookmark Content</div> },
    { tooltip: "Plus", icon: <PlusIcon />, content: <div>Plus Content</div> },
    { tooltip: "Search", icon: <SearchIcon />, content: <div>Search Content</div> },
  ],
  "/settings": [
    { tooltip: "Settings", icon: <SettingsIcon />, content: <div>Settings Content</div> },
    { tooltip: "Home", icon: <HomeIcon />, content: <div>Home Content</div> },
    { tooltip: "Bookmark", icon: <BookmarkIcon />, content: <div>Bookmark Content</div> },
  ],
};

export default function BottomBar() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveTab(pathname);
    }
  }, [pathname]);

  const currentIcons = iconMappings[pathname] || [];
  const numOfCols = currentIcons.length;

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="bg-transparent border-0 rounded-none">
      <div className="pb-20">
        {currentIcons.map(({ content }, index) => (
          <TabsContent key={index} value={`${pathname}-${index}`}>
            {content}
          </TabsContent>
        ))}
      </div>

      {currentIcons.length > 0 && (
        <div className="fixed bottom-0 z-50 w-full -translate-x-1/2 left-1/2 ">
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
