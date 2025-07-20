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
                    <form action={action} className="flex flex-col gap-4">
                        <DialogHeader>
                            <DialogTitle>Add New Topic</DialogTitle>
                            <DialogDescription>
                                Create a Topic for Discussion.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" name="name" />
                            </div>
                            {formState.errors.name && <p className="text-sm text-red-600">{formState.errors.name}</p>}
                            <div className="grid gap-3">
                                <Label htmlFor="description">Description</Label>
                                <Textarea id="description" name="description" />
                            </div>
                            {formState.errors.description && <p className="text-sm text-red-600">{formState.errors.description}</p>}
                            {formState.errors.formError && <div className="text-sm bg-red-500 mb-3 p-2 text-white rounded font-semibold">{formState.errors.formError}</div>}
                        </div>
                        <DialogFooter>

                            <Button type="submit" className="w-full">Create</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </form>
        </Dialog>
    )
}
