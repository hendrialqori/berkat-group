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
                <Route path="/payrol">
                    <Route index element={<Page.Payrol.Home />} />
                </Route>

                {/* Master data */}
                <Route path="/salary" element={<Page.MasterData.Salary />} />
                {/* End master data */}
            </Routes>
        </BrowserRouter>
    )
}