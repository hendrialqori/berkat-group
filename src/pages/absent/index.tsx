import { TbClockPin } from "react-icons/tb";
import { RiClockwiseLine } from "react-icons/ri";
import { Link } from "react-router";

export default function Absent() {

    return (
        <main className="container font-inter flex flex-col justify-center items-center gap-10">
            <header className="flex justify-center items-center">
                <img src="/berkat-group-icon.png" className="" width={150} />
            </header>
            <section className="flex flex-col justify-center items-center gap-6">
                <div className="text-center">
                    <h1 className="text-sm font-semibold -tracking-wide">Selamat datang di Berkat group</h1>
                    <p className="text-xs font-medium text-gray-500">Silahkan pilih tipe absen anda di bawah</p>
                </div>
                <div className="text-xs font-medium w-full space-y-3">
                    <Link to={{ pathname: "/absent/clock-in" }} className="bg-green-600 text-white w-full py-3 rounded-md flex justify-center items-center gap-2">
                        <TbClockPin className="text-lg" />
                        <span>Absen masuk</span>
                    </Link>
                    <Link to={{ pathname: "/absent/clock-out" }} className="bg-red-600 text-white w-full py-3 rounded-md flex justify-center items-center gap-2">
                        <RiClockwiseLine className="text-lg" />
                        <span>Absen pulang</span>
                    </Link>
                </div>
            </section>
            <footer>
                <p className="text-[0.6rem] font-medium text-gray-400">2024 @ BERKAT GROUP</p>
            </footer>
        </main>
    )
}