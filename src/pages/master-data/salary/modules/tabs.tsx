import { useSearchParams } from "react-router"
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function Tabs() {
    return (
        <div className="space-y-4">
            <p className="text-sm font-medium">Silahkan pilih divisi yang akan ditampikan</p>
            <div className="flex items-center flex-wrap gap-4">
                <Tab
                    name="CV Berkat Makmur Sejahtera"
                    slug="cv-berkat-makmur-sejahtera"
                />
                <Tab
                    name="PT Apotek Berkat Nusantara"
                    slug="pt-apotek-berkar-nusantara"
                />
                <Tab
                    name="PT Jaya Berkat Pharma"
                    slug="pt-jaya-berkat-pharma"
                />
            </div>
        </div>
    )
}


export const Tab = ({ name, slug }: { name: string; slug: string }) => {

    const [query, setQuery] = useSearchParams()

    const tableQuery = query.get("table") || "cv-berkat-makmur-sejahtera" // as default value

    const active = tableQuery === slug

    const handleClickTab = () => {
        setQuery((prev) => {
            // set query params
            prev.set("table", slug)
            // return all references
            return prev
        })
    }

    return (
        <button
            className={`rounded-md border border-gray-200 px-4 py-1.5 flex items-center gap-2 w-full md:w-max ${active ? "text-white bg-primary" : "text-gray-500 hover:bg-gray-200"}`}
            onClick={handleClickTab}
        >
            {active && <IoIosCheckmarkCircle className="flex-shrink-0 size-4 text-green-500" />}
            <span className="text-sm">{name}</span>
        </button>
    )
}