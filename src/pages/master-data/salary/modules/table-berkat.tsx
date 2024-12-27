const table_head = [
    "NIK", "Nama Pegawai", "Jabatan", "Gaji Pokok",
    "Tunj. Transport/hari", "Uang Makan/hari",
    "Uang Makan Lembur/hari",
    "Uang Makan Luar Kota", "Uang Pulsa",
    "Tunj. JHT", "Tunj. JKK",
    "Tunj. JKM", "Insen Gudang"
]


import React from "react";
import Input from "#/components/ui/input";
import Select from "#/components/ui/select";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import ModalForm from "./modal-form";
import useModal from "#/components/modal/use-modal";


export default function TableBerkat() {

    const { isOpen, onOpen, onClose } = useModal()
    const [selectEmployee, setSelectEmployee] = React.useState<Employee | null>(null)

    const handleShowModal = (employe: Employee) =>
        () => {
            setSelectEmployee(employe)
            onOpen()
        }

    return (
        <React.Fragment>
            <div id="table-wrapper" className="overflow-x-auto relative rounded-md">
                <header className="sticky left-0 py-4 px-1 flex flex-col md:flex-row gap-3 justify-between">
                    <div className="flex items-center gap-2">
                        <Select id="record" className="w-20">
                            <option value="">10</option>
                            <option value="">15</option>
                            <option value="">25</option>
                        </Select>
                        <label htmlFor="record" className="text-xs md:text-sm">Records</label>
                    </div>
                    <Input className="w-64" type="search" placeholder="Cari data" />
                </header>
                <table className="table-auto border-collapse ">
                    <thead>
                        <tr>
                            {table_head.map((head, i) => (
                                <th key={i} className="text-xs md:text-sm font-medium -tracking-wide text-nowrap text-left py-[0.7rem] pl-5 pr-4 bg-primary text-white">
                                    {head}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp, i) => (
                            <tr key={i} className="hover:bg-gray-100 transition duration-200 cursor-pointer" onClick={handleShowModal(emp)}>
                                <td className="text-xs md:text-sm -tracking-wide text-nowrap py-4 pl-5 border-b border-gray-200">{emp.nik}</td>
                                <td className="text-xs md:text-sm -tracking-wide text-nowrap py-4 pl-5 border-b border-gray-200">{emp.nama_pegawai}</td>
                                <td className="text-xs md:text-sm -tracking-wide text-nowrap py-4 pl-5 border-b border-gray-200">{emp.nama_jabatan}</td>
                                <td className="text-xs md:text-sm -tracking-wide text-nowrap py-4 pl-5 border-b border-gray-200">{emp.gaji_pokok}</td>
                                <td className="text-xs md:text-sm -tracking-wide text-nowrap py-4 pl-5 border-b border-gray-200">{emp.tunj_transport_per_hari}</td>
                                <td className="text-xs md:text-sm -tracking-wide text-nowrap py-4 pl-5 border-b border-gray-200">{emp.uang_makan_per_hari}</td>
                                <td className="text-xs md:text-sm -tracking-wide text-nowrap py-4 pl-5 border-b border-gray-200">{emp.uang_makan_lembur_per_hari}</td>
                                <td className="text-xs md:text-sm -tracking-wide text-nowrap py-4 pl-5 border-b border-gray-200">{emp.uang_makan_luar_kota}</td>
                                <td className="text-xs md:text-sm -tracking-wide text-nowrap py-4 pl-5 border-b border-gray-200">{emp.uang_pulsa}</td>
                                <td className="text-xs md:text-sm -tracking-wide text-nowrap py-4 pl-5 border-b border-gray-200">{emp.tunj_jht}</td>
                                <td className="text-xs md:text-sm -tracking-wide text-nowrap py-4 pl-5 border-b border-gray-200">{emp.tunj_jkk}</td>
                                <td className="text-xs md:text-sm -tracking-wide text-nowrap py-4 pl-5 border-b border-gray-200">{emp.tunj_jkm}</td>
                                <td className="text-xs md:text-sm -tracking-wide text-nowrap py-4 pl-5 border-b border-gray-200">{emp.insen_gudang}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot></tfoot>
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
            <ModalForm isOpen={isOpen} employee={selectEmployee as Employee} onClose={onClose} />
        </React.Fragment>
    )
}

export interface Employee {
    nik: string;
    nama_pegawai: string;
    nama_jabatan: string;
    gaji_pokok: number;
    tunj_jabatan: number;
    tunj_transport_per_hari: number;
    uang_makan_per_hari: number;
    uang_makan_lembur_per_hari: number;
    uang_makan_luar_kota: number;
    uang_pulsa: number;
    tunj_jht: number;
    tunj_jkk: number;
    tunj_jkm: number;
    insen_gudang: number;
}


const employees = [
    {
        nik: "6112080708040004",
        nama_pegawai: "ABDUL WAHAB",
        nama_jabatan: "STAFF GUDANG",
        gaji_pokok: 900000,
        tunj_jabatan: 350000,
        tunj_transport_per_hari: 13000,
        uang_makan_per_hari: 20000,
        uang_makan_lembur_per_hari: 0,
        uang_makan_luar_kota: 0,
        uang_pulsa: 0,
        tunj_jht: 0,
        tunj_jkk: 0,
        tunj_jkm: 0,
        insen_gudang: 300,
    },
    {
        nik: "6171040205970001",
        nama_pegawai: "ADETYA",
        nama_jabatan: "SUPIR/DRIVER",
        gaji_pokok: 65000,
        tunj_jabatan: 250000,
        tunj_transport_per_hari: 13000,
        uang_makan_per_hari: 20000,
        uang_makan_lembur_per_hari: 0,
        uang_makan_luar_kota: 0,
        uang_pulsa: 0,
        tunj_jht: 0,
        tunj_jkk: 0,
        tunj_jkm: 0,
        insen_gudang: 0,
    },
    {
        nik: "6171055003000011",
        nama_pegawai: "ANIS",
        nama_jabatan: "ADMIN PENJUALAN",
        gaji_pokok: 950000,
        tunj_jabatan: 1200000,
        tunj_transport_per_hari: 13000,
        uang_makan_per_hari: 15000,
        uang_makan_lembur_per_hari: 0,
        uang_makan_luar_kota: 0,
        uang_pulsa: 0,
        tunj_jht: 0,
        tunj_jkk: 0,
        tunj_jkm: 0,
        insen_gudang: 0,
    },
    {
        nik: "6171032009990012",
        nama_pegawai: "WINO ALVIAN",
        nama_jabatan: "STAFF GUDANG",
        gaji_pokok: 1400000,
        tunj_jabatan: 1000000,
        tunj_transport_per_hari: 13000,
        uang_makan_per_hari: 20000,
        uang_makan_lembur_per_hari: 0,
        uang_makan_luar_kota: 0,
        uang_pulsa: 0,
        tunj_jht: 105088,
        tunj_jkk: 6816,
        tunj_jkm: 8521,
        insen_gudang: 0,
    },
    {
        nik: "6171014110040007",
        nama_pegawai: "VINA",
        nama_jabatan: "KASIR",
        gaji_pokok: 900000,
        tunj_jabatan: 450000,
        tunj_transport_per_hari: 13000,
        uang_makan_per_hari: 15000,
        uang_makan_lembur_per_hari: 0,
        uang_makan_luar_kota: 0,
        uang_pulsa: 0,
        tunj_jht: 0,
        tunj_jkk: 0,
        tunj_jkm: 0,
        insen_gudang: 0,
    },
    {
        nik: "6112015504970016",
        nama_pegawai: "VINA LO",
        nama_jabatan: "ADMIN KEUANGAN",
        gaji_pokok: 3000000,
        tunj_jabatan: 1700000,
        tunj_transport_per_hari: 13000,
        uang_makan_per_hari: 15000,
        uang_makan_lembur_per_hari: 0,
        uang_makan_luar_kota: 0,
        uang_pulsa: 0,
        tunj_jht: 105088,
        tunj_jkk: 6816,
        tunj_jkm: 8521,
        insen_gudang: 0,
    },
    {
        nik: "6171036909990010",
        nama_pegawai: "SRI YANIKA NATUNA",
        nama_jabatan: "KASIR",
        gaji_pokok: 900000,
        tunj_jabatan: 450000,
        tunj_transport_per_hari: 13000,
        uang_makan_per_hari: 15000,
        uang_makan_lembur_per_hari: 0,
        uang_makan_luar_kota: 0,
        uang_pulsa: 0,
        tunj_jht: 0,
        tunj_jkk: 0,
        tunj_jkm: 0,
        insen_gudang: 0,
    },
    {
        nik: "6108014612950003",
        nama_pegawai: "DEVITA ANGGRAINI",
        nama_jabatan: "APOTEKER",
        gaji_pokok: 0,
        tunj_jabatan: 0,
        tunj_transport_per_hari: 0,
        uang_makan_per_hari: 0,
        uang_makan_lembur_per_hari: 0,
        uang_makan_luar_kota: 0,
        uang_pulsa: 0,
        tunj_jht: 0,
        tunj_jkk: 0,
        tunj_jkm: 0,
        insen_gudang: 0,
    },
    {
        nik: "6171011305010004",
        nama_pegawai: "DEVVENT NICOLAS",
        nama_jabatan: "STAFF MARKETING",
        gaji_pokok: 1100000,
        tunj_jabatan: 200000,
        tunj_transport_per_hari: 35000,
        uang_makan_per_hari: 25000,
        uang_makan_lembur_per_hari: 0,
        uang_makan_luar_kota: 0,
        uang_pulsa: 0,
        tunj_jht: 105088,
        tunj_jkk: 6816,
        tunj_jkm: 8521,
        insen_gudang: 0,
    },
    {
        nik: "6112090106010007",
        nama_pegawai: "DIKY SUPRIYADI",
        nama_jabatan: "SUPIR/DRIVER",
        gaji_pokok: 70000,
        tunj_jabatan: 200000,
        tunj_transport_per_hari: 13000,
        uang_makan_per_hari: 20000,
        uang_makan_lembur_per_hari: 0,
        uang_makan_luar_kota: 0,
        uang_pulsa: 0,
        tunj_jht: 0,
        tunj_jkk: 0,
        tunj_jkm: 0,
        insen_gudang: 0,
    },
];
