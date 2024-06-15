import { TLink } from "@/components/TLink";

export default async function Home() {
  return (
    <main className="p-24">
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using &lsquo;Content here, content here&rsquo;,
        making it look like readable English. Many desktop publishing packages
        and web page editors now use Lorem Ipsum as their default model text,
        and a search for &lsquo;lorem ipsum&rsquo; will uncover many web sites
        still in their infancy. Various versions have evolved over the years,
        sometimes by accident, sometimes on purpose (injected humour and the
        like).
      </p>
      <br />
      <TLink href="/page1">go</TLink>
      <br />
      <TLink href="/page2">go</TLink>
    </main>
  );
}
