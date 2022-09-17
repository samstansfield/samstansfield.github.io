var PanoptoTS;
(function (PanoptoTS) {
    var Controls;
    (function (Controls) {
        // Static message/link to quota page to show in the create menu when the user
        // has exceeded quota
        var CreateMenuQuotaMessage = /** @class */ (function () {
            function CreateMenuQuotaMessage(resources) {
                this.resources = resources;
            }
            // Creates, wires up, and returns the JQuery element to be isnerted into
            // the rest of the UI
            CreateMenuQuotaMessage.prototype.render = function () {
                // Create the element
                var element = $(CreateMenuQuotaMessage.template(this));
                // Clicks should link to the quota page
                Panopto.Core.UI.Handlers.button(element, function () {
                    window.location.href = '/Panopto/Pages/Quotas.aspx';
                });
                // Return the element for insertion into the UI
                return element;
            };
            CreateMenuQuotaMessage.template = _.template("\n            <div class=\"create-menu-quota-message\" tabindex=\"0\" role=\"menuitem\">\n                <div class=\"over-quota-message-menu-item\">\n                    <div class=\"over-quota-message-icon\">\n                        <i class='material-icons'>error</i>\n                    </div>\n                    <div class=\"over-quota-message-header\">\n                        <div class=\"over-quota-message-title\">\n                            <@= resources.Site_Create_OverQuota_Title @>\n                        </div>\n                        <div class=\"over-quota-message-view\">\n                            <@= resources.Site_Create_OverQuota_View @>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"over-quota-message-instructions\">\n                    <@= resources.Site_Create_OverQuota_Instructions @>\n                </div>\n                <div class=\"over-quota-message-upsell\">\n                    <@= resources.Site_Create_OverQuota_Upsell @>\n                </div>\n            </div>");
            return CreateMenuQuotaMessage;
        }());
        Controls.CreateMenuQuotaMessage = CreateMenuQuotaMessage;
    })(Controls = PanoptoTS.Controls || (PanoptoTS.Controls = {}));
})(PanoptoTS || (PanoptoTS = {}));

//# sourceMappingURL=file://seasyn/tfsbuilds/panopto_core_hohno-7a0-revert-saml_x64/20191031.7/_PublishedWebsites/WebUI/Scripts/Panopto/Controls/CreateMenuQuotaMessage.js.map
