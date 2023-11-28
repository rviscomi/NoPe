# [NoPe: Notification Permissions](https://nopes.vercel.app/)

NoPe is an app to visualize how real Chrome users respond to notification permission prompts. The data comes from the public [Chrome User Experience Report](https://developer.chrome.com/blog/notification-permission-data-in-crux/) (CrUX) project as an [experimental metric](https://developer.chrome.com/docs/crux/methodology/#experimental-metrics).

See [data/bigquery.sql](./data/bigquery.sql) for the query that powers the app. All sites that have had notification permission data since January 2020 and have ever been ranked in the top 10k are included (737 origins).

The data represents users' response rates to Chrome's notification permission prompt, aggregated at the origin level (per-website). The response rates are grouped into four types:

- Accept: the user actively agreed to enable notifications
- Deny: the user actively rejected enabling notifications
- Dismiss: the user actively closed the prompt without accepting or denying it
- Ignore: the user didn't interact with the prompt at all

Note that as of version 80, Chrome has [a quieter permission UI for notifications](https://blog.chromium.org/2020/01/introducing-quieter-permission-ui-for.html). This new UI is automatically enabled for users who typically block notifications and on sites with low acceptance rates.