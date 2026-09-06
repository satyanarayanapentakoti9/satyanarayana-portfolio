import type { MouseEvent } from "react";

export function getResumeDownloadFilename(date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `Satyanarayana Pentakoti_${year}-${month}-${day}.pdf`;
}

export function prepareResumeDownload(event: MouseEvent<HTMLAnchorElement>): void {
  // Refresh at click time, including when the page has stayed open overnight.
  event.currentTarget.download = getResumeDownloadFilename();
}
