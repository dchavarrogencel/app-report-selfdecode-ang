const PROXY_CONFIG = {
    "/tmp/pdf-reports/*": {
        "target": 'https://sd-platform-staging-userdatas3bucket-1vuokazil28t9.s3.amazonaws.com',
        "secure": false,
        "bypass": function(req, res, proxyOptions) {
            if (req.headers.accept.indexOf("html") !== -1) {
                return "/index.html";
            }
            req.headers["X-Custom-Header"] = "yes";

        }

    },
    "/service/*": {
      "target": 'https://qa-selfdecode.com',
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