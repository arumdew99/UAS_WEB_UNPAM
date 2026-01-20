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
    $conn = mysqli_connect("localhost", "root", "", "dbporto");

    if (!$conn) {
        die("Koneksi gagal");
    }

    $nama   = $_POST['nama_lengkap'];
    $email  = $_POST['email'];
    $subjek = $_POST['subjek'];
    $pesan  = $_POST['pesan'];

    mysqli_query($conn,
        "INSERT INTO contact_messages 
        (nama_lengkap, email, subjek, pesan)
        VALUES ('$nama','$email','$subjek','$pesan')"
    );

    echo "<script>alert('Pesan terkirim');</script>";
}
?>