/* eslint-disable */

// // Adroll
// adroll_adv_id = "BRIHHIIWTBCJ7P3X5A3V3Y";
// adroll_pix_id = "AAKTSZEP5NA3PNKFUT5BJB";
// (function () {
//   var _onload = function () {
//     if (document.readyState && !/loaded|complete/.test(document.readyState)) { setTimeout(_onload, 10); return }
//     if (!window.__adroll_loaded) { __adroll_loaded = true; setTimeout(_onload, 50); return }
//     var scr = document.createElement("script");
//     var host = (("https:" == document.location.protocol) ? "https://s.adroll.com" : "http://a.adroll.com");
//     scr.setAttribute('async', 'true');
//     scr.type = "text/javascript";
//     scr.src = host + "/j/roundtrip.js";
//     ((document.getElementsByTagName('head') || [null])[0] || document.getElementsByTagName('script')[0].parentNode).appendChild(scr);
//   };
//   if (window.addEventListener) { window.addEventListener('load', _onload, false); }
//   else { window.attachEvent('onload', _onload) }
// }());

// ActiveCampaign
if (!window.fetch) {
  console.log('no fetch');
  activeCampaignTracking();
} else {
  fetch('https://api.qccareerschool.com/ip').then(function (response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error('unable to categorize ip');
  }).then(function (data) {
    if (data.secure) {
      console.log('Not loading ActiveCampaign tracking');
    } else {
      activeCampaignTracking();
    }
  }).catch(function (err) {
    console.log(err);
    activeCampaignTracking();
  });
}
function activeCampaignTracking() {
  // Set to false if opt-in required
  var trackByDefault = true;
  function acEnableTracking() {
    var expiration = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 30);
    document.cookie = "ac_enable_tracking=1; expires=" + expiration + "; path=/";
    acTrackVisit();
  }
  function acTrackVisit() {
    var trackcmp_email = '';
    var trackcmp = document.createElement("script");
    trackcmp.async = true;
    trackcmp.type = 'text/javascript';
    trackcmp.src = '//trackcmp.net/visit?actid=25481980&e=' + encodeURIComponent(trackcmp_email) + '&r=' + encodeURIComponent(document.referrer) + '&u=' + encodeURIComponent(window.location.href);
    var trackcmp_s = document.getElementsByTagName("script");
    if (trackcmp_s.length) {
      trackcmp_s[0].parentNode.appendChild(trackcmp);
    } else {
      var trackcmp_h = document.getElementsByTagName("head");
      trackcmp_h.length && trackcmp_h[0].appendChild(trackcmp);
    }
  }
  if (trackByDefault || /(^|; )ac_enable_tracking=([^;]+)/.test(document.cookie)) {
    acEnableTracking();
  }
}

// facebook
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1725004270923176');
fbq('track', 'PageView');

// LiveChat
window.__lc = window.__lc || {};
window.__lc.license = 1056788;
window.__lc.chat_between_groups = false;
window.__lc.ga_version = 'gtag';
window.__lc.group = 19;
(function () {
  var lc = document.createElement('script');
  lc.type = 'text/javascript';
  lc.async = true;
  lc.src = 'https://cdn.livechatinc.com/tracking.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(lc, s);
})();
