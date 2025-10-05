import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function Dashboard() {
  return (
    <div className="p-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
      <Card>
        <CardHeader>
          <CardTitle>Stat A</CardTitle>
        </CardHeader>
        <CardContent>123</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Stat B</CardTitle>
        </CardHeader>
        <CardContent>456</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Stat C</CardTitle>
        </CardHeader>
        <CardContent>789</CardContent>
      </Card>
    </div>
  );
}
