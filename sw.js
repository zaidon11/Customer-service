// ملف الخدمة الخلفية لاستقبال الإشعارات
self.addEventListener('push', function(event) {
    const options = {
        body: event.data.text(),
        icon: 'https://cdn-icons-png.flaticon.com/512/1161/1161388.png',
        badge: 'https://cdn-icons-png.flaticon.com/512/1161/1161388.png',
        dir: 'rtl'
    };
    event.waitUntil(
        self.registration.showNotification('مركز الراشد للاتصالات', options)
    );
});


