"use client";

import Script from "next/script";
import { useEffect } from "react";
import SkipLink from "./sections/SkipLink";
import AppHeader from "./sections/AppHeader";
import TabQuranReader from "./sections/TabQuranReader";
import TabHome from "./sections/TabHome";
import TabCompanion from "./sections/TabCompanion";
import TabGuides from "./sections/TabGuides";
import TabDuas from "./sections/TabDuas";
import TabArabic from "./sections/TabArabic";
import TabSupport from "./sections/TabSupport";
import TabSettings from "./sections/TabSettings";
import AppNavigation from "./sections/AppNavigation";
import AppFooter from "./sections/AppFooter";
import IslamicCalendarLayer from "./sections/IslamicCalendarLayer";
import BackToTop from "./sections/BackToTop";
import Toast from "./sections/Toast";

// Keep this shell stable: the preserved runtime owns dynamic lists, audio, and dialogs.
export default function KuduPray() {
  useEffect(() => {
    let snapshotModule;
    const loadSnapshotModule = () => {
      snapshotModule ||= import('../lib/share-snapshot').catch(error => {
        snapshotModule = null;
        throw error;
      });
      return snapshotModule;
    };
    const prepare = () => loadSnapshotModule().then(module => module.prepareShareSnapshots()).catch(() => {});
    const idle = 'requestIdleCallback' in window;
    const warmup = idle ? window.requestIdleCallback(prepare, { timeout: 2000 }) : window.setTimeout(prepare, 500);
    window.openKuduPraySnapshot = (source, data) => loadSnapshotModule().then(module => module.openShareSnapshot(source, data));
    return () => {
      if (idle) window.cancelIdleCallback(warmup);
      else window.clearTimeout(warmup);
      delete window.openKuduPraySnapshot;
    };
  }, []);
  return (
    <>
      <SkipLink />
      <AppHeader />
      <TabQuranReader />
      <TabHome />
      <TabCompanion />
      <TabGuides />
      <TabDuas />
      <TabArabic />
      <TabSupport />
      <TabSettings />
      <AppNavigation />
      <AppFooter />
      <IslamicCalendarLayer />
      <BackToTop />
      <Toast />
      <Script
        id="kudupray-runtime"
        src="/kudupray-runtime.js?v=20260927b"
        strategy="afterInteractive"
      />
    </>
  );
}
