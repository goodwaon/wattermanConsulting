import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html style={{"scrollbar-width": "none" , "-ms-overflow-style": "none" }} lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
