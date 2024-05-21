import { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TabsTrigger } from "../ui/tabs";

interface BottomBarButtonProps {
  value: string;
  tooltip: string;
  icon: ReactNode;
  isActive: boolean;
}
function BottomBarButton({
  tooltip,
  value,
  icon,
  isActive,
}: BottomBarButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <TabsTrigger
            value={value}
            className={`m-0 inline-flex flex-col items-center justify-center rounded-none bg-transparent p-4 ${
              isActive
                ? "ml-2 mr-2 bg-primary pl-0 pr-0 dark:bg-primary"
                : "hover:bg-secondary dark:hover:bg-secondary"
            } group`}
          >
            <div
              className={`h-5 w-5 ${
                isActive ? "text-white dark:text-black" : ""
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
export default BottomBarButton;