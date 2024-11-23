import { createPortal } from "react-dom";

export default function gallery() {
  return createPortal(<dialog></dialog>, document.body);
}
