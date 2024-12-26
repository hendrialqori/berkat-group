import Form from "./modules/form";

export default function ClockOut() {
    return (
        <main className="container font-inter flex flex-col justify-center items-center gap-7 py-6">
            <header className="flex justify-center items-center">
                <img src="/berkat-group-icon.png" className="" width={150} />
            </header>
            <section className="flex flex-col justify-center items-center w-full">
                <div className="text-center">
                    <h1 className="text-sm font-semibold -tracking-wide">Absen keluar</h1>
                    <p className="text-xs font-medium text-gray-500">Silahkan lengkapi data dibawah</p>
                </div>
                <Form />
            </section>
            <footer>
                <p className="text-[0.6rem] font-medium text-gray-400">2024 @ BERKAT GROUP</p>
            </footer>
        </main>
    )
}