import { useSidebarStore } from "#/stores/use-sidebar-store";
import { VscLayoutSidebarLeft } from "react-icons/vsc";

export default function Header() {

    const toggleSidebar = useSidebarStore(state => state.toggle)

    return (
        <div className="block md:hidden pt-2">
            <button onClick={toggleSidebar}>
                <VscLayoutSidebarLeft className="size-6 text-primary" />
            </button>
        </div>
    )
}