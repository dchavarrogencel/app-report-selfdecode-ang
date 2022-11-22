import { environment } from '../../../environments/environment';
const PROXY_CONFIG = {
    "/tmp/pdf-reports/*": {
        "target": environment.api_url_documento,
        "secure": false,
        "bypass": function(req, res, proxyOptions) {
            if (req.headers.accept.indexOf("html") !== -1) {
                return "/index.html";
            }
            req.headers["X-Custom-Header"] = "yes";

        }

    },
    "/service/*": {
      "target": environment.api_selfdecode,
      "secure": false,
      "bypass": function(req, res, proxyOptions) {
          if (req.headers.accept.indexOf("html") !== -1) {
              return "/index.html";
          }
          req.headers["X-Custom-Header"] = "yes";

      }

  }
}

module.exports = PROXY_CONFIG;