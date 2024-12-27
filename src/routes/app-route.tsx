import { BrowserRouter, Routes, Route } from "react-router"
import * as Page from "#/pages"

export default function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Page.Home />} />
                <Route path="/absent">
                    <Route index element={<Page.Absent />} />
                    <Route path="clock-out" element={<Page.ClockOut />} />
                    <Route path="clock-in" element={<Page.ClockIn />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}