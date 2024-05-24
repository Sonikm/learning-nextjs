import Card from "@/components/Cards";
import Link from "next/link";

export default function ArchivedNotification() {
  return (
    <Card>
      <div>
          <h3>Archived Notification</h3>
        <Link href={"/complex-deshboard"}>
            <div>Default</div>
        </Link>
      </div>
    </Card>
  );
}
