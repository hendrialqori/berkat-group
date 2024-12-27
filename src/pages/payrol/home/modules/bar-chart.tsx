import * as Popover from "@radix-ui/react-popover";
import { HiDotsVertical } from "react-icons/hi";
import { LuRefreshCcw } from "react-icons/lu";
import { ResponsiveContainer, BarChart as Root, CartesianGrid, XAxis, Legend, Tooltip, Bar, YAxis } from "recharts";

export default function BarChart() {

    const data = [
        {
            name: '1',
            masuk: 2,
            keluar: 0,
        },
        {
            name: '2',
            masuk: 1,
            keluar: 0,
        },
        {
            name: '3',
            masuk: 2,
            keluar: 0,
        },
        {
            name: '4',
            masuk: 0,
            keluar: 0,
        },
        {
            name: '5',
            masuk: 3,
            keluar: 0,
        },
        {
            name: '6',
            masuk: 1,
            keluar: 0,
        },
        {
            name: '7',
            masuk: 0,
            keluar: 0,
        },
        {
            name: '8',
            masuk: 0,
            keluar: 0,
        },
        {
            name: '9',
            masuk: 2,
            keluar: 0,
        },
        {
            name: '10',
            masuk: 1,
            keluar: 1,
        },
        {
            name: '11',
            masuk: 1,
            keluar: 3,
        },
        {
            name: '12',
            masuk: 1,
            keluar: 6,
        },
    ];


    return (
        <div className="overflow-auto relative w-full border border-gray-200 rounded-md">
            <header className="sticky left-0 flex justify-between items-center p-3 border-b border-gray-200 bg-primary text-white">
                <p className="text-xs md:text-sm font-medium">
                    Grafik Penerimaan & Resign Pegawai
                </p>
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
            <div className="py-5 space-y-3">
                <div>
                    <p className="text-center text-xs">Informasi Penerimaan & Resign Pegawai Tahun 2024</p>
                </div>
                <ResponsiveContainer width="100%" height={350}>
                    <Root
                        width={1000}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" fontSize={12} fontWeight={500} />
                        <YAxis yAxisId="left" orientation="left" stroke="black" fontSize={10} hide />
                        <YAxis yAxisId="right" orientation="right" stroke="black" hide />
                        <Tooltip />
                        <Bar yAxisId="left" dataKey="masuk" fill="#007FC3" />
                        <Legend style={{ fontSize: 12 }} />
                        <Bar yAxisId="right" dataKey="keluar" fill="black" />
                    </Root>
                </ResponsiveContainer>
            </div>
        </div>
    )
}