import AdminLayout from "#/components/admin-layout";
import { PiMapPinArea } from "react-icons/pi";
import { GrGroup } from "react-icons/gr";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoLink } from "react-icons/io5";
import TableReport from "./modules/table-report";
import TableContract from "./modules/table-contract";
import PieChart from "./modules/pie-chart";
import BarChart from "./modules/bar-chart";

export default function Home() {
    return (
        <AdminLayout className="space-y-5 md:space-y-10">
            <div className="flex flex-col md:flex-row items-start gap-5 xl:items-center justify-between">
                <div>
                    <h2 className="text-base xl:text-xl font-semibold -tracking-wide">Welcome back, Admin</h2>
                    <p className="text-xs xl:text-sm text-gray-500">Info report semua data</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-md p-4 space-y-2 bg-gradient-to-r from-blue-500 to-blue-700/80 text-white">
                    <div className="flex items-center gap-2">
                        <PiMapPinArea className="size-5 md:size-6" />
                        <p className="text-sm font-medium">Area</p>
                    </div>
                    <h2 className="text-5xl font-bold text-center py-3">4</h2>
                    <p className="text-xs">Total area</p>
                </div>
                <div className="border border-gray-200 rounded-md p-4 space-y-2 bg-gradient-to-r from-green-500 to-green-700/80 text-white">
                    <div className="flex items-center gap-2">
                        <GrGroup className="size-5 md:size-6" />
                        <p className="text-sm font-medium">Pegawai & Karyawan</p>
                    </div>
                    <h2 className="text-5xl font-bold text-center py-3">65</h2>
                    <p className="text-xs">Total pegawai & karyawan</p>
                </div>
                <div className="border border-gray-200 rounded-md p-4 space-y-2 bg-gradient-to-r from-purple-500 to-purple-700/80 text-white">
                    <div className="flex items-center gap-2">
                        <HiOutlineOfficeBuilding className="size-5 md:size-6" />
                        <p className="text-sm font-medium">Departement</p>
                    </div>
                    <h2 className="text-5xl font-bold text-center py-3">6</h2>
                    <p className="text-xs">Total departement</p>
                </div>
                <div className="border border-gray-200 rounded-md p-4 space-y-2 bg-gradient-to-r from-orange-500 to-orange-700/80 text-white">
                    <div className="flex items-center gap-2">
                        <IoLink className="size-5 md:size-6" />
                        <p className="text-sm font-medium">Jabatan Pegawai</p>
                    </div>
                    <h2 className="text-5xl font-bold text-center py-3">11</h2>
                    <p className="text-xs">Total jabatan pegawai</p>
                </div>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <PieChart />
                <BarChart />
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <TableReport />
                <TableContract />
            </section>
        </AdminLayout>
    )
}