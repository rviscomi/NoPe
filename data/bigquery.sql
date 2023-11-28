WITH frequencies AS (
  SELECT
    MIN(IFNULL(rank, 10000000)) AS min_rank,
    COUNT(0) AS months,
    origin
  FROM
    `chrome-ux-report.materialized.device_summary`
  WHERE
    device = 'desktop' AND
    notification_permission_accept IS NOT NULL
  GROUP BY
    origin
  ORDER BY
    min_rank,
    months DESC
),

 origins AS (
  SELECT
    origin,
    date,
    notification_permission_accept AS accept,
    notification_permission_dismiss AS dismiss,
    notification_permission_deny AS deny,
    notification_permission_ignore AS `ignore`,
    notification_permission_accept + notification_permission_dismiss + notification_permission_deny + notification_permission_ignore AS total

  FROM
    `chrome-ux-report.materialized.device_summary`
  JOIN
    frequencies
  USING
    (origin)
  WHERE
    device = 'desktop' AND
    min_rank <= 10000 AND
    months >= 46
),

pct AS (
  SELECT
    origin,
    date,
    CAST(ROUND(accept / total * 100, 0) AS INT64) AS accept,
    CAST(ROUND(dismiss / total * 100, 0) AS INT64) AS dismiss,
    CAST(ROUND(deny / total * 100, 0) AS INT64) AS deny,
    CAST(ROUND(`ignore` / total * 100, 0) AS INT64) AS `ignore`
  FROM
    origins
)

SELECT
  origin,
  ARRAY_AGG((accept, dismiss, deny, `ignore`) ORDER BY date)
FROM
  pct
GROUP BY
  origin
ORDER BY
  origin