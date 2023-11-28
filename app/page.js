import OriginNoPe from '../components/OriginNoPe';

export default function Home() {

  return (
    <main>
      <OriginNoPe />

      <p>Source: <a href="https://developer.chrome.com/blog/notification-permission-data-in-crux/">Chrome User Experience Report</a></p>
      <p>Note: Chrome sometimes <a href="https://blog.chromium.org/2020/01/introducing-quieter-permission-ui-for.html">changes the default behavior</a> of notification permission prompts.</p>
    </main>
  )
}
