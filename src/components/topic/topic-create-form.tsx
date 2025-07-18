"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../ui/textarea"
import { useActionState } from "react"
import createTopic from "@/actions/create-topic"

export function TopicCreateForm() {
    const [formState, action] = useActionState(createTopic, { errors: {} })
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button>New Topic</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <form action={action}>
                        <DialogHeader>
                            <DialogTitle>Add New Topic</DialogTitle>
                            <DialogDescription>
                                Create a Topic for Discussion . Click Done when you&apos;re
                                done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" name="name" defaultValue="JavaScript " />
                            </div>
                            {formState.errors.name && <p className="text-sm text-red-600">{formState.errors.name}</p>}
                            <div className="grid gap-3">
                                <Label htmlFor="description">Description</Label>
                                <Textarea id="description" name="description" defaultValue="topic about java script" />
                            </div>
                            {formState.errors.description && <p className="text-sm text-red-600">{formState.errors.description}</p>}
                            {formState.errors.formError && <div className="text-sm bg-red-500 mb-3 p-2 text-white rounded font-semibold">{formState.errors.formError}</div>}
                        </div>
                        <DialogFooter>

                            <Button type="submit" className="w-full">Done</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </form>
        </Dialog>
    )
}
