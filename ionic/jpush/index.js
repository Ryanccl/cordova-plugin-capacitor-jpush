var __extends = (this && this.__extends) || (function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] }
                instanceof Array && function(d, b) { d.__proto__ = b; }) ||
            function(d, b) {
                for (var p in b)
                    if (b.hasOwnProperty(p)) d[p] = b[p];
            };
        return extendStatics(d, b);
    };
    return function(d, b) {
        extendStatics(d, b);

        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var JPushOriginal = /** @class */ (function(_super) {
    __extends(JPushOriginal, _super);

    function JPushOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JPushOriginal.prototype.functionName = function(arg1, arg2) { return cordova(this, "functionName", {}, arguments); };
    JPushOriginal.prototype.init = function() { return cordova(this, "init", { "sync": true, "platforms": ["iOS", "Android"] }, arguments); };
    JPushOriginal.prototype.setDebugMode = function(enable) { return cordova(this, "setDebugMode", { "sync": true, "platforms": ["iOS", "Android"] }, arguments); };
    JPushOriginal.prototype.getRegistrationID = function() { return cordova(this, "getRegistrationID", {}, arguments); };
    JPushOriginal.prototype.getRegistrationDeviceToken = function() { return cordova(this, "getRegistrationDeviceToken", {}, arguments); };
    JPushOriginal.prototype.stopPush = function() { return cordova(this, "stopPush", {}, arguments); };
    JPushOriginal.prototype.resumePush = function() { return cordova(this, "resumePush", {}, arguments); };
    JPushOriginal.prototype.isPushStopped = function() { return cordova(this, "isPushStopped", {}, arguments); };
    JPushOriginal.prototype.setTags = function(params) { return cordova(this, "setTags", {}, arguments); };
    JPushOriginal.prototype.addTags = function(params) { return cordova(this, "addTags", {}, arguments); };
    JPushOriginal.prototype.deleteTags = function(params) { return cordova(this, "deleteTags", {}, arguments); };
    JPushOriginal.prototype.cleanTags = function(params) { return cordova(this, "cleanTags", {}, arguments); };
    JPushOriginal.prototype.getAllTags = function(params) { return cordova(this, "getAllTags", {}, arguments); };
    JPushOriginal.prototype.checkTagBindState = function(params) { return cordova(this, "checkTagBindState", {}, arguments); };
    JPushOriginal.prototype.setAlias = function(params) { return cordova(this, "setAlias", {}, arguments); };
    JPushOriginal.prototype.deleteAlias = function(params) { return cordova(this, "deleteAlias", {}, arguments); };
    JPushOriginal.prototype.getAlias = function(params) { return cordova(this, "getAlias", {}, arguments); };
    JPushOriginal.prototype.getUserNotificationSettings = function() { return cordova(this, "getUserNotificationSettings", {}, arguments); };
    JPushOriginal.prototype.clearLocalNotifications = function() { return cordova(this, "clearLocalNotifications", {}, arguments); };
    JPushOriginal.prototype.setBadge = function(badge) { return cordova(this, "setBadge", { "sync": true, "platforms": ["iOS"] }, arguments); };
    JPushOriginal.prototype.resetBadge = function() { return cordova(this, "resetBadge", { "sync": true, "platforms": ["iOS"] }, arguments); };
    JPushOriginal.prototype.setApplicationIconBadgeNumber = function(badge) { return cordova(this, "setApplicationIconBadgeNumber", { "sync": true, "platforms": ["iOS"] }, arguments); };
    JPushOriginal.prototype.getApplicationIconBadgeNumber = function() { return cordova(this, "getApplicationIconBadgeNumber", {}, arguments); };
    JPushOriginal.prototype.addLocalNotificationForIOS = function(delayTime, content, badge, identifierKey, extras) { return cordova(this, "addLocalNotificationForIOS", { "sync": true, "platforms": ["iOS"] }, arguments); };
    JPushOriginal.prototype.deleteLocalNotificationWithIdentifierKeyInIOS = function(identifierKey) { return cordova(this, "deleteLocalNotificationWithIdentifierKeyInIOS", { "sync": true, "platforms": ["iOS"] }, arguments); };
    JPushOriginal.prototype.addDismissActions = function(actions, categoryId) { return cordova(this, "addDismissActions", { "sync": true, "platforms": ["iOS"] }, arguments); };
    JPushOriginal.prototype.addNotificationActions = function(actions, categoryId) { return cordova(this, "addNotificationActions", { "sync": true, "platforms": ["iOS"] }, arguments); };
    JPushOriginal.prototype.setLocation = function(latitude, longitude) { return cordova(this, "setLocation", { "sync": true, "platforms": ["iOS"] }, arguments); };
    JPushOriginal.prototype.startLogPageView = function(pageName) { return cordova(this, "startLogPageView", { "sync": true, "platforms": ["iOS"] }, arguments); };
    JPushOriginal.prototype.stopLogPageView = function(pageName) { return cordova(this, "stopLogPageView", { "sync": true, "platforms": ["iOS"] }, arguments); };
    JPushOriginal.prototype.beginLogPageView = function(pageName, duration) { return cordova(this, "beginLogPageView", { "sync": true, "platforms": ["iOS"] }, arguments); };
    JPushOriginal.prototype.getConnectionState = function() { return cordova(this, "getConnectionState", {}, arguments); };
    JPushOriginal.prototype.setBasicPushNotificationBuilder = function() { return cordova(this, "setBasicPushNotificationBuilder", {}, arguments); };
    JPushOriginal.prototype.setCustomPushNotificationBuilder = function() { return cordova(this, "setCustomPushNotificationBuilder", {}, arguments); };
    JPushOriginal.prototype.clearAllNotification = function() { return cordova(this, "clearAllNotification", {}, arguments); };
    JPushOriginal.prototype.clearNotificationById = function(id) { return cordova(this, "clearNotificationById", {}, arguments); };
    JPushOriginal.prototype.setLatestNotificationNum = function(num) { return cordova(this, "setLatestNotificationNum", {}, arguments); };
    JPushOriginal.prototype.addLocalNotification = function(builderId, content, title, notificationId, broadcastTime, extras) { return cordova(this, "addLocalNotification", {}, arguments); };
    JPushOriginal.prototype.removeLocalNotification = function(notificationId) { return cordova(this, "removeLocalNotification", {}, arguments); };
    JPushOriginal.prototype.reportNotificationOpened = function(msgId) { return cordova(this, "reportNotificationOpened", {}, arguments); };
    JPushOriginal.prototype.requestPermission = function() { return cordova(this, "requestPermission", {}, arguments); };
    JPushOriginal.prototype.setSilenceTime = function(startHour, startMinute, endHour, endMinute) { return cordova(this, "setSilenceTime", {}, arguments); };
    JPushOriginal.prototype.setPushTime = function(weekdays, startHour, endHour) { return cordova(this, "setPushTime", {}, arguments); };
    JPushOriginal.pluginName = "JPush";
    JPushOriginal.plugin = "cordova-plugin-capacitor-jpush.git";
    JPushOriginal.pluginRef = "plugins.jPushPlugin";
    JPushOriginal.repo = "https://github.com/caoguanjie/cordova-plugin-capacitor-jpush.git";
    JPushOriginal.install = "ionic cordova plugin add cordova-plugin-capacitor-jpush.git --variable APP_KEY=your_app_key";
    JPushOriginal.installVariables = ["APP_KEY"];
    JPushOriginal.platforms = ["Android", "iOS"];
    return JPushOriginal;
}(IonicNativePlugin));
var JPush = new JPushOriginal();
export { JPush };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2pwdXNoL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFZQSxPQUFPLDhCQUEwRixNQUFNLG9CQUFvQixDQUFDOztJQXVEakcseUJBQWlCOzs7O0lBUzFDLDRCQUFZLGFBQUMsSUFBWSxFQUFFLElBQVk7SUFRdkMsb0JBQUk7SUFNSiw0QkFBWSxhQUFDLE1BQWU7SUFHNUIsaUNBQWlCO0lBR2pCLHdCQUFRO0lBR1IsMEJBQVU7SUFHViw2QkFBYTtJQUdiLHVCQUFPLGFBQUMsTUFBa0I7SUFHMUIsdUJBQU8sYUFBQyxNQUFrQjtJQUcxQiwwQkFBVSxhQUFDLE1BQWtCO0lBRzdCLHlCQUFTLGFBQUMsTUFBa0I7SUFHNUIsMEJBQVUsYUFBQyxNQUFrQjtJQU03QixpQ0FBaUIsYUFBQyxNQUFjO0lBR2hDLHdCQUFRLGFBQUMsTUFBb0I7SUFHN0IsMkJBQVcsYUFBQyxNQUFvQjtJQUdoQyx3QkFBUSxhQUFDLE1BQW9CO0lBZTdCLDJDQUEyQjtJQUczQix1Q0FBdUI7SUFRdkIsd0JBQVEsYUFBQyxLQUFhO0lBTXRCLDBCQUFVO0lBTVYsNkNBQTZCLGFBQUMsS0FBYTtJQUczQyw2Q0FBNkI7SUFNN0IsMENBQTBCLGFBQUMsU0FBaUIsRUFBRSxPQUFlLEVBQUUsS0FBYSxFQUFFLGFBQXFCLEVBQUUsTUFBZTtJQU1wSCw2REFBNkMsYUFBQyxhQUFxQjtJQU1uRSxpQ0FBaUIsYUFBQyxPQUFzQixFQUFFLFVBQWtCO0lBTTVELHNDQUFzQixhQUFDLE9BQXNCLEVBQUUsVUFBa0I7SUFNakUsMkJBQVcsYUFBQyxRQUFnQixFQUFFLFNBQWlCO0lBTS9DLGdDQUFnQixhQUFDLFFBQWdCO0lBTWpDLCtCQUFlLGFBQUMsUUFBZ0I7SUFNaEMsZ0NBQWdCLGFBQUMsUUFBZ0IsRUFBRSxRQUFnQjtJQU9uRCxrQ0FBa0I7SUFHbEIsK0NBQStCO0lBRy9CLGdEQUFnQztJQUdoQyxvQ0FBb0I7SUFHcEIscUNBQXFCLGFBQUMsRUFBVTtJQUdoQyx3Q0FBd0IsYUFBQyxHQUFXO0lBR3BDLG9DQUFvQixhQUFDLFNBQWlCLEVBQUUsT0FBZSxFQUFFLEtBQWEsRUFBRSxjQUFzQixFQUFFLGFBQXFCLEVBQUUsTUFBZTtJQUd0SSx1Q0FBdUIsYUFBQyxjQUFzQjtJQUc5Qyx3Q0FBd0IsYUFBQyxLQUFhO0lBR3RDLGlDQUFpQjtJQUdqQiw4QkFBYyxhQUFDLFNBQWlCLEVBQUUsV0FBbUIsRUFBRSxPQUFlLEVBQUUsU0FBaUI7SUFHekYsMkJBQVcsYUFBQyxRQUF1QixFQUFFLFNBQWlCLEVBQUUsT0FBZTs7Ozs7Ozs7Z0JBclF6RTtFQW1FMkIsaUJBQWlCO1NBQS9CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xuICpcbiAqIFRPRE86XG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcbiAqXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBUYWdPcHRpb25zIHtcbiAgc2VxdWVuY2U6IG51bWJlcjtcbiAgdGFncz86IEFycmF5PHN0cmluZz47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxpYXNPcHRpb25zIHtcbiAgc2VxdWVuY2U6IG51bWJlcjtcbiAgYWxpYXM/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUganB1c2hcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IGpwdXNoIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9qcHVzaCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUganB1c2g6IGpwdXNoKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5qcHVzaC5mdW5jdGlvbk5hbWUoJ0hlbGxvJywgMTIzKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG4vLyBAUGx1Z2luKHtcbi8vICAgcGx1Z2luTmFtZTogJ2pwdXNoJyxcbi8vICAgcGx1Z2luOiAnJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4vLyAgIHBsdWdpblJlZjogJycsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbi8vICAgcmVwbzogJycsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbi8vICAgaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuLy8gICBpbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbi8vICAgcGxhdGZvcm1zOiBbXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbi8vIH0pXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0pQdXNoJyxcbiAgcGx1Z2luOiAnanB1c2gtcGhvbmVnYXAtcGx1Z2luJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5qUHVzaFBsdWdpbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vanB1c2gvanB1c2gtcGhvbmVnYXAtcGx1Z2luJyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBqcHVzaC1waG9uZWdhcC1wbHVnaW4gLS12YXJpYWJsZSBBUFBfS0VZPXlvdXJfYXBwX2tleScsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnQVBQX0tFWSddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEpQdXNoIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGRvZXMgc29tZXRoaW5nXG4gICAqIEBwYXJhbSBhcmcxIHtzdHJpbmd9IFNvbWUgcGFyYW0gdG8gY29uZmlndXJlIHNvbWV0aGluZ1xuICAgKiBAcGFyYW0gYXJnMiB7bnVtYmVyfSBBbm90aGVyIHBhcmFtIHRvIGNvbmZpZ3VyZSBzb21ldGhpbmdcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZnVuY3Rpb25OYW1lKGFyZzE6IHN0cmluZywgYXJnMjogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ11cbiAgIH0pXG4gIGluaXQoKTogdm9pZCB7ICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ11cbiAgIH0pXG4gIHNldERlYnVnTW9kZShlbmFibGU6IGJvb2xlYW4pOiB2b2lkIHsgIH1cblxuICBAQ29yZG92YSgpXG4gIGdldFJlZ2lzdHJhdGlvbklEKCk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcFB1c2goKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG5cbiAgQENvcmRvdmEoKVxuICByZXN1bWVQdXNoKCk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgaXNQdXNoU3RvcHBlZCgpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH1cblxuICBAQ29yZG92YSgpXG4gIHNldFRhZ3MocGFyYW1zOiBUYWdPcHRpb25zKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG5cbiAgQENvcmRvdmEoKVxuICBhZGRUYWdzKHBhcmFtczogVGFnT3B0aW9ucyk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZGVsZXRlVGFncyhwYXJhbXM6IFRhZ09wdGlvbnMpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH1cblxuICBAQ29yZG92YSgpXG4gIGNsZWFuVGFncyhwYXJhbXM6IFRhZ09wdGlvbnMpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH1cblxuICBAQ29yZG92YSgpXG4gIGdldEFsbFRhZ3MocGFyYW1zOiBUYWdPcHRpb25zKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBwYXJhbXMgeyBzZXF1ZW5jZTogbnVtYmVyLCB0YWc6IHN0cmluZyB9XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNoZWNrVGFnQmluZFN0YXRlKHBhcmFtczogb2JqZWN0KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG5cbiAgQENvcmRvdmEoKVxuICBzZXRBbGlhcyhwYXJhbXM6IEFsaWFzT3B0aW9ucyk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZGVsZXRlQWxpYXMocGFyYW1zOiBBbGlhc09wdGlvbnMpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH1cblxuICBAQ29yZG92YSgpXG4gIGdldEFsaWFzKHBhcmFtczogQWxpYXNPcHRpb25zKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIERldGVybWluYXRlIHdoZXRoZXIgdGhlIGFwcGxpY2F0aW9uIG5vdGlmaWNhdGlvbiBoYXMgYmVlbiBvcGVuZWQuXG4gICAqIFxuICAgKiBpT1M6IDA6IGNsb3NlZDsgPjE6IG9wZW5lZC5cbiAgICogIFVJUmVtb3RlTm90aWZpY2F0aW9uVHlwZU5vbmUgPSAwLFxuICAgKiAgVUlSZW1vdGVOb3RpZmljYXRpb25UeXBlQmFkZ2UgPSAxIDw8IDAsXG4gICAqICBVSVJlbW90ZU5vdGlmaWNhdGlvblR5cGVTb3VuZCA9IDEgPDwgMSxcbiAgICogIFVJUmVtb3RlTm90aWZpY2F0aW9uVHlwZUFsZXJ0ID0gMSA8PCAyLFxuICAgKiAgVUlSZW1vdGVOb3RpZmljYXRpb25UeXBlTmV3c3N0YW5kQ29udGVudEF2YWlsYWJpbGl0eSA9IDEgPDwgM1xuICAgKiBcbiAgICogQW5kcm9pZDogMDogY2xvc2VkOyAxOiBvcGVuZWQuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFVzZXJOb3RpZmljYXRpb25TZXR0aW5ncygpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH1cblxuICBAQ29yZG92YSgpXG4gIGNsZWFyTG9jYWxOb3RpZmljYXRpb25zKCk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuXG4gIC8vIGlPUyBBUEkgLSBzdGFydFxuXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICAgIHBsYXRmb3JtczogWydpT1MnXVxuICAgfSlcbiAgc2V0QmFkZ2UoYmFkZ2U6IG51bWJlcik6IHZvaWQgeyAgfVxuXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICAgIHBsYXRmb3JtczogWydpT1MnXVxuICAgfSlcbiAgcmVzZXRCYWRnZSgpOiB2b2lkIHsgIH1cblxuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ11cbiAgIH0pXG4gIHNldEFwcGxpY2F0aW9uSWNvbkJhZGdlTnVtYmVyKGJhZGdlOiBudW1iZXIpOiB2b2lkIHsgIH1cblxuICBAQ29yZG92YSgpXG4gIGdldEFwcGxpY2F0aW9uSWNvbkJhZGdlTnVtYmVyKCk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICAgIHBsYXRmb3JtczogWydpT1MnXVxuICAgfSlcbiAgYWRkTG9jYWxOb3RpZmljYXRpb25Gb3JJT1MoZGVsYXlUaW1lOiBudW1iZXIsIGNvbnRlbnQ6IHN0cmluZywgYmFkZ2U6IG51bWJlciwgaWRlbnRpZmllcktleTogc3RyaW5nLCBleHRyYXM/OiBvYmplY3QpOiB2b2lkIHsgIH1cblxuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ11cbiAgIH0pXG4gIGRlbGV0ZUxvY2FsTm90aWZpY2F0aW9uV2l0aElkZW50aWZpZXJLZXlJbklPUyhpZGVudGlmaWVyS2V5OiBzdHJpbmcpOiB2b2lkIHsgIH1cblxuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ11cbiAgIH0pXG4gIGFkZERpc21pc3NBY3Rpb25zKGFjdGlvbnM6IEFycmF5PG9iamVjdD4sIGNhdGVnb3J5SWQ6IHN0cmluZyk6IHZvaWQgeyAgfVxuXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICAgIHBsYXRmb3JtczogWydpT1MnXVxuICAgfSlcbiAgYWRkTm90aWZpY2F0aW9uQWN0aW9ucyhhY3Rpb25zOiBBcnJheTxvYmplY3Q+LCBjYXRlZ29yeUlkOiBzdHJpbmcpOiB2b2lkIHsgIH1cblxuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ11cbiAgIH0pXG4gIHNldExvY2F0aW9uKGxhdGl0dWRlOiBudW1iZXIsIGxvbmdpdHVkZTogbnVtYmVyKTogdm9pZCB7ICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddXG4gICB9KVxuICBzdGFydExvZ1BhZ2VWaWV3KHBhZ2VOYW1lOiBzdHJpbmcpOiB2b2lkIHsgcmV0dXJuOyB9XG5cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddXG4gICB9KVxuICBzdG9wTG9nUGFnZVZpZXcocGFnZU5hbWU6IHN0cmluZyk6IHZvaWQgeyByZXR1cm47IH1cblxuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ11cbiAgIH0pXG4gIGJlZ2luTG9nUGFnZVZpZXcocGFnZU5hbWU6IHN0cmluZywgZHVyYXRpb246IG51bWJlcik6IHZvaWQgeyByZXR1cm47IH1cblxuICAvLyBpT1MgQVBJIC0gZW5kXG5cbiAgLy8gQW5kcm9pZCBBUEkgLSBzdGFydFxuXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Q29ubmVjdGlvblN0YXRlKCk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc2V0QmFzaWNQdXNoTm90aWZpY2F0aW9uQnVpbGRlcigpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH1cblxuICBAQ29yZG92YSgpXG4gIHNldEN1c3RvbVB1c2hOb3RpZmljYXRpb25CdWlsZGVyKCk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgY2xlYXJBbGxOb3RpZmljYXRpb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG5cbiAgQENvcmRvdmEoKVxuICBjbGVhck5vdGlmaWNhdGlvbkJ5SWQoaWQ6IG51bWJlcik6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc2V0TGF0ZXN0Tm90aWZpY2F0aW9uTnVtKG51bTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG5cbiAgQENvcmRvdmEoKVxuICBhZGRMb2NhbE5vdGlmaWNhdGlvbihidWlsZGVySWQ6IG51bWJlciwgY29udGVudDogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBub3RpZmljYXRpb25JZDogbnVtYmVyLCBicm9hZGNhc3RUaW1lOiBudW1iZXIsIGV4dHJhcz86IHN0cmluZyk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgcmVtb3ZlTG9jYWxOb3RpZmljYXRpb24obm90aWZpY2F0aW9uSWQ6IG51bWJlcik6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgcmVwb3J0Tm90aWZpY2F0aW9uT3BlbmVkKG1zZ0lkOiBudW1iZXIpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH1cblxuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc2V0U2lsZW5jZVRpbWUoc3RhcnRIb3VyOiBudW1iZXIsIHN0YXJ0TWludXRlOiBudW1iZXIsIGVuZEhvdXI6IG51bWJlciwgZW5kTWludXRlOiBudW1iZXIpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH1cblxuICBAQ29yZG92YSgpXG4gIHNldFB1c2hUaW1lKHdlZWtkYXlzOiBBcnJheTxzdHJpbmc+LCBzdGFydEhvdXI6IG51bWJlciwgZW5kSG91cjogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG5cbiAgLy8gQW5kcm9pZCBBUEkgLSBlbmRcblxufVxuIl19