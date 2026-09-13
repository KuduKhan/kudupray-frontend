"use client";

import { dispatch } from "../runtime-events";

export default function SkipLink() {
  return (
    <a className="skip-link" href="#tab-home">
      {"Skip to content"}
    </a>
  );
}
