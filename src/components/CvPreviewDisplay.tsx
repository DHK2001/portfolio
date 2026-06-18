"use client";

import {
  faDownload,
  faExternalLink,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
  fileUrl: string;
  fileName: string;
  title: string;
  closeDisplay: () => void;
};

const CvPreviewDisplay = ({
  fileUrl,
  fileName,
  title,
  closeDisplay,
}: Props) => {
  function downloadPdf() {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="fixed inset-0 z-[900] flex items-center justify-center bg-[color:var(--display)] p-3 sm:p-8">
      <div className="flex h-[90dvh] w-full max-w-6xl flex-col overflow-hidden rounded-lg border border-white/10 bg-[color:var(--cards)] shadow-2xl">
        <div className="flex items-center justify-between gap-3 border-b border-[color:var(--border)] px-3 py-3 sm:px-4">
          <p className="min-w-0 truncate text-sm font-semibold text-[color:var(--primary-text)] sm:text-base">
            {title}
          </p>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open CV in a new tab"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-[color:var(--border)] text-[color:var(--primary-text)] transition hover:border-[color:var(--primary)]"
            >
              <FontAwesomeIcon icon={faExternalLink} className="h-4 w-4" />
            </a>
            <button
              onClick={downloadPdf}
              aria-label="Download CV"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-[color:var(--primary)] bg-[color:var(--primary)] text-[var(--button-text)] transition hover:opacity-90"
            >
              <FontAwesomeIcon icon={faDownload} className="h-4 w-4" />
            </button>
            <button
              onClick={closeDisplay}
              aria-label="Close CV preview"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-[color:var(--border)] text-[color:var(--primary-text)] transition hover:border-[color:var(--primary)]"
            >
              <FontAwesomeIcon icon={faX} className="h-4 w-4" />
            </button>
          </div>
        </div>

        <iframe
          src={`${fileUrl}#toolbar=0&navpanes=0`}
          title={title}
          className="h-full w-full bg-white"
        />
      </div>
    </div>
  );
};

export default CvPreviewDisplay;
