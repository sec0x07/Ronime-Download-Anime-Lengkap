import { Button } from "@/components";
import Layout from "@/layout";
import Link from "next/link";

const NotFound = () => (
  <Layout>
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl font-medium mb-4">
        Not Found this URL
      </h1>
      <Button>
  <a href="https://www.karanime.top/" className="mx-7">Back Home</a>
     </Button>
    </section>
  </Layout>
);

export default NotFound;
