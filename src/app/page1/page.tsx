import { TLink } from "@/components/TLink";

export default async function Page() {
  const data: string = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("OK");
    }, 2000);
  });

  return (
    <div>
      {data}
      <h1>This is my page 1</h1>
      <TLink href="/page2">go</TLink>
    </div>
  );
}
