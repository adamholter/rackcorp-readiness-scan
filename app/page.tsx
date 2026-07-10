import type { Metadata } from "next";
import { ScanTool } from "./scan-tool";

export const metadata: Metadata = {
  title: "Sovereignty & Infrastructure Readiness Scan | RackCorp",
  description: "Check a public website's hosting location, resilience signals, security posture and sovereign cloud readiness.",
};

export default function Home() { return <ScanTool />; }
