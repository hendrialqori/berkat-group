import * as Popover from "@radix-ui/react-popover";
import { HiDotsVertical } from "react-icons/hi";
import { LuRefreshCcw } from "react-icons/lu";
import { ResponsiveContainer, PieChart as Root, Pie, Cell } from "recharts";

export default function PieChart() {

    const data = [
        { name: "APOTEKER", value: 5 }, { name: "BAGIAN GUDANG", value: 14 },
        { name: "BAGIAN PEMBELIAN", value: 1 }, { name: "BAGIAN PENJUALAN", value: 5 },
        { name: "MARKETING", value: 4 }, { name: "OPERASIOANAL", value: 21 }

    ];

    return (
        <div className="overflow-auto relative w-full border border-gray-200 rounded-md">
            <header className="sticky left-0 flex justify-between items-center p-3 border-b border-gray-200 bg-primary text-white">
                <p className="text-xs md:text-sm font-medium">Grafik Jumlah Pegawai</p>
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
                    <p className="text-center text-xs">Grafik jumlah pegawai setiap departement</p>
                </div>
                <ResponsiveContainer width="99%" height={350}>
                    <Root height={250}>
                        <Pie
                            data={data}
                            
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            fill="#007FC3"
                            dataKey="value"
                            label={({
                                cx,
                                cy,
                                midAngle,
                                innerRadius,
                                outerRadius,
                                value,
                                index
                            }) => {
                                const RADIAN = Math.PI / 180;
                                // eslint-disable-next-line
                                const radius = 25 + innerRadius + (outerRadius - innerRadius);
                                // eslint-disable-next-line
                                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                // eslint-disable-next-line
                                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                                return (
                                    <text
                                        x={x}
                                        y={y}
                                        fill="#000000"
                                        textAnchor={x > cx ? "start" : "end"}
                                        dominantBaseline="central"
                                        fontSize={10}
                                    >
                                        {data[index].name} ({value})
                                    </text>
                                );
                            }}
                        />
                        <Cell fill={"blue"} />
                    </Root>
                </ResponsiveContainer>
            </div>
        </div>
    )
}