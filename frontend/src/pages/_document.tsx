import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <div id="backdrop-hook"></div>
        <div id="drawer-hook"></div>
        <NextScript />
      </body>
    </Html>
  )
}
