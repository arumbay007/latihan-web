function tampilkanSemua() {
    $.getJSON('data/produk.json', function (data) {
        let produk = data.produk;
        $.each(produk, function (i, data) {
            $('#daftar-produk').append('<div class="col-md-4"><div class="card mb-3"><img src="img/produk/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp. ' + data.harga + '</h5><a href="kontak.html" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
        });
    });
}

tampilkanSemua();


$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('h1').html(kategori);

    if (kategori == 'All Produk') {
        tampilkanSemua();
        return;
    }


    $.getJSON('data/produk.json', function (data) {
        let produk = data.produk;
        let content = '';

        $.each(produk, function (i, data) {
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3"><img src="img/produk/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp. ' + data.harga + '</h5><a href="kontak.html" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
            }
        });

        $('#daftar-produk').html(content);
    });


});