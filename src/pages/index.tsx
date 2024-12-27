import { lazy } from "react";
import * as Payrol from "#/pages/payrol"
import * as MasterData from "#/pages/master-data"

export const Home = lazy(() => import("#/pages/home"))

export const Absent = lazy(() => import("#/pages/absent"))
export const ClockIn = lazy(() => import("#/pages/clock-in"))
export const ClockOut = lazy(() => import("#/pages/clock-out"))

export { Payrol, MasterData }

