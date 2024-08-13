import { Header } from "@/components/header"
import { Card } from "@/components/card"

export default function Dashboard() {
    return (
        <main>
            <Header />
            <div className="container mt-6">
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2">
                    <Card  name="PC Desktop" ip="192.168.1.7" iconName="PowerIcon" />
                    <Card  name="Pi Pico Garage" ip="192.168.1.13" iconName="CpuChipIcon" />
                </div>
            </div>
        </main>
    )
}