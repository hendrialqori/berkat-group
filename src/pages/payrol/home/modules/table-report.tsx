import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

import { LuRefreshCcw } from "react-icons/lu";
import * as Popover from "@radix-ui/react-popover";

const table_head = ["Nama Pegawai", "Departement", "Tanggal", "Keterangan"]

type Employee = {
    nama_pegawai: string;
    department: string;
    tanggal: string; // You can use `Date` instead of `string` if you want to handle dates directly
    keterangan: string;
};

const employees: Employee[] = [
    { nama_pegawai: "ABDUL WAHAB", department: "BAGIAN GUDANG", tanggal: "2024-12-31", keterangan: "-" },
    { nama_pegawai: "ADETYA", department: "OPERASIONAL", tanggal: "2024-12-31", keterangan: "-" },
    { nama_pegawai: "ALTHA DWIPA RAMADONA", department: "OPERASIONAL", tanggal: "2024-12-31", keterangan: "-" },
    { nama_pegawai: "CASUARINA EQUISTIFOLIA", department: "OPERASIONAL", tanggal: "2024-12-31", keterangan: "-" },
    { nama_pegawai: "ERVINIWA", department: "BAGIAN PENJUALAN", tanggal: "2024-12-31", keterangan: "-" },
];

export default function TableReport() {
    return (
        <div className="overflow-auto relative w-full border border-gray-200 rounded-md">
            <header className="sticky left-0 flex justify-between items-center p-3 border-b border-gray-200 bg-primary text-white">
                <p className="text-xs md:text-sm font-medium">Informasi Cuti, Izin, & Sakit</p>
                <Popover.Root>
                    <Popover.Trigger asChild>
                        <button className="hover:outline hover:outline-white rounded-md p-1">
                            <HiDotsVertical />
                        </button>
                    </Popover.Trigger>
                    <Popover.Portal>
                        <Popover.Content side="left" align="start" sideOffset={16}>
                            <div className="text-[0.75rem] bg-white flex flex-col overflow-hidden rounded-lg border border-gray-200 shadow-md font-inter">
                                <button
                                    type="button"
                                    // onClick={onClick}
                                    className="w-full"
                                >
                                    <div className="flex items-center gap-3 pl-5 pr-5 py-2 hover:bg-gray-200 transition duration-300">
                                        <LuRefreshCcw className="size-4" />
                                        <p className="text-nowrap">Refresh data</p>
                                    </div>
                                </button>
                            </div>
                        </Popover.Content>
                    </Popover.Portal>
                </Popover.Root>
            </header>
            <table className="table-auto border-collapse w-full">
                <thead>
                    <tr>
                        {table_head.map((head, i) => (
                            <th key={i} className="text-xs md:text-sm font-medium -tracking-wide text-nowrap text-left py-[0.7rem] pl-5">
                                {head}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp, i) => (
                        <tr key={i}>
                            <td key={i} className="text-xs md:text-sm -tracking-wide text-nowrap py-4 pl-5 border-b border-gray-200">{emp.nama_pegawai}</td>
                            <td key={i} className="text-xs md:text-sm -tracking-wide text-nowrap py-4 pl-5 border-b border-gray-200">{emp.department}</td>
                            <td key={i} className="text-xs md:text-sm -tracking-wide text-nowrap py-4 pl-5 border-b border-gray-200">{emp.tanggal}</td>
                            <td key={i} className="text-xs md:text-sm -tracking-wide text-nowrap py-4 pl-5 border-b border-gray-200">{emp.keterangan}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <footer className="sticky left-0 p-3 flex justify-between items-center">
                <p className="text-xs font-medium text-gray-500 -tracking-wide">Showing 0 to 0 of 0 entries</p>
                <div className="flex items-center gap-3">
                    <button className="size-7 bg-gray-100 rounded-md grid place-items-center border border-gray-200">
                        <MdOutlineKeyboardArrowLeft className="text-lg" />
                    </button>
                    <button className="size-7 bg-gray-100 rounded-md grid place-items-center border border-gray-200">
                        <MdOutlineKeyboardArrowRight className="text-lg" />
                    </button>
                </div>
            </footer>
        </div>

    )
}