import { Input } from "@/components/ui/Input";
import { ScrollArea } from "@/components/ui/ScrollArea";
import { Calendar, Plus } from "lucide-react";
function Dashboard() {
  return (
    <main className="h-screen overflow-clip ">
      <header className="grid py-2 items-center">
        <Input placeholder="Search for trips..." className="w-[528px] bg-gray-200 self-center" />
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
