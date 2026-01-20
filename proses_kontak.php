<?php
// Konfigurasi Database
$host = "localhost";
$user = "root";
$pass = "";
$db   = "dbporto";

// Membuat Koneksi
$conn = mysqli_connect($host, $user, $pass, $db);

// Cek Koneksi
if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}

// Proses jika formulir dikirim
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Mengambil data dari form (Atribut 'name' harus sesuai dengan HTML)
    $nama   = mysqli_real_escape_string($conn, $_POST['nama_lengkap']);
    $email  = mysqli_real_escape_string($conn, $_POST['email']);
    $subjek = mysqli_real_escape_string($conn, $_POST['subjek']);
    $pesan  = mysqli_real_escape_string($conn, $_POST['pesan']);

    // Query SQL sesuai struktur tabel yang Anda buat
    $sql = "INSERT INTO contact_messages (nama_lengkap, email, subjek, pesan) 
            VALUES ('$nama', '$email', '$subjek', '$pesan')";

    if (mysqli_query($conn, $sql)) {
        echo "<script>
                alert('Pesan Anda berhasil terkirim!');
                window.location.href='index.php';
              </script>";
    } else {
        echo "Terjadi kesalahan: " . mysqli_error($conn);
    }
}
?>