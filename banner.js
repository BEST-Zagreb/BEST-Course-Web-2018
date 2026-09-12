// Serves the archived files untouched and adds an archive notice at the top of every HTML page,
// plus a noindex header so search engines keep sending people to the current site instead of this edition.
const NOTICE = "Archived copy of the Zagreb Spring Course 2018 website, then at best.hr/spc, rebuilt from a July 2018 server backup. It is no longer updated and some links may not work. The current BEST Course site is at <a href=\"https://course.best.hr/\" style=\"color:#93c5fd\">course.best.hr</a>.";

const BAR = '<div id="archive-notice" style="position:sticky;top:0;z-index:2147483647;background:#1f2937;color:#f9fafb;font:14px/1.4 system-ui,sans-serif;padding:8px 16px;text-align:center">' + NOTICE + '</div>';

export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);
    headers.set("X-Robots-Tag", "noindex");
    const type = headers.get("content-type") || "";
    if (!type.includes("text/html")) {
      return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
    }
    return new HTMLRewriter()
      .on("body", { element(el) { el.prepend(BAR, { html: true }); } })
      .transform(new Response(response.body, { status: response.status, statusText: response.statusText, headers }));
  },
};
