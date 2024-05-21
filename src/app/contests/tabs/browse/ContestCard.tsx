import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Lock,
  LockOpen,
  UserRoundCog,
  FileClock,
  ShieldCheck,
  ShieldBan,
  CalendarIcon,
  MoveRight,
} from "lucide-react";
import { Contest } from "@prisma/client";
import { avatarPlaceholder, relativeDate } from "@/lib/utils";
import Link from "next/link";

interface ContestCardProps {
  contest: Contest;
}

const truncateText = (text: string, length: number) => {
  return text.length > length ? `${text.substring(0, length)}...` : text;
};

const ContestCard = ({ contest }: ContestCardProps) => {
  const truncatedDescription = truncateText(
    contest.description ||
      "Spooky! This contest is so mysterious, even we don't know what it's about!",
    100,
  );

  return (
    <Link href={`/contests/${contest.id}`} className="block">
      <Card className="dark:bg-default-100/50 dark:hover:bg-default-100/80 flex min-w-96 flex-col justify-between border-none bg-background/50 hover:bg-background/80">
        <article className="flex flex-grow flex-col">
          <div className="hidden shrink-0 flex-col items-end justify-start pr-2 pt-2 sm:flex">
            <Badge>{contest.type}</Badge>
          </div>
          <CardHeader className="gap-3 pt-0">
            <div className="flex flex-row gap-3">
              <div className="flex-shrink-0">
                <Image
                  src={
                    contest.logo ||
                    avatarPlaceholder(`${contest.title}${contest.admin}`)
                  }
                  alt={`${contest.admin} logo`}
                  width={100}
                  height={100}
                  className="self-center rounded-lg"
                />
              </div>
              <div className="flex-row self-center">
                <h2 className="text-xl font-medium">{contest.title}</h2>
                <p className="flex items-center gap-1.5 text-lg text-muted-foreground">
                  <UserRoundCog size={20} className="shrink-0" />
                  {contest.admin}
                </p>
              </div>
            </div>
            <div className="flex max-h-14 min-h-14 flex-row self-center">
              <p className="self-center text-center opacity-80">
                {truncatedDescription}
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex space-y-3">
              <div className="flex-grow text-muted-foreground">
                <p className="flex items-center gap-1.5 sm:hidden">
                  {contest.type === "math" ? (
                    <ShieldCheck size={16} className="shrink-0" />
                  ) : (
                    <ShieldBan size={16} className="shrink-0" />
                  )}
                  {contest.type}
                </p>
                <p className="flex items-center gap-1.5">
                  {contest.needApproval ? (
                    <Lock size={16} className="shrink-0" />
                  ) : (
                    <LockOpen size={16} className="shrink-0" />
                  )}
                  <span className="rounded border bg-muted px-2 py-0.5 text-sm font-medium text-muted-foreground">
                    {contest.needApproval ? (
                      <span className="text-orange-500">
                        Admin approval required
                      </span>
                    ) : (
                      <span className="text-green-500">
                        Admin approval not required
                      </span>
                    )}
                  </span>
                </p>
                <p className="flex items-center gap-1.5 sm:hidden">
                  <FileClock size={16} className="shrink-0" />
                  {relativeDate(contest.createdAt)}
                </p>
              </div>
              <div className="hidden shrink-0 flex-row items-end sm:flex">
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <FileClock size={16} />
                  {relativeDate(contest.createdAt)}
                </span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="mt-auto flex items-center justify-between border-t border-gray-200 p-6 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {contest.start.toLocaleDateString()} -{" "}
                {contest.end.toLocaleDateString()}
              </span>
            </div>
            <span className="flex items-center gap-2 text-xl">
              Join
              <MoveRight className="h-4 w-4" />
            </span>
          </CardFooter>
        </article>
      </Card>
    </Link>
  );
};

export default ContestCard;
