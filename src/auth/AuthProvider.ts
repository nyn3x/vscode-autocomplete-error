import {
  MsalAuthProvider,
  LoginType,
  IMsalAuthProviderConfig,
} from "react-aad-msal";
import { Configuration, AuthenticationParameters } from "msal";
import { LogLevel, Logger as MsalLogger } from "msal";
import { log } from "../logger";

const msalLogger = new MsalLogger(
  (logLevel, message, containsPii) => {
    // console.log("[MSAL]", message);
    log.trace(message);
  },
  {
    level: LogLevel.Info,
    piiLoggingEnabled: false,
  }
);

// Msal Configurations
const config: Configuration = {
  auth: {
    authority: `https://login.microsoftonline.com/${process.env.REACT_APP_TENANT_ID}`,
    clientId: process.env.REACT_APP_CLIENT_ID ?? "",
    redirectUri: process.env.REACT_APP_REDIR_URL ?? "",
    postLogoutRedirectUri:
      document.location.protocol + "//" + document.location.host + "/",
  },
  // Enable logging of MSAL events for easier troubleshooting.
  // This should be disabled in production builds.
  system: {
    logger: msalLogger as MsalLogger,
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true,
  },
};

// Authentication Parameters
const authenticationParameters: AuthenticationParameters = {
  scopes: [process.env.REACT_APP_SCOPE ?? ""],
};

// Options
const options: IMsalAuthProviderConfig = {
  loginType: LoginType.Redirect,
  tokenRefreshUri: window.location.origin + "/auth.html",
};

export const authProvider = new MsalAuthProvider(
  config,
  authenticationParameters,
  options
);
