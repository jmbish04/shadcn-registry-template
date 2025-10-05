import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function Dashboard({ stats = [] }) {
  if (stats.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center p-6 text-sm text-muted-foreground">
        No metrics available for this view.
      </div>
    );
  }

  return (
    <div className="w-full grid gap-4 p-6 md:grid-cols-2 lg:grid-cols-3">
      {stats.map(({ title, value, change }) => (
        <Card key={title}>
          <CardHeader>
            <CardTitle className="text-base font-medium text-muted-foreground">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <p className="text-3xl font-semibold tracking-tight text-foreground">{value}</p>
            {change ? (
              <p className="text-xs text-muted-foreground">{change}</p>
            ) : null}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
