import Login from "../(auth)/login/page";

export default function DashboardLayout({
  children,
  users,
  revenue,
  notification,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notification: React.ReactNode;
  revenue: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
          <div>{login}</div>
        </div>
        <div style={{ display: "flex" }}>{notification}</div>
      </div>
    </div>
  ) : (
    login
  );
}
