import { Button } from "@/components";
import Layout from "@/layout";
import Link from "next/link";

const NotFound = () => (
  <Layout>
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl font-medium mb-4">
        Not Found this URL :( visit my blog
      </h1>
      <Button>
  <a href="https://parkerzanta-blog.my.id" className="mx-7">Click here</a>
     </Button>
    </section>
  </Layout>
);

export default NotFound;
