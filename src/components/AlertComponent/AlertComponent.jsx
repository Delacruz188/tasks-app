import { Alert, Button } from "@material-tailwind/react";

import { useState } from "react";

export function AlertComponent({ msg }) {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Alert open={open} onClose={() => setOpen(false)}>
        {msg}
      </Alert>
    </>
  );
}
