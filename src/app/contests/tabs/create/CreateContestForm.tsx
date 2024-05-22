"use client";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DatePickerWithRange } from "@/components/ui/DatePickerWithRange"
import { useSession } from "next-auth/react";

export default function CreateContestForm() {
	const { data: session, status } = useSession();
  const user = session?.user;
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Create a new contest</h1>
      <p className="mt-2">We need a few details about your aesome contest.</p>
      <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <Label className="block text-sm font-medium" htmlFor="slug">
            Slug
          </Label>
          <div className="mt-1">
            <Input id="slug" placeholder="Enter a unique slug" required type="text" />
          </div>
        </div>
        <div className="sm:col-span-3">
          <Label className="block text-sm font-medium" htmlFor="type">
            Type
          </Label>
          <div className="mt-1">
            <Input id="type" placeholder="Enter a type" required type="text" />
          </div>
        </div>
        <div className="sm:col-span-3">
          <Label className="block text-sm font-medium" htmlFor="admin">
            Admin
          </Label>
          <div className="mt-1">
		  {user && (
			<div className="sm:col-span-3">
				<Image
				src={user.image || "./logoIconLight"}
				width={40}
				alt="User profile picture"
				height={40}
				className="rounded-full"
				/>
				<p className="text-sm font-medium">
				{user?.name || `User`}
				</p>
			</div>
			)}
            {/* <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select an admin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">John Doe</SelectItem>
                <SelectItem value="2">Jane Smith</SelectItem>
                <SelectItem value="3">Bob Johnson</SelectItem>
              </SelectContent>
            </Select> */}
          </div>
        </div>
        <div className="sm:col-span-3">
          <Label className="block text-sm font-medium" htmlFor="needApproval">
            Permissions
          </Label>
          <div className="flex flex-row self-center gap-1 space-x-2 mt-1">
			<div className="items-top ">
				<Checkbox id="terms1" />
				<div className="grid gap-1.5 leading-none">
					<label
					htmlFor="terms1"
					className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						Private Contest
					</label>
					<p className="text-xs text-muted-foreground">
						Contest will not be shown on browse contests page.
					</p>
				</div>
			</div>
			<div className="items-center ">
				<Checkbox id="terms1" />
				<div className="grid gap-1.5 leading-none">
					<label
					htmlFor="terms1"
					className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						Approve participants
					</label>
					<p className="text-xs text-muted-foreground">
						Only participants you allow can join.
					</p>
				</div>
			</div>
          </div>
        </div>
        <div className="sm:col-span-3">
          <Label className="block text-sm font-medium" htmlFor="title">
            Title
          </Label>
          <div className="mt-1">
            <Input id="title" placeholder="Enter a title" required type="text" />
          </div>
        </div>
		<div className="sm:col-span-3">
          <Label className="block text-sm font-medium" htmlFor="logo">
            Logo
          </Label>
          <div className="mt-1">
            <Input id="logo" placeholder="Enter a logo URL" type="text" />
          </div>
        </div>
        <div className="sm:col-span-3">
          <Label className="block text-sm font-medium" htmlFor="description">
            Description
          </Label>
          <div className="mt-1">
            <Textarea id="description" placeholder="Enter a description (Markdown supported)" />
          </div>
        </div>
        <div className="sm:col-span-3">
          <Label className="block text-sm font-medium" htmlFor="start">
            Duration
          </Label>
          <div className="mt-1">
			<DatePickerWithRange/>
			</div>
        </div>
      </div>
      <div className="mt-8 flex justify-end gap-x-4">
        <Button variant="outline">Cancel</Button>
        <Button type="submit">Create</Button>
      </div>
    </div>
  )
}