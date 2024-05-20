import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lock, LockOpen, UserRoundCog, Clock2, Clock4, FileClock, ShieldCheck, ShieldBan } from 'lucide-react';
import { Contest } from '@prisma/client';
import { avatarPlaceholder, relativeDate } from "@/lib/utils";

interface ContestCardProps {
  contest: Contest;
}
const ContestCard = ({ contest } : ContestCardProps) => {
  return (
    <Card
      className="border-none bg-background/60 hover:bg-background/80 dark:bg-default-100/50 dark:hover:bg-default-100/80"
    >
      <article>
        <CardHeader className="gap-3">
          <div className="flex-shrink-0">
            <Image
              src={contest.logo || avatarPlaceholder(`${contest.title}`)}
              alt={`${contest.admin} logo`}
              width={100}
              height={100}
              className="self-center rounded-lg"
            />
          </div>
          <div className="flex-grow">
            <h2 className="text-xl font-medium">{contest.title}</h2>
            <p className="flex items-center gap-1.5 text-lg text-muted-foreground">
              <UserRoundCog size={20} className="shrink-0" />
              {contest.admin}
            </p>
          </div>
          <div className="hidden shrink-0 flex-col items-end justify-between sm:flex">
            <Badge>{contest.type}</Badge>
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
                Admin approval {contest.needApproval ? "required" : "not required"}
              </p>
              <p className="flex items-center gap-1.5">
                <Clock2 size={16} className="shrink-0" />
                {contest.start.toDateString()}
              </p>
              <p className="flex items-center gap-1.5">
                <Clock4 size={16} className="shrink-0" />
                {contest.end.toDateString()}
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
        <CardFooter />
      </article>
    </Card>
  );
};

export default ContestCard;
