import { PiCashRegister } from "react-icons/pi";
import { GrSchedules } from "react-icons/gr";
import { TbReportMoney } from "react-icons/tb";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

export default function Home() {
    return (
        <main
            className="font-inter w-full max-w-[1800px] mx-auto min-h-screen flex flex-col md:flex-row"
            style={{ background: "url('/office.jpg')", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
        >
            <div className="absolute inset-0 bg-black/50" />
            <section className="w-full md:w-6/12 bg-yellow-500/30 grid place-items-center md:rounded-r-3xl overflow-hidden relative py-5 md:py-0">
                <img src="/logo.png" alt="logo" />
                <p className="text-white text-base md:text-xl font-bold">PT Junadev Technology</p>
            </section>
            <section
                className="w-full px-10 md:w-6/12 flex flex-col justify-center items-center gap-5 md:gap-4 relative"
            >
                <header className="grid place-items-center relative py-5">
                    <img src="/berkat-group-icon.png" className="" width={200} />
                    <div className="text-center -tracking-wide space-y-2">
                        <h1 className="text-lg font-bold text-yellow-500">SELAMAT DATANG ADMIN</h1>
                        <p className="text-xs md:text-sm text-white">Jalanin produktifitas anda dengan aplikasi CRM dari Berkat Group.</p>
                    </div>
                </header>
                <div className="w-full md:w-8/12 space-y-4 pb-4">
                    <div
                        style={{ background: "url('/cashier.jpg')", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "600px" }}
                        className="relative h-28 w-full rounded-lg overflow-hidden grid place-items-center">
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="relative text-white z-2 flex gap-3 w-full px-4 md:px-10">
                            <PiCashRegister className="text-3xl shrink-0 text-orange-300" />
                            <div className="space-y-1">
                                <h2 className="text-sm md:text-xl font-bold">KASIR</h2>
                                <p className="text-[0.65rem] md:text-xs font-light">Kelola data kasir untuk memantau aktivitas dan performa mereka</p>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ background: "url('/employee.jpg')", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "600px" }}
                        className="relative h-28 w-full rounded-lg overflow-hidden grid place-items-center">
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="relative text-white z-2 flex gap-3 w-full px-4 md:px-10">
                            <GrSchedules className="text-2xl shrink-0 text-yellow-300" />
                            <div className="space-y-1">
                                <h2 className="text-sm md:text-xl font-bold">JADWAL KARYAWAN</h2>
                                <p className="text-[0.65rem] md:text-xs font-light">Pantau jadwal kerja karyawan agar operasional lebih terorganisir</p>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ background: "url('/money.jpg')", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "600px" }}
                        className="relative h-28 w-full rounded-lg overflow-hidden grid place-items-center">
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="relative text-white z-2 flex gap-3 w-full px-4 md:px-10">
                            <TbReportMoney className="text-3xl shrink-0 text-green-300" />
                            <div className="space-y-1">
                                <h2 className="text-sm md:text-xl font-bold">GAJIAN</h2>
                                <p className="text-[0.65rem] md:text-xs font-light"> kelola gaji karyawan dengan mudah, lengkap</p>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ background: "url('/office.jpg')", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "600px" }}
                        className="relative h-28 w-full rounded-lg overflow-hidden grid place-items-center">
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="relative text-white z-2 flex gap-3 w-full px-4 md:px-10">
                            <HiOutlineOfficeBuilding className="text-3xl shrink-0 text-blue-300" />
                            <div className="space-y-1">
                                <h2 className="text-sm md:text-xl font-bold">OFFICE</h2>
                                <p className="text-[0.65rem] md:text-xs font-light">kelola data penting seperti inventaris kantor, daftar karyawan, dan dokumen lainnya.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
} 