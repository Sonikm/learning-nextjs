import Card from "@/components/Cards";
import Link from "next/link";

export default function NotificationMetrix() {
  return (
    <Card>
      <h3>Notification Metrix</h3>

      <Link href={"/complex-deshboard/archived"}>
        <div>Archived</div>
      </Link>
    </Card>
  );
}
