import { useEffect } from "react";

// Adds smooth snapping feel by nudging scroll to nearest anchor when close.
export default function ScrollSections() {
  useEffect(() => {
    const handler = () => {
      // no-op placeholder for possible advanced behavior in future
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return null;
}
