// ========================================
// VMIND SYNERGY GROUP — Bahasa Indonesia
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mobile menu toggle
    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('navLinks');
    
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            menu.classList.toggle('active');
        });
        
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                menu.classList.remove('active');
            });
        });
    }

    // Back to top button
    const backTop = document.getElementById('backTop');
    window.addEventListener('scroll', () => {
        backTop?.classList.toggle('visible', window.scrollY > 600);
    });
    
    backTop?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Article content loader
    const articleContent = document.getElementById('articleContent');
    if (articleContent) {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id') || '1';
        
        const articles = {
            '1': {
                title: 'VMIND Synergy Group Memulai Tahap Fondasi — Awal 0,1%',
                date: '8 Mei 2026',
                body: `
                    <p>VMIND Synergy Group secara resmi memulai perjalanannya dengan tahap fondasi. Ini menandai awal 0,1% yang kritis dari apa yang akan menjadi ekosistem transformasi bisnis yang komprehensif.</p>

                    <blockquote>"Setiap perusahaan besar dimulai dengan satu langkah. Ini adalah milik kami."</blockquote>

                    <p>Tahap awal ini berfokus pada tiga hal utama: pembangunan infrastruktur inti, perakitan tim kepemimpinan, dan penentuan peta jalan strategis yang akan memandu semua operasi masa depan.</p>

                    <p>Kami tidak terburu-buru. Setiap keputusan dibuat dengan pertimbangan matang, karena fondasi yang kuat adalah kunci dari segala sesuatu yang akan dibangun di atasnya.</p>

                    <p>Berikut adalah prioritas kami selama tahap ini:</p>

                    <p>
                        • Struktur organisasi dan kerangka tata kelola<br>
                        • Pemilihan teknologi inti dan arsitektur awal<br>
                        • Pengembangan identitas merek dan strategi posisi pasar<br>
                        • Identifikasi kemitraan strategis dan negosiasi awal
                    </p>

                    <p>Angka 0,1% tidak hanya mewakili kemajuan. Ini adalah simbol komitmen kami untuk membangun sesuatu yang akan bertahan dan berevolusi selama beberapa dekade mendatang.</p>

                    <p>Kami sedang bermain untuk jangka panjang.</p>
                `
            },
            '2': {
                title: 'Project besar pertama',
                date: '8 Mei 2026',
                body: `
                    <p>VSG membangun platform global pertamanya yaitu komikz yang akan rilis pada 9-10 mei.</p>

                    <p>berikut penjelasan sedikit fitur dan desain nya</p>

                    <p>
                        • Desain logo dan sistem warna<br>
                        • Tata letak<br>
                        • System login dan bahasa merek<br>
                        • desain yang cukup keren
                    </p>

                    <p>Bukan hanya tentang terlihat bagus. Ini tentang menjadi berkesan dan mudah diingat oleh target audiens VSG.</p>

                    <p>Hasil utama dari tahap ini meliputi:</p>

                    <p>
                        • MANHUA<br>
                        • MANHWA<br>
                        • MANGA
                    </p>

                    <p>Setiap detail dipikirkan dengan matang. Dari jarak antar huruf hingga warna yang VSG pilih — semuanya punya alasan.</p>
                `
            }
        };

        const article = articles[id] || articles['1'];
        articleContent.innerHTML = `
            <div class="article-header">
                <time datetime="2026-05-04">${article.date}</time>
                <h1>${article.title}</h1>
            </div>
            <div class="article-body">
                ${article.body}
            </div>
        `;
    }
});
