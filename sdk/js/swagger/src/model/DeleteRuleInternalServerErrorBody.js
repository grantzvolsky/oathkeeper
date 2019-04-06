/**
 * ORY Oathkeeper
 * ORY Oathkeeper is a reverse proxy that checks the HTTP Authorization for validity against a set of rules. This service uses Hydra to validate access tokens and policies.
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OryOathkeeper) {
      root.OryOathkeeper = {};
    }
    root.OryOathkeeper.DeleteRuleInternalServerErrorBody = factory(root.OryOathkeeper.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeleteRuleInternalServerErrorBody model module.
   * @module model/DeleteRuleInternalServerErrorBody
   * @version Latest
   */

  /**
   * Constructs a new <code>DeleteRuleInternalServerErrorBody</code>.
   * DeleteRuleInternalServerErrorBody DeleteRuleInternalServerErrorBody delete rule internal server error body
   * @alias module:model/DeleteRuleInternalServerErrorBody
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>DeleteRuleInternalServerErrorBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeleteRuleInternalServerErrorBody} obj Optional instance to populate.
   * @return {module:model/DeleteRuleInternalServerErrorBody} The populated <code>DeleteRuleInternalServerErrorBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'Number');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], [{'String': Object}]);
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('request')) {
        obj['request'] = ApiClient.convertToType(data['request'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * code
   * @member {Number} code
   */
  exports.prototype['code'] = undefined;
  /**
   * details
   * @member {Array.<Object.<String, Object>>} details
   */
  exports.prototype['details'] = undefined;
  /**
   * message
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * reason
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * request
   * @member {String} request
   */
  exports.prototype['request'] = undefined;
  /**
   * status
   * @member {String} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


