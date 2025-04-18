import React, { memo, ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Delete } from "lucide-react";

import {
  Dialog,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from "../ui/dialog";
import { Button } from ".";
import { AlertDialogHeader } from "../ui/alert-dialog";

interface ConfirmationDialogProps {
  header?: string;
  modalOpen: boolean;
  handleSubmit: () => void;
  setModalOpen: (isOpen: boolean) => void;
  icon?: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  triggerButton?: ReactNode;
  title?: string | ReactNode;
  acceptButtonTitle?: string;
  description?: string | ReactNode;
  submitButtonClassName?: string;
  destructive?: boolean;
}

const ConfirmationDialog = ({
  icon = <Delete />,
  header = "Delete",
  title = "Are you sure you want to delete this tab?",
  description = "Deleting it will permanently remove its content.",
  disabled = false,
  isLoading = false,
  modalOpen,
  setModalOpen,
  handleSubmit,
  triggerButton,
  acceptButtonTitle = "Submit",
  submitButtonClassName,
  destructive = true,
}: ConfirmationDialogProps) => (
  <Dialog open={modalOpen} onOpenChange={setModalOpen}>
    <DialogTrigger asChild onClick={(event) => event.stopPropagation()}>
      {triggerButton ?? <Button>Open</Button>}
    </DialogTrigger>

    <DialogContent
      onClick={(event) => event.stopPropagation()}
      className="rounded-lg max-w-[470px] flex flex-col items-center justify-center gap-6 bg-background"
    >
      <AlertDialogHeader className="flex flex-col items-center justify-center">
        <p className="text-xl font-medium">{header}</p>
      </AlertDialogHeader>

      <DialogTitle className="flex flex-col items-center justify-center text-xl font-medium text-center">
        <span className="mb-4">{icon}</span>
        {title}
        <DialogDescription className="text-base font-normal text-center text-muted-foreground mt-2">
          {description}
        </DialogDescription>
      </DialogTitle>

      <DialogFooter className="max-w-full flex flex-col sm:flex-row gap-3 mt-4">
        <Button
          size="lg"
          disabled={disabled}
          variant="outline"
          className="flex-1 text-base font-normal"
          onClick={() => setModalOpen(false)}
        >
          Cancel
        </Button>
        <Button
          disabled={disabled}
          isLoading={isLoading}
          onClick={handleSubmit}
          variant={destructive ? "destructive" : "default"}
          size="lg"
          className={cn("flex-1 text-base font-normal", submitButtonClassName)}
        >
          {acceptButtonTitle}
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default memo(ConfirmationDialog);
