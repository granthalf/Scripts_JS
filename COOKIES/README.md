```
####################################################################################
#                                 COOKIES on the WEB
#
#                         Tips for Cookies Architecture
#
####################################################################################

Differents editors use different technical cookies.


🍪 1. Cookiebot (Cybot)

Cookie							Role										Notes
CookieConsent					Consent preferences stockage				Usual
CookieConsentBulkTicket			Consent group managed						Rare
consentUUID						ID for consent								What we See on the Web
CybotCookiebotDialog			State of banner								Optionnal
CybotCookiebotDialogShown		Banner has been displayed					Optionnal

How to detect?
with consentUUID


🍪 2. OneTrust

Cookie							Role
OptanonConsent					Consent preferences stockage
OptanonAlertBoxClosed			Banner has been closed
_dc_gtm_UA-*					GTM Management (integration with OneTrust)
_gid, _ga						OneTrust management for Google Analytics
_gcl_au							If allow, management Google Ads Convert

How to detect?
with OptanonConsent


🍪 3. Didomi

Cookie							Role
euconsent-v2					Chain IAB TCF v2
didomi_token					Consent token Didomi
didomi_prefs					User preferences
didomi_user						Id User made anonymous

How to detect?
with didomi_token, euconsent-v2



🍪 4. Axeptio

Cookie							Role
axeptio_cookies					Preferences stockage
axeptio_authorized_vendors		Vendors authorized list
axeptio_all_vendors				Full Vendors list
axeptio_session					Session Axeptio

How to detect?
with any name start by axeptio_


🍪 5. TrustArc

Cookie							Role
notice_preferences				Consent preferences
notice_gdpr_prefs				PRGD preferences
notice_behavior					State of banner


🍪 6. Quantcast Choice (CMP IAB)

Cookie							Role
euconsent-v2					Chain TCF v2
qcConsent						Quantcast Consent
qcPrefs							Preferences


🍪 7. Usercentrics

Cookie							Role
uc_settings						User preferences
uc_user_interaction				Interaction with banner
uc_tcf							Chain TCF v2



```