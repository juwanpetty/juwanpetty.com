import { Button } from "@/components/ui/button";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Separator as SeparatorPrimitive } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  BoldIcon,
  CodeIcon,
  ItalicIcon,
  MessageSquareTextIcon,
  RadicalIcon,
  SparklesIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from "lucide-react";

export function FloatingToolbar() {
  return (
    <div className="border-border flex items-center justify-start rounded-lg border p-1">
      <TooltipProvider delayDuration={700} skipDelayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon-sm">
              <span className="sr-only">Bold</span>
              <BoldIcon className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              <span className="font-medium">Bold</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>B</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon-sm">
              <span className="sr-only">Italicize</span>
              <ItalicIcon className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              <span className="font-medium">Italicize</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>I</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon-sm">
              <span className="sr-only">Underline</span>
              <UnderlineIcon className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              <span className="font-medium">Underline</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>U</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon-sm">
              <span className="sr-only">Strike-through</span>
              <StrikethroughIcon className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              <span className="font-medium">Strike-through</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>⇧</Kbd>
                <Kbd>X</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon-sm">
              <span className="sr-only">Mark as code</span>
              <CodeIcon className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              <span className="font-medium">Mark as code</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>E</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon-sm">
              <span className="sr-only">Mark as equation</span>
              <RadicalIcon className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              <span className="font-medium">Mark as equation</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>⇧</Kbd>
                <Kbd>E</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>

        <Separator />

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="sm">
              <MessageSquareTextIcon className="size-5" />
              <span className="px-0.5 text-sm font-medium">Comment</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              <span className="font-medium">Comment</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>⇧</Kbd>
                <Kbd>M</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>

        <Separator />

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="sm">
              <SparklesIcon className="fill-foreground size-5" />
              <span className="px-0.5 text-sm font-medium">Ask AI</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              <span className="font-medium">Ask AI</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>J</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

function Separator() {
  return (
    <SeparatorPrimitive
      orientation="vertical"
      className="mx-1.5 data-[orientation=vertical]:h-6"
    />
  );
}
