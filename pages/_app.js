// import React from "react";
// import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
// import "antd/dist/antd.css";

import ApolloSetting from "../src/components/commons/apollo/index";
import useMounted from "../src/commons/libraries/useMounted";
import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import Layout from "../src/components/commons/layout";
import { RecoilRoot } from "recoil";
import { createUploadLink } from "apollo-upload-client";

const APOLLO_CACHE = new InMemoryCache();

function MyApp({ Component, pageProps }) {
  const mounted = useMounted();

  // const uplodLink = createUploadLink({
  //   uri: "https://backend08.codebootcamp.co.kr/graphql",
  // });

  // const client = new ApolloClient({
  //   link: ApolloLink.from([uplodLink]),
  //   cache: new InMemoryCache(),
  // });

  return (
    <RecoilRoot>
      {/* <ApolloProvider client={client}> */}
      <ApolloSetting>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
      {/* </ApolloProvider> */}
    </RecoilRoot>
  );
}

export default MyApp;
