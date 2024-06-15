import { TLink } from "@/components/TLink";

export default async function Page() {
  return (
    <div>
      <h1>This is my page 2</h1>
      <TLink href="/page1">go</TLink>
    </div>
  );
}
