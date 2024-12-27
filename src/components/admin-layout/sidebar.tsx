import React from "react";
import { Link, useHref } from "react-router";
import { motion } from "framer-motion";
import { TbContract, TbRibbonHealth, TbSmartHome } from "react-icons/tb";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineCoPresent } from "react-icons/md";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoLink } from "react-icons/io5";
import { TbBuildingBank } from "react-icons/tb";
import { MdOutlineViewAgenda } from "react-icons/md";
import { MdOutlinePerson4 } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GrUserWorker } from "react-icons/gr";
import { PiPersonSimpleBike, PiStackOverflowLogoBold } from "react-icons/pi";
import { useSidebarStore } from "#/stores/use-sidebar-store";

export default function Sidebar() {
    const sidebarStore = useSidebarStore()

    React.useEffect(function resizeWindow() {

        function resize() {
            const width = window.innerWidth;
            const table_landscape = 1024
            if (width >= table_landscape) {
                sidebarStore.onShow()
            }
        }

        window.addEventListener("resize", resize)
        return () => {
            window.removeEventListener("resize", resize)
        }
    }, [sidebarStore.show])

    return (
        <motion.aside
            initial={{ x: 0 }}
            animate={{ x: sidebarStore.show ? 0 : "-100%" }}
            transition={{ bounce: false, duration: 0.5 }}
            className="bg-white h-screen border-r border-[#F2F4F7] fixed lg:sticky z-[11] top-0 px-3 xl:px-5 py-3 w-60 shrink-0 space-y-5 overflow-y-scroll overflow-x-visible"
        >
            <div className="flex justify-between items-start">
                <Link to={{ pathname: "/" }}>
                    <img src="/berkat-group-icon.png" className="" width={160} />
                </Link>
                <button
                    className={`hover:outline hover:outline-black rounded-lg block lg:hidden ${sidebarStore.show ? "translate-x-0" : "translate-x-16"} transition duration-200`}
                    onClick={sidebarStore.toggle}
                >
                    <div className="flex items-center -space-x-3 bg-primary p-1 rounded-lg text-white">
                        <MdKeyboardArrowLeft className="size-5" />
                        <MdKeyboardArrowRight className="size-5" />
                    </div>
                </button>
            </div>
            <Menu title="Dashboard">
                <MenuItem
                    pathname="/payrol"
                    name="payrol"
                    icon={<TbSmartHome className="size-5" />}
                />
            </Menu>
            <Menu title="Master Data">
                <MenuItem
                    pathname="/user"
                    name="User"
                    icon={<TbSmartHome className="size-5" />}
                />
                <MenuItem
                    pathname="/area"
                    name="Departement"
                    icon={<HiOutlineOfficeBuilding className="size-5" />}
                />
                <MenuItem
                    pathname="/role"
                    name="Jabatan"
                    icon={<IoLink className="size-5" />}
                />
                <MenuItem
                    pathname="/bank-indonesia"
                    name="Bank Indonesia"
                    icon={<TbBuildingBank className="size-5" />}
                />
                <MenuItem
                    pathname="/agency"
                    name="Instansi"
                    icon={<MdOutlineViewAgenda className="size-5" />}
                />
            </Menu>
            <Menu title="Karyawan">
                <MenuItem
                    pathname="/employee"
                    name="Pegawai"
                    icon={<MdOutlinePerson4 className="size-5" />}
                />
                <MenuItem
                    pathname="/salary"
                    name="Komponet Gaji"
                    icon={<RiMoneyDollarCircleLine className="size-5" />}
                />
                <MenuItem
                    pathname="/bpjs"
                    name="BPJS Tenaga Kerja"
                    icon={<GrUserWorker className="size-5" />}
                />
                <MenuItem
                    pathname="/bpjs"
                    name="BPJS Kesehatan"
                    icon={<TbRibbonHealth className="size-5" />}
                />
                <MenuItem
                    pathname="/overtime"
                    name="Lembur"
                    icon={<PiStackOverflowLogoBold className="size-5" />}
                />
                <MenuItem
                    pathname="/asbenst"
                    name="Absensi"
                    icon={<MdOutlineCoPresent className="size-5" />}
                />
                <MenuItem
                    pathname="/contract"
                    name="Kontrak"
                    icon={<TbContract className="size-5" />}
                />
                <MenuItem
                    pathname="/client-visit"
                    name="Kunjungan Client"
                    icon={<PiPersonSimpleBike className="size-5" />}
                />
            </Menu>
        </motion.aside>
    )
}

function Menu({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="space-y-3">
            <p className="text-xs text-gray-400">{title}</p>
            <ul className="space-y-2">
                {children}
            </ul>
        </div>
    )
}

function MenuItem({ pathname, name, icon }: { pathname: string; name: string; icon: React.ReactNode }) {
    const href = useHref("")
    const isActive = href.split("/").includes(pathname.replace("/", ""))


    return (
        <Link
            to={{ pathname }}
            className={`flex items-end gap-2 w-48 rounded-md px-2 py-2 ${isActive ? "text-primary font-semibold" : "font-medium text-gray-600 hover:bg-gray-100 transition duration-200 "}`}>
            {icon}
            <span className="text-xs -tracking-wide capitalize">{name}</span>
        </Link>
    )
}