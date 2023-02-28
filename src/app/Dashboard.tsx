import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Input } from "@/components/ui/Input";
import { ScrollArea } from "@/components/ui/ScrollArea";
import { Calendar, BellIcon, Settings, SunIcon } from "lucide-react";
function Dashboard() {
  return (
    <main className="h-screen overflow-clip ">
      <header className="gap-x-4 p-2 px-4 items-center">
        <Input placeholder="Search for trips..." className="max-w-[528px] bg-gray-200 justify-self-center border-none" />
        <ul className="flex gap-x-4 items-center justify-self-end">
          <button> <SunIcon /></button>
          <button> <Settings /></button>
          <button> <BellIcon /></button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>GB</AvatarFallback>
          </Avatar>
        </ul>
      </header>
      < ScrollArea className="bg-[#f5f7fa] h-full w-full p-5 " >
        <h2 className="my-2 mx-2">Upcoming Trips (1)</h2>
        <section className="h-96 w-full rounded-2xl bg-white">

        </section>
      </ScrollArea >
    </main >
  );
}

export default Dashboard;
