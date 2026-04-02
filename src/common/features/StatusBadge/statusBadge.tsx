type StatusBadgeprops = {
    title: string;
    message: string;
    recommendation: string;
    status: "ok" | "missing" | "serious" | "critical";
}


const StatusBadge = ({ title, message, recommendation, status }: StatusBadgeprops) => {
    const statusColors = {
        ok: "bg-green-500",
        missing: "bg-yellow-500",
        serious: "bg-orange-500",
        critical: "bg-red-500",
    }

    return (
        <>
            <div className="pl-15 pr-15 pt-5 pb-5 bg-white rounded-xl text-black font-medium">
                <h4>{title}</h4>
                <div>{message}</div>
                <div>{recommendation}</div>
                <div className="flex items-center gap-2">
                    <div className={`${statusColors[status]} w-4 h-4 rounded-full`}></div>
                    <div>{status}</div>
                </div>
                
            </div>
        </>);
}

export default StatusBadge;