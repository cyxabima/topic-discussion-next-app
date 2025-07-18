import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
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

export function TopicCreateForm() {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button>New Topic</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add New Topic</DialogTitle>
                        <DialogDescription>
                            Create a Topic for Discussion . Click Done when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="topic">Topic</Label>
                            <Input id="topic" name="topic" defaultValue="JavaScript " />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" name="description" defaultValue="topic about java script" />
                        </div>
                    </div>
                    <DialogFooter>

                        <Button type="submit" className="w-full">Done</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
