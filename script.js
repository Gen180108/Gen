document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("2sxb5xVy6Xqo1PMvo"); // Ganti dengan User ID EmailJS kamu

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Kirim formulir menggunakan EmailJS
        emailjs.sendForm('Gen_180108', 'Gen_180108', this)
            .then(function(response) {
                alert('Pesan kamu telah berhasil dikirim!');
                console.log('SUCCESS!', response.status, response.text);
                window.location.href = 'thankyou.html'; // Redirect ke halaman terima kasih
            }, function(error) {
                alert('Gagal mengirim pesan. Silakan coba lagi.');
                console.log('Failed to send email:', error);
            });

        // Reset formulir setelah submit
        this.reset();
    });
});
