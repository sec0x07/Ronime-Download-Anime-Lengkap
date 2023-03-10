import Head from "next/head";
import PropTypes from "prop-types";
import { Navbar, Footer } from "@/components";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>KaraNime - Download Anime Batch Subtitle Indonesia</title>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="google-site-verification" content="Wb246OBYzaqXtALQ7tVsWze53MWMTrulMHrL8BnvDGA" />
  
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-WT590PD75V"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-WT590PD75V');
</script>

    </Head>
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="min-h-full" id="particle-js">
        {children}
      </main>
      <Footer />
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
