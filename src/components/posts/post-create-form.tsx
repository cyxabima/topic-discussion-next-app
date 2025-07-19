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
import createPost from "@/actions/create-post"

export function PostCreateForm({ slug }: { slug: string }) {
    const [formState, action] = useActionState(createPost.bind(null, slug), { errors: {} })
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button>Add Post</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <form action={action} className="flex flex-col gap-4">
                        <DialogHeader>
                            <DialogTitle>Add New Post</DialogTitle>
                            <DialogDescription>
                                Create a post about <span className="text-blue-600 font-extrabold">{slug}</span>.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="title">Title</Label>
                                <Input id="title" name="title" />
                            </div>
                            {formState.errors.title && <p className="text-sm text-red-600">{formState.errors.title}</p>}
                            <div className="grid gap-3">
                                <Label htmlFor="content">Content</Label>
                                <Textarea id="content" name="content" />
                            </div>
                            {formState.errors.content && <p className="text-sm text-red-600">{formState.errors.content}</p>}
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
