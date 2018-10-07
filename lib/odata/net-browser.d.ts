/** @module odata/net */

import { HttpOData } from "../interfaces";

export var defaultHttpClient: HttpOData.HttpClient;

/* Checks whether the specified request can be satisfied with a JSONP request.
 * @param request - Request object to check.
 * @returns {Boolean} true if the request can be satisfied; false otherwise.

 * Requests that 'degrade' without changing their meaning by going through JSONP
 * are considered usable.
 *
 * We allow data to come in a different format, as the servers SHOULD honor the Accept
 * request but may in practice return content with a different MIME type.
 */
export function canUseJSONP(request: any): boolean;
/** Checks whether the specified URL is an absolute URL.
 * @param {String} url - URL to check.
 * @returns {Boolean} true if the url is an absolute URL; false otherwise.
*/
export function isAbsoluteUrl(url: string): boolean;
/** Checks whether the specified URL is local to the current context.
 * @param {String} url - URL to check.
 * @returns {Boolean} true if the url is a local URL; false otherwise.
 */
export function isLocalUrl(url: string): boolean;
