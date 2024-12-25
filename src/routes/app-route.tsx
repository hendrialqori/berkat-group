import { BrowserRouter, Routes, Route } from "react-router"
import * as Page from "#/pages"

export default function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Page.Home />} />
                <Route path="/clock-in" element={<Page.ClockIn />} />
            </Routes>
        </BrowserRouter>
    )
}