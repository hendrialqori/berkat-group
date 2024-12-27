import AdminLayout from "#/components/admin-layout";
import TableBerkat from "./modules/table-berkat";
import Tabs from "./modules/tabs";

export default function Salary() {
    return (
        <AdminLayout className="space-y-10">
            <div>
                <h2 className="text-base xl:text-xl font-semibold -tracking-wide">Data komponent Gaji</h2>
                <p className="text-xs xl:text-sm text-gray-500">Informasi penggajian semua divisi</p>
            </div>
            <Tabs />
            <TableBerkat />
        </AdminLayout>
    )
}