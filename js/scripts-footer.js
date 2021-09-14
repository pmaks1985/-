window.addEventListener('onBitrixLiveChat', function(event) {
    var widget = event.detail.widget;
    widget.subscribe({
        type: BX.LiveChatWidget.SubscriptionType.userMessage,
        callback: function(data) {
            if (typeof(dataLayer) == 'undefined') {
                dataLayer = [];
            }
            dataLayer.push({
                "ecommerce": {
                    "purchase": {
                        "actionField": {
                            "id": "chat",
                            "goal_id": "51213886"
                        },
                        "products": [{}]
                    }
                }
            });
        }
    });
});

(function(w, d, u) {
    var s = d.createElement('script');
    s.async = true;
    s.src = u + '?' + (Date.now() / 60000 | 0);
    var h = d.getElementsByTagName('script')[0];
    h.parentNode.insertBefore(s, h);
})(window, document, 'https://cdn.bitrix24.ru/b9585157/crm/site_button/loader_8_y9d1c4.js');