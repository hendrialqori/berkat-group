import { lazy } from "react";

export const Home = lazy(() => import("#/pages/home"))

export const Absent = lazy(() => import("#/pages/absent"))
export const ClockIn = lazy(() => import("#/pages/clock-in"))
export const ClockOut = lazy(() => import("#/pages/clock-out"))